import React from 'react'
import { connect } from 'react-redux'

import style from './event-create-history.less'

import Event from '../components/event/event'

const EventCreateHistory = (props) => {
    const list = props.events.map((item, index) => <Event key={item.id} index={index} {...item}/>)
    return (
        <ul className={style['list-container']}>{list} </ul>
    )
}

const mapStateToProps = state => {
    const todos = state.todos
    todos.sort((pre, next) => pre.createTime - next.createTime)
    return {
        events: todos.map(item => ({
            id: item.id,
            time: item.createTime,
            eventName: item.name,
            detail: item.desc
        }))
    }
}

export default connect(mapStateToProps)(EventCreateHistory)