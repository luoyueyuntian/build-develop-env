import React from 'react'
import { Link } from "react-router-dom";
// import style from './not-found.less'

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <p>资源不存在！</p>
            <Link to="/home">返回首页</Link>
        </div>
    )
}

export default NotFound