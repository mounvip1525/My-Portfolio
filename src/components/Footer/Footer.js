import React, { useState } from 'react';
import styles from './Footer.module.css';
import Feedback from '../Feedback/Feedback';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Slider from '@material-ui/core/Slider';

export default class Footer extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
        this.showModal1=this.showModal1.bind(this);
      }
      showModal1 = () => { console.log("hi");this.setState({ showModal : true })};
      hideModal = () => { console.log("bye");this.setState({ showModal : false}) }
      render(){
    return (
        <div>
            {/* <Feedback show={this.state.showModal} onHide={this.hideModal}/>
            <div className={styles.fb}>
                <h4>How would you rate this portfolio ? </h4>
                <p>Very Nice</p>
                <Slider defaultValue={0} step={1} marks min={0} max={5} />
            </div>
            <div className={styles.fbIcon}>
                <button onClick={()=>this.showModal1()}><FeedbackIcon ></FeedbackIcon></button>
            </div> */}
            <div className={styles.container}>
                <p>&lt; div languageUsed=&#123; <span>ReactJS</span> &#125; </p>
                <p>deployedOn=&#123; <span>Heroku</span> &#125; </p>
                <p>formSubmissionTo=&#123; <span>Formcarry</span> &#125;</p>
                <p>carouselLibrary=&#123; <span>react-pure-carousel</span> &#125;</p>
                <p>madeWith=&#123; <span>Love</span> &#125; /&gt; </p>
        </div>
        </div>
    )
}
}
