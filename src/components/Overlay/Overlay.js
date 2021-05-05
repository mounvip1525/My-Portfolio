import React, { Component } from 'react';
import "./Overlay.css";

export default class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth,show:false,count:1 };
      }
    
     handleResize = (e) => {
      this.setState({ windowWidth: window.innerWidth });
      if(window.innerWidth<=500 && this.state.count<2){
          this.setState({show:true,count:this.state.count+1});
      } else {
          this.setState({show:false})
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

