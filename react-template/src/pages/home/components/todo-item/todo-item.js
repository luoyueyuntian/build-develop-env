import React from 'react'

import './todo-item.less'

const TodoItem = (porps) => {
    return (
        <div className="todo-item-container">
            <div className="seq">{porps.index}</div>
            <div className="content">{porps.name}</div>
            <div className="badget">{porps.state}</div>
        </div>
    )
}

export default TodoItem