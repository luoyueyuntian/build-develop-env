import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addTodo } from '../../store/actions'

import TodoEditComponent from '../../components/todo-edit-component/todo-edit-component'
import style from './add.less'

class Add extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todoName: '',
            unit: '小时',
            count: 1,
            timeEdit: { ...props.timeEdit }
        }
        this.inputTodeName = this.inputTodeName.bind(this)
        this.updateTimeCount = this.updateTimeCount.bind(this)
        this.updateUnit = this.updateUnit.bind(this)
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }
    inputTodeName (newName) {
        this.setState({
            todoName: newName
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
    back () {
        const { history } = this.props
        history.goBack()
    }
    save () {
        const { todoName, unit, count } = this.state
        this.props.updateTimeEdit({
            name: todoName,
            unit,
            count
        })
        this.back()
    }
    render () {
        
        return (
            <div className={style['add-container']}>
                <h3>Add</h3>
                <TodoEditComponent
                    todoName={this.state.todoName} unit={this.state.unit} count={this.state.count} 
                    inputTodeName={this.inputTodeName} updateTimeCount = {this.updateTimeCount} updateUnit ={this.updateUnit}/>
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
        timeEdit: state.timeEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTimeEdit: (prop) => dispatch(addTodo(prop))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add))