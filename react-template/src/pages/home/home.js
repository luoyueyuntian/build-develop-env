import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


import TodoItem from './components/todo-item/todo-item'
import style from './home.less'

class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const list = this.props.todoList.map((item, index) => <TodoItem key={index} index={index} {...item}/>)
        const filter = ['未开始', '进行中', '搁置中', '已完成'].map((item, index) => (
            <li data-id={index} data-type="eidt" key={index} className={style.status}>{item}</li>
        ))
        return (
            <div className={style.container}>
                <h3 className={style.title}>所有事项：</h3>
                <ul className={style['status-list']}>{filter}</ul>
                {list}
                <Link to="/add" className={style['btn-add']}>新增</Link>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        todoList: state.todos
    }
}

export default connect(mapStateToProp)(Home)