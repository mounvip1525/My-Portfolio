import React from 'react';
import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <div className={styles.container}>
           <div className={styles.row}>
               <div className={styles.column}>
                   <div>I'm basically a front end developer </div>
                   <div>
                       <p>College Clubs/Chapters that I'm a part of:</p>
                        <p>Mozilla Firefox</p>
                        <p>Apple Developers Group</p>
                    </div>
                   <div>I've worked on around <div className={styles.circle}><h2>35+</h2></div>
                       <p>Front end + Python based projects</p></div>
               </div>
               <div className={styles.column}>
                   <div>
                        <p>import Student from 'VIT-Vellore'&#59;</p>
                        <p>class Bio extends Student &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;name &#61; 'Mounvi Podapati'&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;age &#61;  18 &#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;title &#61; '2nd year CSE Undergrad'&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;pronouns &#61; 'moUnvi'&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;skills &#61; &#123;</p>    
                        <p>&nbsp;&nbsp;&nbsp;languages&#61; &#91; 'JavaScript', 'Python' , 'Java'&#93;  &#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;databases&#61; &#91; 'MySQL'&#93; &#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;frameworks&#61; &#91; 'Django', 'Flask'&#93; &#59;</p>
                        &#125;
                    </div>
               </div>
               <div className={styles.column}>
                   <div>My strengths: 
                       <p>Resiliency</p>
                       <p>Able to grasp things easily</p>
                       <p>Determination</p>
                    </div>
                    <div>My medium article: <a href="https://medium.com/mozilla-firefox-club/backend-through-the-lens-of-a-front-end-developer-68124ae6d4cb"><span>tinyurl.com/MFCVITbackendfrontend</span></a></div>
                   <div>I have recently listened to: 
                   <img src="https://spotify-now-playing-git-master-mounvip1525.vercel.app/api/spotify-playing" alt="Spotify Now Playing" width="300" />
                   </div>
                </div>
        </div>
        </div>
    )
}
