import React, { useState } from 'react';
import styles from './Feedback.module.css';
import Slider from '@material-ui/core/Slider';
import FeedbackIcon from '@material-ui/icons/Feedback';
import axios from 'axios';

export default function Feedback(props) {
    const [val, setVal] = useState([0]); 
    const [label,setLabel] = useState("Very Bad ;-;");
    const [width,setWidth] = useState("0vw");
    const [display,setDisplay] = useState("None");
    const [show,setShow] = useState(false);
    const [value,setValue]=useState("");
    let showFeedback = () =>{
        setShow(!show);
        if(show){
            setWidth("0vw");
            setDisplay("None");
        } else {
            setWidth("20vw");
            setDisplay("flex");
        }
    }
    const handleForm = (e) => {
        // console.log(label);
        axios.post(
          "https://formcarry.com/s/G2xEx2rJ7i", 
            label,
          {headers: {"Accept": "application/json"}}
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    
        e.preventDefault();
      }
    const updateRange = (e, data) => { 
      let temp= data[0] === 1 ? setLabel("Very Bad ;-;") : 
                          data[0] === 2 ? setLabel("Nothing Special :( ") :
                          data[0] === 3  ? setLabel("Okayish -_-") :
                          data[0] === 4  ? setLabel("It's good ;)") : setLabel("Amazing!");
      setVal(data); 
    };
    let handleFields = e => setValue(e.target.value); 
    return (
        <div className={styles.feedback} style={{width}}>
            <form onSubmit={handleForm} method="POST" className={styles.fbContainer}>
                <div className={styles.fbContainer}>
                <div className={styles.fb} style={{display}}>
                    <h4>Rate this portfolio </h4>
                    <input required type="text" id="name" name="name" onChange={handleFields} value={label} required/>
                    <Slider value={val} onChange={updateRange} marks min={1} max={5} className={styles.slider}/>
                </div>
                <div className={styles.buttonContainer} onClick = {()=>showFeedback()}>
                    {show ? null :
                    <FeedbackIcon/> }
                </div>
                <div className={styles.submitContainer} style={{display}}>
                <button className={styles.submit} type="submit" onClick={()=>showFeedback()}>Submit</button>
                </div>
            </div>
            </form>
    </div>
    )
}


