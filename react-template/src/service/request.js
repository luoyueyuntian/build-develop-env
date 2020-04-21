import axios from 'axios'

import './mock/index'

const getTodos = () => {
    return axios.get('/todo/history/get')
}

export {
    getTodos
}