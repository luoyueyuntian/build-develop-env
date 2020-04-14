import React from 'react'
import PropTypes from 'prop-types';
import style from './todo-edit-component.less'

/**
 * 时间编辑器组件
 * @param {*} props 
 */
const TimeEditComponent = (props) => {
    const timeOptions = ['小时','天','周','月','年'].map(item => <option key={item}>{item}</option>)
    return (
        <div className={style['todo-item']}>
            <p className={style.title}>预计完成所需时间：</p>
            <div className={style['time-select-container']}>
                <div className={[`${style.btn}`, `${style['btn-minus-time']}`].join(' ')} onClick={() => props.updateTimeCount(props.count - 1)}>-</div>
                <div className={style.count}>{props.count}</div>
                <select className={style['time-select']} defaultValue={props.unit} onChange={ e => props.updateUnit(e.target.value)}>
                    {timeOptions}
                </select> 
                <div className={[`${style.btn}`, `${style['btn-add-time']}`].join(' ')} onClick={() => props.updateTimeCount(props.count + 1)}>+</div>
            </div>
        </div>
    )
}
TimeEditComponent.propTypes = {
    unit: PropTypes.string,
    count: PropTypes.number,
    updateTimeCount: PropTypes.func,
    updateUnit: PropTypes.func
}

/**
 * 代表事件名称编辑组件
 * @param {*} props 
 */
const TodoNameComponent = props => {
    return (
        <div className={style['todo-item']}>
            <p className={style.title}>事件名称：</p>
            <input type="text" className={style['name-input']} defaultValue={props.todoName} onInput={e => props.inputTodeName(e.target.value)}/>
        </div>
    )
}

TodoNameComponent.propTypes = {
    todoName: PropTypes.string,
    inputTodeName: PropTypes.func
}

const TodeDetailComonent = props => {
    return (
        <div className={style['todo-item']}>
            <p className={style.title}>详细描述：</p>
            <textarea defaultValue={props.detail} onInput={e => props.inputTodeDetail(e.target.value)}></textarea>
        </div>
    )
}

TodeDetailComonent.propTypes = {
    detail: PropTypes.string,
    inputTodeDetail: PropTypes.func
}

/**
 * 代码事件编辑组件
 * @param {*} props 
 */
const TodoEditComponent = (props) => {
    return (
        <div>
            <TodoNameComponent todoName={props.todoName} inputTodeName={props.inputTodeName}/>
            <TodeDetailComonent detail={props.detail} inputTodeDetail={props.inputTodeDetail}/>
            <TimeEditComponent unit={props.unit}  count={props.count} updateTimeCount = {props.updateTimeCount} updateUnit ={props.updateUnit} />
        </div>
    )
}
TodoEditComponent.propTypes = {
    todoName: PropTypes.string,
    detail: PropTypes.string,
    unit: PropTypes.string,
    count: PropTypes.number,
    inputTodeName: PropTypes.func,
    inputTodeDetail: PropTypes.func,
    updateTimeCount: PropTypes.func,
    updateUnit: PropTypes.func
}


export default TodoEditComponent