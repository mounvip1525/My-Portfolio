import React, { Component } from 'react';
import { useState } from 'react';
import styles from './Projects.module.css';
import LaunchIcon from '@material-ui/icons/Launch';
import pic from '../../assests/project1.png';
import Title from '../Title/Title';

import quoteGnerator from '../../assests/quote-generator.png';
import pong from '../../assests/pong.png';
import videoplayer from '../../assests/video-player.png';
import paint from '../../assests/paint-.png';
import taskmate from '../../assests/taskmate.png';
import photopedia from '../../assests/photopedia.png';
import countdown from '../../assests/countdown.png';
import joketeller from '../../assests/joketeller.png';
import spockrock from '../../assests/spockrock.png';
import calculator from '../../assests/calculator.png';
import musicplayer from '../../assests/musicplayer.png';
import kanbanboard from '../../assests/kanban.png';
import sprintmaths from '../../assests/sprintmaths.png';
import bookmarks from '../../assests/bookmarks.png';
import picinpic from '../../assests/screenshare.png';
import ecommerce from '../../assests/ecommerce.png';
import gclone from '../../assests/fabforms.png';
import navigation from '../../assests/navigation.png';

export default function Projects() {
    const [showClass,setShowClass]=useState(styles.displayNone);
    const [showAll,setShowAll]=useState(false);
    function setShowAllf(){
        setShowAll(!showAll);
        setShowClass(styles.project);
        // console.log(showClass);
    }
    const [projects1,setProjects1]=useState([
            {
                id:1,
                pic:quoteGnerator,
                name:"Quote Generator",
                link:"https://mounvip1525.github.io/Quote-Generator/",
            },
            {
                id:2,
                pic:photopedia,
                name:"Infinity Gallery",
                link:"https://mounvip1525.github.io/Infinity-gallery/",
            },
            {
                id:3,
                pic:countdown,
                name:"Custom Countdown",
                link:"https://mounvip1525.github.io/Custom-Countdown/",
            },
            {
                id:4,
                pic:joketeller,
                name:"Joke Teller",
                link:"https://mounvip1525.github.io/Joke-Teller/",
            },
            {
                id:5,
                pic:spockrock,
                name:"RockPaperScissors+",
                link:"https://mounvip1525.github.io/Spock-Rock-Game/",
            },
            {
                id:6,
                pic:ecommerce,
                name:"E-commerce site",
                link:"https://e-commerce-mounvi.herokuapp.com/",
            },
            {
                id:7,
                pic:gclone,
                name:"Google Forms clone~(ongoing)",
                link:"",
            },
            {
                id:8,
                pic:pong,
                name:"Pong Game",
                link:"https://mounvip1525.github.io/Pong/",
            },
            {
                id:9,
                pic:musicplayer,
                name:"Music Player",
                link:"https://mounvip1525.github.io/Music-Player/",
            },
    ])
    const [projects2,setProjects2]=useState([
        {
            id:10,
            pic:kanbanboard,
            name:"Kanban Board",
            link:"https://mounvip1525.github.io/Kanban-board/",
        },
        {
            id:11,
            pic:sprintmaths,
            name:"Sprint Maths",
            link:"https://mounvip1525.github.io/Kanban-board/",
        },
        {
            id:12,
            pic:bookmarks,
            name:"My Bookmarker",
            link:"https://mounvip1525.github.io/Bookmarker-Links/",
        },
        {
            id:13,
            pic:picinpic,
            name:"Play in background",
            link:"https://mounvip1525.github.io/PictureInPicture/",
        },
        {
            id:14,
            pic:videoplayer,
            name:"Video Player",
            link:"https://mounvip1525.github.io/Video-Player/",
        },
        {
            id:15,
            pic:paint,
            name:"MS Paint clone",
            link:"https://mounvip1525.github.io/Paint-Clone/",
        },
        {
            id:16,
            pic:taskmate,
            name:"Taskmate-Django app",
            link:"https://taskmateplus.herokuapp.com/task/",
        },
        {
            id:17,
            pic:calculator,
            name:"Calculator",
            link:"https://mounvip1525.github.io/My-Calculator/",
        },
        {
            id:18,
            pic:navigation,
            name:"Animated Navigation",
            link:"https://mounvip1525.github.io/Animated-Navigation/"
        },
    ])
    return (
        <React.Fragment>
            <Title name="My Frontend Projects" />
            <div className={styles.container}>
                {projects1.map(project=>{
                return(
                    <div className={styles.project}>
                        <img src={project.pic} alt="My project" />
                        <div className={styles.projectName}>
                            <p>{project.name}</p>
                            <div title="Launch Live"><a href={project.link}><LaunchIcon /></a></div>
                        </div>
                    </div>
                )
            })}
            {projects2.map(project=>{
                return(
                    <div className={showClass}>
                        <img src={project.pic} alt="My project" />
                        <div className={styles.projectName}>
                            <p>{project.name}</p>
                        <div title="Launch Live"><a href={project.link}><LaunchIcon /></a></div>
                        </div>
                    </div>
                )
            })}
            {!showAll ? 
                        <div className={styles.buttonContainer}>
                        <button onClick={()=>setShowAllf()}
                        className={styles.loadmore}>Load More</button>
                    </div> : null }
            <p className={styles.ongoing}>Python projects will be added shortly</p>
        </div>
        </React.Fragment>
    )
}
