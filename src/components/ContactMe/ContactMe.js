import React, { useState } from 'react';
import styles from './ContactMe.module.css';
import Title from '../Title/Title';
import axios from "axios";

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

export default class ContactMe extends React.Component  {
    constructor(props){
        super(props);
        this.state = {name: "",category: "", email: "", phone: "", message: ""};
      }
      handleForm = e => {
        axios.post(
          "https://formcarry.com/s/y3uiZmryu1", 
          this.state, 
          {headers: {"Accept": "application/json"}}
          )
          .then(function (response) {
            console.log(response.data.title);
          })
          .catch(function (error) {
            console.log(error);
          });
    
        e.preventDefault();
      }
    
      handleFields = e => this.setState({ [e.target.name]: e.target.value });
    render(){
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
                        <a href="https://www.facebook.com/mounvi.podapati/"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/im_mounvi15/"><InstagramIcon /></a>
                        <a href="https://www.linkedin.com/in/mounvi-podapati-900a841a0"><LinkedInIcon /></a>
                        <a href="https://github.com/mounvip1525/"><GitHubIcon /></a>
                        <a href="https://twitter.com/PodapatiMounvi"><TwitterIcon /></a>
                        </div>
                    </div>
                    <form onSubmit={this.handleForm} className={styles.right}>
                        <div className={styles.rightContainer}>
                            <div>
                                <div>
                                    <label for='fname'>Your Name</label>
                                    <input type="text" name='name' id="name" placeholder='John Doe' onChange={this.handleFields} required/>
                                </div>
                                <div>
                                    <label for='email'>Email Address</label>
                                    <input type="email" name='email'id="email" placeholder='example@gmail.com' onChange={this.handleFields} required/>
                                </div>
                                <div>
                                    <label for='phone'>Phone Number</label>
                                    <input type="phone" name='phone'id="phone" placeholder='+91 XXXXXXXXXX' onChange={this.handleFields} required/>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label for='message'><p>Message</p></label>
                                <textarea type="text" name='message' placeholder='Your message' id="message" onChange={this.handleFields} required/>
                            </div>
                        </div>
                        <p className={styles.q}>It'd be great if you can tell why you are reaching out to me!</p>
                            <div className={styles.query}>
                                <div>
                                    <label for='c1'><input type="radio" name='category' id='c1' value="Feedback" onChange={this.handleFields}/>Feedback</label>
                                </div>
                                <div>
                                    <label for='c2'> <input type="radio" name='category' id='c2' value="Queries" onChange={this.handleFields}/>Queries</label>
                                </div><div>
                                    <label for='c3'><input type="radio" name='category' id='c3' value="Hiring Purposes" onChange={this.handleFields}/>Hiring Purposes</label>
                                </div><div>
                                    <label for='c4'><input type="radio" name='category' id='c3' value="Others" onChange={this.handleFields}/>Others</label>
                                </div>
                            </div>
                        <button type="submit" className={styles.send}>Send<SendIcon /></button>
                    </form>
                </div>
                </div>
            </React.Fragment>
    )
        }
}

