import React from 'react'
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import { withRouter } from 'react-router'

import style from './history.less'

import EventCreateHistory from './event-create-history/event-create-history'
import EventDoneHistory from './event-done-history/event-done-history'

const History = (props) => {
    const NeedRedirect = props.location.pathname === '/history' ? <Redirect to="/history/create" /> : null
    return (
        <div className={style.container}>
            {NeedRedirect}
            <ul className={style['nav-container']}>
                <li><NavLink to="/history/create" activeClassName={style.active}>事件创建历史</NavLink></li>
                <li><NavLink to="/history/done" activeClassName={style.active}>事件完成历史</NavLink></li>
            </ul>
            <Link className={style['btn-home']} to="/home">回到首页</Link>
            <Switch>
                <Route path="/history/create">
                    <EventCreateHistory />
                </Route>
                <Route path="/history/done">
                    <EventDoneHistory />
                </Route>
            </Switch>
        </div>
    )
}

export default withRouter(History)