import React from "react";
import "./Modal.css";
import pic from '../../assests/ecommerce.png';
import html from '../../assests/html.svg';
import javascript from '../../assests/js.svg';
import react from '../../assests/react.svg';
import nodejs from '../../assests/node-js.svg';
import CloseIcon from '@material-ui/icons/Close';

const Modal = (props) => {
  const modalClass = props.show ? "modal display-block" : "modal display-none";
  const showOptionsClass=props.selected==='management' ? "hide-options" : "display-options";
  return (
    <div className={modalClass}>
      <div className="modal-main">
          <div className="modalContainer">
            <div className="modalClose"><CloseIcon onClick={()=>props.onHide()}/></div>
            <div className="modalImage">
                <img src={props.img} alt="pic" />
            </div>
            <div className="modalDetails">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <h4>Languages used</h4>
                <div className="modalTechStack">
                    <img src={html} alt="HTML" />
                    <img src={javascript} alt="Javascript" />
                    <img src={react} alt="React" />
                </div>
                <div className="modalButtonContainer">
                    <button><a href={props.link}>Live Demo</a></button>
                    <button><a href={props.code}>Source Code</a></button>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Modal;
