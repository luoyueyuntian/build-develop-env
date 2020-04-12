import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TodoEditComponent from '../../components/todo-edit-component/todo-edit-component'

// inputTodeName={this.inputTodeName} updateTimeCount = {this.updateTimeCount} updateUnit ={this.updateUnit}
const Edit = (props) => {
    const editIndex = props.match.params.index
    const todoProp = props.todoList[editIndex]

    return (
        <div>
            <h2>编辑待办事件</h2>
            <TodoEditComponent
                    todoName={todoProp.name} unit={todoProp.unit} count={todoProp.count} />
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        todoList: state.todos
    }
}

export default withRouter(connect(mapStateToProp)(Edit))
