import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_EDIT_INDEX, SET_FILTER_STATUS, SET_DATA_READY } from './action-types'
import { generateTodoId } from '../common/utils/index'
import { TODO_STATUS } from '../common/constant/index'

/**
 * 添加事件
 * @param {object} state 
 * @param {object} newTodo 
 */
const addTodo = (state, newTodo) => {
    return state.concat({
        id: generateTodoId(),
        name: newTodo.name,
        desc: newTodo.desc,
        unit: newTodo.unit,
        count: newTodo.count,
        status: newTodo.status,
        createTime: Date.now()
    })
}

/**
 * 删除事件
 * @param {object} state 
 * @param {object} todoId 
 */
const deleteTodo = (state, todoId) => {
    return state.filter(item => item.id !== todoId)
}

/**
 * 更新事件
 * @param {object} state 
 * @param {object} param1 
 */
const updateTodo = (state, { id, name, desc, unit, count, status }) => {
    return state.map(item => {
        if (item.id !== id) return item
        let newItem = { ...item }
        if (name) newItem.name = name
        if (desc) newItem.desc = desc
        if (item.status !== TODO_STATUS.DONE && status) {
            newItem.status = status
            if (status === TODO_STATUS.DONE) {
                newItem.doneTime = Date.now()
            }
        }
        if (unit) newItem.unit = unit
        if (count) newItem.count = count
        return newItem
    })
}

/**
 * 设置编辑的事项的序号
 * @param {*} state 
 * @param {*} param1 
 */
const setEditIndexReduce = (state = { editIndex: - 1 }, { type, index }) => {
    switch (type) {
        case SET_EDIT_INDEX:
            return {
                editIndex: index
            }
        default:
            return state
    }
}

/**
 * 待办事项reduce
 * @param {*} state 
 * @param {*} action 
 */
const todoReduce = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: 
            return addTodo (state, action)
        case DELETE_TODO:
            return deleteTodo(state, action.todoId)
        case UPDATE_TODO:
            return updateTodo(state, action)
        default: 
            return state
    }
}

/**
 * 过滤待办事项
 * @param {*} state 
 * @param {*} action 
 */
const setFilterStatus = (state = -1, action) => {
    switch (action.type) {
        case SET_FILTER_STATUS:
            return isNaN(action.status) ? state : action.status
        default:
            return state
    }
}

/**
 * 设置数据为已经加载完成
 */
const setDataIsReady = (state = false, action) => {
    switch (action.type) {
        case SET_DATA_READY:
            return true
        default:
            return state
    }
}

/**
 * 整体reducer
 */
export const reduces = combineReducers({
    todos: todoReduce,
    editIndex: setEditIndexReduce,
    filterStatus: setFilterStatus,
    dataIsReady: setDataIsReady
})