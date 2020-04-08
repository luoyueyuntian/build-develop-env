import React from 'react'
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
        return (
            <div className="container">
                <h3 className="title">所有事项：</h3>
                {list}
                <div className="btn-add">新增</div>
            </div>
        )
    }
}

export default Home