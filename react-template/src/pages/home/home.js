import React from 'react'
import { Link } from "react-router-dom";
import TodoItem from './components/todo-item/todo-item'
import './home.less'

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoList: [{
                name: '完成运动',
                state: '未开始'
            }, {
                name: '记单词',
                state: '进行中'
            }]
        }
    }

    render () {
        const list = this.state.todoList.map((item, index) => <TodoItem key={index} index={index} {...item}/>)
        const filter = ['未开始', '进行中', '搁置中', '已完成'].map((item, index) => (
            <li data-id={index} className="status">{item}</li>
        ))
        return (
            <div className="container">
                <h3 className="title">所有事项：</h3>
                <ul className="status-list">{filter}</ul>
                {list}
                <Link to="/add" className="btn-add">新增</Link>
            </div>
        )
    }
}

export default Home