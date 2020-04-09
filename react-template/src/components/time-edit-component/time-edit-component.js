import PropTypes from 'prop-types';
import './time-edit-component.less'

const TimeEditComponent = (props) => {
    const timeOptions = ['小时','天','周','月','年'].map(item => <option key={item}>{item}</option>)
    return (
        <div className="todo-item">
            <p className="title">预计完成所需时间：</p>
            <div className="time-select-container">
                <div className="btn btn-minus-time" onClick={props.decreaseTime}>-</div>
                <select className="time-select" defaultValue={props.unit} onChange={props.updateUnit}>
                    {timeOptions}
                </select>
                <div className="btn btn-add-time" onClick={props.increaseTime}>+</div>
            </div>
        </div>
    )
}

TimeEditComponent.propTypes = {
    decreaseTime: PropTypes.func,
    unit: PropTypes.string,
    updateUnit: PropTypes.func,
    increaseTime: PropTypes.func
}

export default TimeEditComponent