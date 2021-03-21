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
    const [displayButton,setDisplayButton] = useState("None");
    let showFeedback = () =>{
        setShow(!show);
        if(show){
            setWidth("0vw");
            setDisplay("None");
            setDisplayButton("None");
        } else {
            setWidth("20vw");
            setDisplay("flex");
            setDisplayButton("flex");
        }
    }
    const updateRange = (e, data) => { 
      data[0] === 1 ? setLabel("Very Bad ;-;") : 
                  data[0] === 2 ? setLabel("Nothing Special :( ") :
                  data[0] === 3  ? setLabel("Okayish -_-") :
                  data[0] === 4  ? setLabel("It's good ;)") : setLabel("Amazing!");
      setVal(data); 
    };
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://formspree.io/f/mjvpnqpp",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
          setDisplayButton("flex");
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    let valueLabel = () => {
      
    }
    return (
        <div className={styles.feedback} style={{width}}>
            <form onSubmit={handleOnSubmit} method="POST" className={styles.fbContainer}>
                <div className={styles.fbContainer}>
                <div className={styles.fb} style={{display}}>
                    <label htmlFor="feedback"><h4>Rate this portfolio </h4></label>
                    <input type="text" id="feedback" name="feedback" value={label} required onChange={valueLabel} />
                    <Slider value={val} onChange={updateRange} marks min={1} max={5} className={styles.slider}/>
                </div>
                <div className={styles.buttonContainer} onClick = {()=>showFeedback()}>
                    {show ? null :
                    <FeedbackIcon/> }
                </div>
                <div className={styles.submitContainer} style={{display}}>
                  {serverState.status ?  
                      <div className={styles.thanks}>
                          <p className={!serverState.status.ok ? "errorMsg" : ""}>
                          {serverState.status.msg}
                        </p> <FeedbackIcon onClick={()=>showFeedback()}/>
                      </div>
                        : <button className={styles.submit} type="submit" onClick={()=>showFeedback()}>Submit</button>
                  }
                </div>
            </div>
            </form>
    </div>
    )
}


