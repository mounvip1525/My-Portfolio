import React from "react";
import "./Modal.css";

import html from '../../assests/html.svg';
import javascript from '../../assests/js.svg';
import css from '../../assests/css.svg';
import react from '../../assests/react.svg';
import nodejs from '../../assests/node-js.svg';
import python from '../../assests/python.svg';
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
                <div className="modalTechStack">
                  {props.techStack.includes("html") ? <img src={html} alt="HTML" /> : null }
                  {props.techStack.includes("css") ? <img src={css} alt="CSS" /> : null }
                  {props.techStack.includes("javascript") ? <img src={javascript} alt="JAVASCRIPT" /> : null }
                  {props.techStack.includes("react") ? <img src={react} alt="REACT" /> : null }
                  {props.techStack.includes("nodejs") ? <img src={nodejs} alt="NODEJS" /> : null }
                  {props.techStack.includes("django") ? <img src={python} alt="DJANGO" /> : null }
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
