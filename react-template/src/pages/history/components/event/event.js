import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'

console.log(moment(Date.now()))
console.log( moment(Date.now()).format('YYYY-MM-DD hh:mm:ss'))


import style from './event.less'

const Event = (props) => {
    return (
        <li className={style.container}>
            <div className={style.time}>{moment(props.time).format('YYYY-MM-DD hh:mm:ss')}</div>
            <div className={style.line} index={props.index}/>
            <div className={style.content}>
                <p className={style.title}>{props.eventName}</p>
                <p className={style.content}>{props.detail}</p>
            </div>
        </li>
    )
}

Event.propTypes = {
    time: PropTypes.number,
    index: PropTypes.number,
    eventName: PropTypes.string,
    detail: PropTypes.string
}

export default Event