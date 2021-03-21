import React, { Component } from 'react';
import styles from './Landing.module.css';
import pic from '../../assests/womencoding.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GetAppIcon from '@material-ui/icons/GetApp';

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
                        <button><a href={Resume} download><GetAppIcon />Resume</a></button>
                        <button>< a href="#contact"><PermContactCalendarIcon />Contact Me</a></button>
                   </div>
                   <div className={styles.icons}>
                        <a href="https://www.facebook.com/mounvi.podapati/"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/im_mounvi15/"><InstagramIcon /></a>
                        <a href="https://www.linkedin.com/in/mounvi-podapati-900a841a0"><LinkedInIcon /></a>
                        <a href="https://github.com/mounvip1525/"><GitHubIcon /></a>
                        <a href="https://twitter.com/PodapatiMounvi"><TwitterIcon /></a>
                   </div>
                </div>
                <div>
                    <p className={styles.gmail}>mounvip1525@gmail.com</p>
                    <img src={pic} alt="img"></img>
                </div>
            </div>
        )
    }
}
