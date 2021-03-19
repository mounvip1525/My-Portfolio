import React from 'react';
import Slider from '@material-ui/core/Slider';
import CloseIcon from '@material-ui/icons/Close';
import './Feedback.css';

export default function Feedback(props) {
    const modalClass = props.show ? "modal3 display-block3" : "modal3 display-none3";
    return (
        <div className={modalClass}>
        <div className="modal-main3">
            <div className="feedbackModal">
                <div><CloseIcon onClick={props.onHide}/></div>
                <h5>How would you rate this portfolio ? </h5>
                <p>Very appreciable if you can select one</p>
                <Slider defaultValue={0} step={1} marks min={0} max={5} />
            </div>
        </div>
    </div>
    )
}


