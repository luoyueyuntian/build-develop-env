import React from 'react'
import { Link } from "react-router-dom";

import { TODO_STATUS_NAME } from '../../../../common/constant/index'
import style from './todo-item.less'

const TodoItem = (props) => {
    const target = {
        pathname: '/edit',
        index: props.index
    }
    return (
        <Link to={target} className={style['todo-item-container']}>
            <div className={style.seq}>{props.index}</div>
            <div className={style.content}>{props.name}</div>
            <div className={style.badget}>{TODO_STATUS_NAME[props.state || 0]}</div>
        </Link>
    )
}

export default TodoItem