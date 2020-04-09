import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './action-types'
import { TODO_STATUS} from '../common/constant/index'
import { generateTodoId } from '../common/utils/index'

const addTodoReduce = (state, newTodo) => {
    return state.concat({
        id: generateTodoId(),
        name: newTodo.name,
        status: TODO_STATUS.WAIT_TO_DO,
        excepetTime: newTodo.excepetTime
    })
}

const deleteTodoReduce = (state, todoId) => {
    return state.filter(item => item.id !== todoId)
}

const updateTodoReduce = (state, { todoId, name, status, excepetTime }) => {
    return state.map(item => {
        if (item.id !== todoId) return item
        if (name) item.name = name
        if (status) item.status = status
        if (excepetTime) item.excepetTime = excepetTime
        return item
    })
}

export const reduce = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: 
            return addTodoReduce (state, action.newTodo)
        case DELETE_TODO:
            return deleteTodoReduce(state, action.todoId)
        case UPDATE_TODO:
            return updateTodoReduce(state, action)
        default: 
            return state
    }
}