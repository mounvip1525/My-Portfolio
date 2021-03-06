import React, { useState } from 'react';
import styles from './ContactMe.module.css';
import Title from '../Title/Title';
import axios from "axios";
import AlertModal from '../AlertModal/AlertModal';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';

export default function ContactMe(props)  {
      const [showModal,setShowModal]=useState(false);
      let showModal1 = () => { setShowModal(true) }
      let hideModal = () => { setShowModal(false) }
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
          showModal1();
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/f/xbjqrjvo",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
        return (
            <React.Fragment>
                <AlertModal show={showModal} onHide={hideModal} />
                <div className={styles.wrapper}>
                    <Title name="Contact Me" />
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <h2>My Social Handles</h2>
                            <p>Feedback is really appreciated!</p>
                        </div>
                        <div className={styles.details}>
                            <div><CallIcon /><p>+91 9686662439</p></div>
                            <div><EmailIcon /><p>mounvip1525@gmail.com</p></div>
                            <div><LocationOnIcon /><p>F-1 Creative Royal Appts, AECS Layout</p></div>
                        </div>
                        <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/mounvi.podapati/"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/im_mounvi15/"><InstagramIcon /></a>
                        <a href="https://www.linkedin.com/in/mounvi-podapati-900a841a0"><LinkedInIcon /></a>
                        <a href="https://github.com/mounvip1525/"><GitHubIcon /></a>
                        <a href="https://twitter.com/PodapatiMounvi"><TwitterIcon /></a>
                        </div>
                    </div>
                    <form onSubmit={handleOnSubmit} className={styles.right}>
                        <div className={styles.rightContainer}>
                            <div>
                                <div>
                                    <label htmlFor='fname'>Your Name</label>
                                    <input type="text" name='name' id="name" placeholder='John Doe' required/>
                                </div>
                                <div>
                                    <label htmlFor='email'>Email Address</label>
                                    <input type="email" name='email'id="email" placeholder='example@gmail.com' required/>
                                </div>
                                <div>
                                    <label htmlFor='phone'>Phone Number</label>
                                    <input type="phone" name='phone'id="phone" placeholder='+91 XXXXXXXXXX' required/>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label htmlFor='message'><p>Message</p></label>
                                <textarea type="text" name='message' placeholder='Your message' id="message" required/>
                            </div>
                        </div>
                        <p className={styles.q}>It'd be great if you can tell why you are reaching out to me!</p>
                            <div className={styles.query}>
                                <div>
                                    <label htmlFor='c1'><input type="radio" name='category' id='c1' value="Feedback"/>Feedback</label>
                                </div>
                                <div>
                                    <label htmlFor='c2'> <input type="radio" name='category' id='c2' value="Queries"/>Queries</label>
                                </div><div>
                                    <label htmlFor='c3'><input type="radio" name='category' id='c3' value="Hiring Purposes"/>HireMe</label>
                                </div><div>
                                    <label htmlFor='c4'><input type="radio" name='category' id='c3' value="Others"/>Others</label>
                                </div>
                            </div>
                        {/* <button onClick={()=>showModal1()} className={styles.send}>Send<SendIcon /></button> */}
                        {/* <button type="submit" className={styles.send}>Send<SendIcon /></button> */}
                        {serverState.status ? 
                        <div className={styles.thanks}>
                            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </p>
                        </div>
                        : <button type="submit" className={styles.send}>Send<SendIcon /></button>
                        }
                    </form>
                </div>
                </div>
            </React.Fragment>
    )
}
