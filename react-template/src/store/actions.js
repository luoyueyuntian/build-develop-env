import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_EDIT_INDEX, SET_FILTER_STATUS } from './action-types'

/**
 * 增加待完成事项
 * @param {object} param0 
 */
export const addTodo = ({ name, desc, unit, count, status }) => {
    return {
        type: ADD_TODO,
        name,
        desc,
        unit,
        count,
        status
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
export const updateTodo = ({id, name, desc, unit, count, status}) => {
    return {
        type: UPDATE_TODO,
        id,
        name,
        desc,
        unit,
        count,
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

export const setFilterStauts = (status) => {
    return {
        type: SET_FILTER_STATUS,
        status
    }
}