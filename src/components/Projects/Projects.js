import React, { Component } from 'react';
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

export default class Projects extends Component {
    state={
        names:[1,2,3,4,5,6,7,8,9],
        projects:[
            {
                id:1,
                pic:quoteGnerator,
                name:"Quote Generator",
                link:"https://mounvip1525.github.io/Quote-Generator/",
            },
            {
                id:6,
                pic:photopedia,
                name:"Infinity Gallery",
                link:"https://mounvip1525.github.io/Infinity-gallery/",
            },
            {
                id:7,
                pic:countdown,
                name:"Custom Countdown",
                link:"https://mounvip1525.github.io/Custom-Countdown/",
            },
            {
                id:8,
                pic:joketeller,
                name:"Joke Teller",
                link:"https://mounvip1525.github.io/Joke-Teller/",
            },
            {
                id:9,
                pic:spockrock,
                name:"RockPaperScissors+",
                link:"https://mounvip1525.github.io/Spock-Rock-Game/",
            },
            {
                id:16,
                pic:ecommerce,
                name:"E-commerce site",
                link:"",
            },
            {
                id:17,
                pic:gclone,
                name:"Google Forms clone-ongoing",
                link:"",
            },
            {
                id:2,
                pic:pong,
                name:"Pong Game",
                link:"https://mounvip1525.github.io/Pong/",
            },
            {
                id:11,
                pic:musicplayer,
                name:"Music Player",
                link:"https://mounvip1525.github.io/Music-Player/",
            },
            {
                id:12,
                pic:kanbanboard,
                name:"Kanban Board",
                link:"https://mounvip1525.github.io/Kanban-board/",
            },
            {
                id:13,
                pic:sprintmaths,
                name:"Sprint Maths",
                link:"https://mounvip1525.github.io/Kanban-board/",
            },
            {
                id:14,
                pic:bookmarks,
                name:"My Bookmarker",
                link:"https://mounvip1525.github.io/Bookmarker-Links/",
            },
            {
                id:15,
                pic:picinpic,
                name:"Play in background",
                link:"https://mounvip1525.github.io/PictureInPicture/",
            },
            {
                id:3,
                pic:videoplayer,
                name:"Video Player",
                link:"https://mounvip1525.github.io/Video-Player/",
            },
            {
                id:4,
                pic:paint,
                name:"MS Paint clone",
                link:"https://mounvip1525.github.io/Paint-Clone/",
            },
            {
                id:5,
                pic:taskmate,
                name:"Taskmate-Django app",
                link:"https://taskmateplus.herokuapp.com/task/",
            },
            {
                id:10,
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

        ]
    }
    render() {
        return (
            <React.Fragment>
                <Title name="My Projects" />
                <div className={styles.container}>
                    {this.state.projects.map(project=>{
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
            </div>
            </React.Fragment>
        )
    }
}
