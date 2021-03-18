import React, { Component } from 'react';
import styles from './Landing.module.css';
import pic from '../../assests/womencoding.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Resume from '../../Resume.pdf';

export default class Landing extends Component {
    render() {
        return (
            <div className={styles.container}>
               <div className={styles.nameContainer}>
                   <p>Howdy there! I'm</p>
                   <h1>MOUNVI PODAPATI</h1>
                   <p>and I do Front-end development mostly</p>
                   <div className={styles.buttonContainer}>
                        <button><a href={Resume} download>Resume</a></button>
                        <button>< a href="#contact">Contact Me</a></button>
                   </div>
                   <div className={styles.icons}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                        <GitHubIcon />
                        <TwitterIcon />
                   </div>
                </div>
                <div>
                    <p className={styles.gmail}>mounvip1525@gmail.com</p>
                    <img src={pic}></img>
                </div>
            </div>
        )
    }
}
