import React from 'react';
import pic from '../../assests/profile.png';
import styles from './UserCard.module.css';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function UserCard() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <img src={pic} alt="Mounvi"/>
                <p><b className={styles.name}>Mounvi Podapati</b></p>
                <p>Frontend Developer</p>
                <div><LocationOnIcon />Banaglore, India</div>
            </div>
            <div className={styles.details}>
                <button><a href="https://www.linkedin.com/in/mounvi-podapati-900a841a0">Connect</a></button>
            </div>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/mounvi.podapati/"><FacebookIcon /></a>
                <a href="https://www.instagram.com/im_mounvi15/"><InstagramIcon /></a>
                <a href="https://github.com/mounvip1525/"><GitHubIcon /></a>
                <a href="https://twitter.com/PodapatiMounvi"><TwitterIcon /></a>
            </div>
        </div>
    )
}
