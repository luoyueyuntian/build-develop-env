import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { TODO_STATUS, TODO_STATUS_NAME, TODO_STATUS_NAME_MAP } from '../../common/constant/index'
import { addTodo, updateTodo } from '../../store/actions'

import TodoEditComponent from '../../components/todo-edit-component/todo-edit-component'
import style from './edit-todo.less'

const pageTitleMap = {
    '/add': '新增待办事项',
    '/edit': '编辑待办事项'
}
class EditTodoComponent extends React.Component {
    constructor (props) {
        super(props)
        const { index = 0, pathname = '/add' } = props.location
        const curTodos = pathname === '/edit' && index < props.todos.length ? props.todos[index] : {
            name: '',
            desc: '',
            unit: '小时',
            count: 1,
            status: 0
        }
        this.state = {
            pageTitle: pageTitleMap[pathname],
            todoName: curTodos.name,
            desc: curTodos.desc,
            unit: curTodos.unit,
            count: curTodos.count,
            status: curTodos.status
        }
        this.inputTodeName = this.inputTodeName.bind(this)
        this.inputTodeDetail = this.inputTodeDetail.bind(this)
        this.updateTimeCount = this.updateTimeCount.bind(this)
        this.updateUnit = this.updateUnit.bind(this)
        this.updateTodoStatus = this.updateTodoStatus.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }
    inputTodeName (newName) {
        this.setState({
            todoName: newName
        })
    }
    inputTodeDetail (newDesc) {
        this.setState({
            desc: newDesc
        })
    }
    updateTimeCount (newCount) {
        this.setState({
            count: newCount
        })
    }
    updateUnit (newUnit) {
        this.setState({
            unit: newUnit
        })
    }
    updateTodoStatus (status) {
        if (this.state.status === TODO_STATUS.DONE) return
        this.setState({
            status
        })
    }
    back () {
        const { history } = this.props
        history.goBack()
    }
    save () {
        const { todoName, desc, unit, count, status } = this.state
        if (this.state.pageTitle === pageTitleMap['/add']) {
            this.props.addTodo({
                name: todoName,
                desc,
                unit,
                count,
                status
            })
        } else if (this.state.pageTitle === pageTitleMap['/edit']) {
            if (this.props.location.index < this.props.todos.length) {
                this.props.updateTodo({
                    id: this.props.todos[this.props.location.index].id,
                    name: todoName,
                    desc,
                    unit,
                    count,
                    status
                })
            } else {
                this.props.addTodo({
                    name: todoName,
                    desc,
                    unit,
                    count,
                    status
                }) 
            }
            
        }
        this.back()
    }
    render () {
        const statusList = TODO_STATUS_NAME.map((status, index) =>
            <li className={[style['status-item'], status === TODO_STATUS_NAME_MAP[this.state.status] ? style['status-active'] : '', index < TODO_STATUS_NAME.length - 1 && this.state.status === TODO_STATUS.DONE ? style.disabled : ''].join(' ')} key={index} 
            onClick={() => this.updateTodoStatus(index)}>{status}</li>
        )
        return (
            <div className={style['add-container']}>
                <h3>{this.state.pageTitle}</h3>
                <TodoEditComponent
                    todoName={this.state.todoName} detail={this.state.desc} unit={this.state.unit} count={this.state.count} 
                    inputTodeName={this.inputTodeName} inputTodeDetail={this.inputTodeDetail} updateTimeCount = {this.updateTimeCount} updateUnit ={this.updateUnit}/>
                <ul className={style['status-list']}>{statusList}</ul>
                <div className={style.bottom}>
                    <button className={style['btn-cancel']} onClick={this.back}>取消</button>
                    <button className={style['btn-save']} onClick={this.save}>保存</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: (prop) => dispatch(updateTodo(prop)),
        addTodo: (prop) => dispatch(addTodo(prop))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTodoComponent))