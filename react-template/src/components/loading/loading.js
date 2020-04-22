import React from 'react'
import { connect } from 'react-redux'

import style from './loading.less'

const Loading = (props) => {
    if (props.loading) return (
        <div className={style.container}>
            <div className={style.tip}>Loading</div>
        </div>
    )
    return props.children
}

const mapStateToProps = (state) => {
    return {
        loading: !state.dataIsReady
    }
}

export default connect(mapStateToProps)(Loading)