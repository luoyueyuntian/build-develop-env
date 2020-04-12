import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_EDIT_INDEX } from './action-types'
import { TODO_STATUS} from '../common/constant/index'
import { generateTodoId } from '../common/utils/index'

/**
 * 添加事件
 * @param {object} state 
 * @param {object} newTodo 
 */
const addTodo = (state, newTodo) => {
    return state.concat({
        id: generateTodoId(),
        name: newTodo.name,
        status: TODO_STATUS.WAIT_TO_DO,
        unit: newTodo.unit,
        count: newTodo.count
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
const updateTodo = (state, { todoId, name, status, excepetTime }) => {
    return state.map(item => {
        if (item.id !== todoId) return item
        if (name) item.name = name
        if (status) item.status = status
        if (excepetTime) item.excepetTime = excepetTime
        return item
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

export const reduces = combineReducers({
    todos: todoReduce,
    editIndex: setEditIndexReduce
})