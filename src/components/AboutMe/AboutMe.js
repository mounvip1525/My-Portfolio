import React from 'react';
import Title from '../Title/Title';
import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <Title name="About Me" />
           <div className={styles.row}>
               <div className={styles.column}>
                   <div>I'm basically a <b>Front End Developer</b> </div>
                   <div>Visitor's count: 
                        <img className={styles.count} src="https://visitor-badge.glitch.me/badge?page_id=myportfolio-mounvi.netlify.app" />
                    </div>
                   <div>I've worked on around <div className={styles.circle}><h2>35+</h2></div>
                       <p>Front end + Python based projects</p>
                    </div>
                    <div>
                       <p>College Clubs/Chapters that I'm a part of:</p>
                        <p><b>Mozilla Firefox</b></p>
                        <p><b>Apple Developers Group</b></p>
                    </div>
                </div>
               <div className={styles.column}>
                   <div>I'm presently doing my B.Tech <b>2nd year</b> at VIT Vellore</div>
                   <div className={styles.center}>
                        <p>class Bio extends Student &#123;</p>
                        <p>&nbsp;&nbsp;&nbsp;name &#61; <b>'Mounvi Podapati'</b>&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;age &#61;  <b>18</b> &#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;title &#61; <b>'2nd year CSE Undergrad'</b>&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;pronouns &#61; <b>'moUnvi'</b>&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;skills &#61; &#123;</p>    
                        <p>&nbsp;&nbsp;&nbsp;languages&#61; &#91; 'JavaScript','Python','Java'&#93;&#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;databases&#61; &#91; 'MySQL'&#93; &#59;</p>
                        <p>&nbsp;&nbsp;&nbsp;frameworks&#61; &#91; 'Django', 'Flask'&#93; &#59;</p>
                        &#125;
                    </div>
                    <div>I'm currently learning <b>Backend Dev</b></div>
               </div>
               <div className={styles.column}>
                   <div><b>My strengths: </b>
                       <p>Resiliency</p>
                       <p>Able to grasp things easily</p>
                       <p>Determination</p>
                    </div>
                    <div><b>My medium article:</b> <a href="https://medium.com/mozilla-firefox-club/backend-through-the-lens-of-a-front-end-developer-68124ae6d4cb"><span>tinyurl.com/MFCVITbackendfrontend</span></a></div>
                   <div>I have recently listened to: 
                   <img src="https://spotify-now-playing-git-master-mounvip1525.vercel.app/api/spotify-playing" alt="Spotify Now Playing" width="300" className={styles.music}/>
                   </div>
                </div>
        </div>
        </div>
    )
}
