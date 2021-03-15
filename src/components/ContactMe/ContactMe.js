import React, { Component } from 'react';
import styles from './ContactMe.module.css';
import Title from '../Title/Title';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';
export default class ContactMe extends Component {
    render() {
        return (
            <React.Fragment>
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
                            <FacebookIcon />
                            <InstagramIcon />
                            <LinkedInIcon />
                            <GitHubIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightContainer}>
                            <div>
                                <div>
                                    <label for='fname'>Your Name</label>
                                    <input type="text" name='name' placeholder='John Doe' />
                                </div>
                                <div>
                                    <label for='email'>Email Address</label>
                                    <input type="email" name='email' placeholder='example@gmail.com' />
                                </div>
                                <div>
                                    <label for='phone'>Phone Number</label>
                                    <input type="phone" name='phone' placeholder='+91 XXXXXXXXXX' />
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label for='message'><p>Message</p></label>
                                <textarea type="text" name='message' placeholder='Your message' />
                            </div>
                        </div>
                        <p>It'd be great if you can tell why you are reaching out to me!</p>
                            <div className={styles.query}>
                                <div>
                                    <label for='c1'><input type="radio" name='c' id='c1'/>Feedback</label>
                                </div>
                                <div>
                                    <label for='c2'> <input type="radio" name='c' id='c2'/>Queries</label>
                                </div><div>
                                    <label for='c3'><input type="radio" name='c' id='c3'/>Hiring Purposes</label>
                                </div><div>
                                    <label for='c4'><input type="radio" name='c' id='c3'/>Others</label>
                                </div>
                            </div>
                        <button className={styles.send}>Send<SendIcon /></button>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
