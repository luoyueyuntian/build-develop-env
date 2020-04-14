import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_EDIT_INDEX } from './action-types'
import { TODO_STATUS } from '../common/constant/index'

/**
 * 增加待完成事项
 * @param {object} param0 
 */
export const addTodo = ({ name, desc, unit, count }) => {
    return {
        type: ADD_TODO,
        name,
        desc,
        unit,
        count,
        status: TODO_STATUS.WAIT_TO_DO
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
        id,
        name,
        excepetTime,
        status
    }
}

/**
 * 设置编辑事项的序号
 * @param {number} index 
 */
export const setEditIndex = (index) => {
    return {
        type: SET_EDIT_INDEX,
        index
    }
}