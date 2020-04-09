import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TimeEditComponent from '../../components/time-edit-component/time-edit-component'
import './add.less'

class Add extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
        this.back = this.back.bind(this)
        this.save = this.save.bind(this)
    }
    back () {
        const { history } = this.props
        history.goBack()
    }
    save () {
        this.back()
    }
    render () {
        
        return (
            <div className="add-container">
                <h3>Add</h3>
                <div className="todo-item">
                    <p className="title">事件名称：</p>
                    <textarea></textarea>
                </div>
                <TimeEditComponent/>
                <div className="bottom">
                    <button className="btn-cancel" onClick={this.back}>取消</button>
                    <button className="btn-save" onClick={this.save}>保存</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history
    }
}
export default withRouter(connect(mapStateToProps)(Add))