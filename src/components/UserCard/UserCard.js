import React from 'react';
import pic from '../../assests/profile.png';
import styles from './UserCard.module.css';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';

export default function UserCard() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src={pic} alt="Mounvi"/>
                <p><b className={styles.name}>Mounvi Podapati</b></p>
                <p>Frontend Developer</p>
            </div>
            <div className={styles.icons}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
            </div>
            <div className={styles.details}>
                <div><CallIcon />+91 9686662439</div>
                <div><LocationOnIcon />Banaglore, India</div>
                <div><EmailIcon />mounvip1525@gmail.com</div>
            </div>
        </div>
    )
}
