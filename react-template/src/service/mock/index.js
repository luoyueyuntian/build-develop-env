import Mock from 'mockjs'
Mock.setup({
    timeout: '40-250'
})


Mock.mock('/todo/history/get', 'get', () => {
    const length = Mock.Random.natural(20, 60)
    const result = []
    let startId = Mock.Random.natural(10,30)
    for (let i = 0; i < length; i++) {
        result.push({
            id: startId++,
            name: Mock.Random.csentence(5),
            desc: Mock.Random.csentence(22),
            unit: ['小时','天','周','月','年'][Mock.Random.natural(0,4)],
            count: Mock.Random.natural(1,15),
            status: Mock.Random.natural(0,4)
        })
    }
    return result
})