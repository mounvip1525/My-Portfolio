import React from "react";
import "./AlertModal.css";
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function AlertModal(props){
    const modalClass = props.show ? "modal2 display-block2" : "modal2 display-none2";
    return (
      <div className={modalClass}>
        <div className="modal-main2">
            <div className="alertModal">
                <div className="close"><CloseIcon onClick={props.onHide}/></div>
                <div className="alertData">
                    <div className="thumbsup"><ThumbUpIcon /></div>
                    <div className="data">
                        <h3>Success!!</h3>
                        <p>I'll get back to you very soon :&#41;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
