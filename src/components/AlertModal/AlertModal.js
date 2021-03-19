import React from "react";
import "./AlertModal.css";
import CloseIcon from '@material-ui/icons/Close';

export default function AlertModal(props){
    const modalClass = props.show ? "modal2 display-block2" : "modal2 display-none2";
    return (
      <div className={modalClass}>
        <div className="modal-main2">
            <div className="alertModal">
                <div><CloseIcon onClick={props.onHide}/></div>
                <h3>Succesfull submission</h3>
                <h4>Thank you for contacting me!</h4>
                <p>I'll get back to you very soon :)</p>
            </div>
        </div>
    </div>
    )
}
