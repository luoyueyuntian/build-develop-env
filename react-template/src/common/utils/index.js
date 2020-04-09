// 初始的todo id
const todoId = -1

/**
 * 生成一个新的todo id
 */
export const generateTodoId = () => {
    todoId++
    return todoId
}