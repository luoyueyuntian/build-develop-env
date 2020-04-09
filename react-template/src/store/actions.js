import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './action-types'

/**
 * 增加待完成事项
 * @param {object} param0 
 */
export const addTodo = ({ name, excepetTime}) => {
    return {
        type: ADD_TODO,
        name,
        excepetTime
    }
}

/**
 * 删除待办事项
 * @param {number} id 
 */
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

/**
 * 更新待完成事项
 * @param {number} id 
 * @param {string} name 
 * @param {string} excepetTime 
 * @param {number} status 
 */
export const updateTodo = (id, name, excepetTime, status) => {
    return {
        type: UPDATE_TODO,
        name,
        excepetTime,
        status
    }
}