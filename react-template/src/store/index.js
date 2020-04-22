import { createStore } from 'redux'
import { reduces } from './reduces'
import initData from './data'
import { addTodo, setDataReadyStatus } from './actions'

import { getTodos } from '../service/request'
const store = createStore(reduces, initData)
if (process.env.NODE_ENV === 'development') {
    getTodos().then(res => {
        const { data } = res
        for (let i = 0; i < data.length; i++) {
            store.dispatch(addTodo(data[i]))
        }
        store.dispatch(setDataReadyStatus())
    })
}
export default store
