import React, { Component } from 'react';
import "./Overlay.css";

export default class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth,show:false };
      }
    
     handleResize = (e) => {
      this.setState({ windowWidth: window.innerWidth });
      if(window.innerWidth<=450){
          this.setState({show:true})
      }
     };
    
     componentDidMount() {
      window.addEventListener("resize", this.handleResize);
     }
    
     componentWillUnmount() {
      window.addEventListener("resize", this.handleResize);
     } 
    render() {
        let modalClass = this.state.show ? "modalO display-blockO" : "modalO display-noneO";
        return (
            <div className={modalClass}>
                <div className="modal-mainO">
                    <p>I'd really appreciate if you view this on your laptop!</p>
                    <button onClick={()=>this.setState({show:!this.state.show})}>Continue Anyway</button>
                </div>
            </div>
        )
    }
}

