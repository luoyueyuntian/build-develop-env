import React from 'react'
import { Link } from "react-router-dom";
import './todo-item.less'

const TodoItem = (porps) => {
    return (
        <Link to="/edit" className="todo-item-container">
            <div className="seq">{porps.index}</div>
            <div className="content">{porps.name}</div>
            <div className="badget">{porps.state}</div>
        </Link>
    )
}

export default TodoItem