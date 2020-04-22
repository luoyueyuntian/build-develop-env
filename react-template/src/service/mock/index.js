import Mock from 'mockjs'

import { TODO_STATUS } from '../../common/constant/index'
Mock.setup({
    timeout: '40-250'
})


Mock.mock('/todo/history/get', 'get', () => {
    const length = Mock.Random.natural(20, 60)
    const result = []
    let startId = Mock.Random.natural(10,30)
    for (let i = 0; i < length; i++) {
        const item = {
            id: startId++,
            name: Mock.Random.cword(5, 12),
            desc: Mock.Random.csentence(22, 63),
            unit: ['小时','天','周','月','年'][Mock.Random.natural(0,4)],
            count: Mock.Random.natural(1,15),
            status: Mock.Random.natural(0,4),
            createTime: Date.now() - Mock.Random.natural(10000,100000000)
        }
        const unitTimeMap = {
            '小时': 60 * 60 * 1000,
            '天': 24 * 60 * 60 * 1000,
            '周': 7 * 24 * 60 * 60 * 1000,
            '月': 30 * 24 * 60 * 60 * 1000,
            '年': 365 * 24 * 60 * 60 * 1000,
        }
        if (item.status === TODO_STATUS.DONE) {
            item.doneTime = item.createTime + unitTimeMap[item.unit] * item.count
        }
        result.push(item)
    }
    return result
})