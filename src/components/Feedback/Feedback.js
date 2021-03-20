import React, { useState } from 'react';
import styles from './Feedback.module.css';
import Slider from '@material-ui/core/Slider';
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function Feedback(props) {
    const [val, setVal] = useState([0]); 
    const [label,setLabel] = useState("Bad");
    const [width,setWidth] = useState("0vw");
    const [display,setDisplay] = useState("None");
    let showFeedback = () =>{
        setWidth("20vw");
        setDisplay("flex");
        console.log(width,display)
    }
    const updateRange = (e, data) => { 
      console.log(data[0]);
      let temp= data[0] === 1 ? setLabel("Very Bad") : 
                          data[0] === 2 ? setLabel("Nothing Special") :
                          data[0] === 3  ? setLabel("Okayish") :
                          data[0] === 4  ? setLabel("It's good") : setLabel("Amazing!");
      setVal(data); 
    }; 
    return (
        <div className={styles.feedback} style={{width}}>
        <div className={styles.fbContainer}>
            <div className={styles.fb} style={{display}}>
                <h4>Rate this portfolio </h4>
                <p>{label}</p>
                <Slider value={val} onChange={updateRange} marks min={1} max={5} className={styles.slider}/>
            </div>
            <button><FeedbackIcon onClick = {()=>showFeedback()}/></button>
        </div>
    </div>
    )
}


