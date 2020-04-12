// 初始的todo id
let todoId = -1

/**
 * 生成一个新的todo id
 */
export const generateTodoId = () => {
    todoId++
    return todoId
}