import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { setFilterStauts } from '../../store/actions'

import TodoItem from './components/todo-item/todo-item'
import style from './home.less'

const Home = (props) => {
    const list = props.todoList.map((item, index) => <TodoItem key={index} index={index} {...item}/>)
    const filter = ['所有', '未开始', '进行中', '搁置中', '已取消', '已完成'].map((item, index) => {
        let calssName = [style.status]
        if (props.filterStatus < 0 && index === 0) {
            calssName.push(style['status-active'])
        } else if (props.filterStatus === index - 1) {
            calssName.push(style['status-active'])
        }
        return (
            <li data-id={index} data-type="eidt" key={index} className={calssName.join(' ')} onClick={() => props.setFilterStauts(index - 1)}>{item}</li>
        )
    })
    return (
        <div className={style.container}>
            <h3 className={style.title}>所有事项：</h3>
            <ul className={style['status-list']}>{filter}</ul>
            {list}
            <Link to="/add" className={style['btn-add']}>新增</Link>
        </div>
    )
}

const mapStateToProp = (state) => {
    let newTodes = state.todos
    if (state.filterStatus >= 0) newTodes = newTodes.filter(todos => todos.status === state.filterStatus)
    return {
        todoList: newTodes,
        filterStatus: state.filterStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterStauts: status => dispatch(setFilterStauts(status))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Home)