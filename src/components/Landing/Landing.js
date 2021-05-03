import React, { Component } from 'react';
import styles from './Landing.module.css';
import UserCard from '../UserCard/UserCard';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GetAppIcon from '@material-ui/icons/GetApp';

import Resume from '../../Resume.pdf';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme = () => {
      console.log("im clicked");
      const theme = this.state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.add("color-theme-in-transition");
      this.setState({ theme });
      document.documentElement.setAttribute("data-theme", theme);
      window.setTimeout(() => {
        document.documentElement.classList.remove("color-theme-in-transition");
      }, 1000);
    }
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
                    <div className="switchC rotate box">
                    </div>
                    <button className="switch" onClick={e => this.toggleTheme()}>
                            {this.state.theme==='light' ? <i class="fa fa-moon"></i> : <i class="fas fa-sun"></i>}
                        </button>
                    <p className={styles.gmail}>mounvip1525@gmail.com</p>
                    <div className={styles.userCard}>
                    <UserCard />
                    </div>
                </div>
            </div>
        )
    }
}
