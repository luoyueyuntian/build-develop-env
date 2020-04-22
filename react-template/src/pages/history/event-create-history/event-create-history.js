import React from 'react'
import { connect } from 'react-redux'

import style from './event-create-history.less'
import Loading from '../../../components/loading/loading'
import Event from '../components/event/event'

const EventCreateHistory = (props) => {
    const list = props.events.map((item, index) => <Event key={item.id} index={index} {...item}/>)
    return (
        <Loading>
            <ul className={style['list-container']}>{list}</ul>
        </Loading>
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