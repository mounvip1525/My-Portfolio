import React from 'react';
import { useState } from 'react';
import styles from './Projects.module.css';
import LaunchIcon from '@material-ui/icons/Launch';
import Title from '../Title/Title';
import Modal from '../Modal/Modal';

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
// import messlytix from '../../assests/messlytix.png';

export default function Projects() {
    const [showClass,setShowClass]=useState(styles.displayNone);
    const [showAll,setShowAll]=useState(false);
    function setShowAllf(){
        setShowAll(!showAll);
        setShowClass(styles.project);
        // console.log(showClass);
    }
    const [showModal,setShowModal]=useState(false);
    
    let hideModal = () => { setShowModal(false) }
    const projects1=[
            {
                id:1,
                pic:photopedia,
                name:"Infinity Gallery",
                link:"https://mounvip1525.github.io/Infinity-gallery/",
                sourceCode:"https://github.com/mounvip1525/Infinity-gallery",
                techStack:["html","css","javascript"],
                description:"Infinitely scroll through images taken from Unsplash, clicking on image will redirect you to the official source site!"
            },
            {
                id:2,
                pic:countdown,
                name:"Custom Countdown",
                link:"https://mounvip1525.github.io/Custom-Countdown/",
                sourceCode:"https://github.com/mounvip1525/Custom-Countdown",
                techStack:["html","css","javascript"],
                description:"Create your own Custom Countdown, locally stored hence you can come back later to check the same. What will you be counting to? :P"
            },
            {
                id:3,
                pic:spockrock,
                name:"RockPaperScissors+",
                link:"https://mounvip1525.github.io/Spock-Rock-Game/",
                sourceCode:"https://github.com/mounvip1525/Spock-Rock-Game",
                techStack:["html","css","javascript"],
                description:"Play Rock Paper Scissors Lizard Spock endlessly with the computer. Need a Big Bang Theory reference to understand the game? "
            },
            {
                id:4,
                pic:ecommerce,
                name:"E-commerce site",
                link:"https://e-commerce-mounvi.herokuapp.com/",
                sourceCode:"https://github.com/mounvip1525/E-commerce",
                techStack:["react"],
                description:"Just an E-commerce site developed using react to practise the concepts of context API, pagination, states and many more. PS: Don't try the payment option"
            },
            {
                id:5,
                pic:gclone,
                name:"Google Forms clone~(ongoing)",
                sourceCode:"https://github.com/mounvip1525/Google-Forms-Clone",
                techStack:["react","nodejs"],
                description:"Google Forms clone with additional features like adding to folders, interactive UI, Hassle free form management",
            },
            {
                id:6,
                pic:musicplayer,
                name:"Music Player",
                link:"https://mounvip1525.github.io/Music-Player/",
                sourceCode:"https://github.com/mounvip1525/Music-Player",
                techStack:["html","css","javascript"],
                description:"I'd love to make a Spotify clone one day till then this is a simple music player made using HTML,CSS and JS!"
            },
            {
                id:7,
                pic:quoteGnerator,
                name:"Quote Generator",
                techStack:["html","css","javascript"],
                link:"https://mounvip1525.github.io/Quote-Generator/",
                sourceCode:"https://github.com/mounvip1525/Quote-Generator",
                description:"Looking for a good random thought? This can be handy. If you like it share it on any of your favourite platform like twitter, whatsapp, facebook!"
            },
            {
                id:8,
                pic:sprintmaths,
                name:"Sprint Maths",
                techStack:["html","css","javascript"],
                link:"https://mounvip1525.github.io/Sprint-Maths/",
                sourceCode:"https://github.com/mounvip1525/Sprint-Maths",
                description:"Want to test how fast are you at mental fast maths ? You can also compare your performance with the best scores and time taken."
            },
            {
                id:9,
                pic:pong,
                name:"Pong Game",
                techStack:["html","css","javascript"],
                link:"https://mounvip1525.github.io/Pong/",
                sourceCode:"https://github.com/mounvip1525/Pong",
                description:"Traditional Pong game developed to understand the concepts of Canvas. Two player feature will be added soon!"
            },
            
    ];
    const projects2=[
        {
            id:10,
            pic:kanbanboard,
            name:"Kanban Board",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Kanban-board/",
            sourceCode:"https://github.com/mounvip1525/Kanban-board",
            description:"A tool to visualise your work more efficienty and to maintain the order of daily work. Add/ Delete features and local storage enabled."
        },
        {
            id:11,
            pic:bookmarks,
            name:"My Bookmarker",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Bookmarker-Links/",
            sourceCode:"https://github.com/mounvip1525/Bookmarker-Links",
            description:"Bookmark all your favourite sites in one place, clicking on any bookmark will redirect you to the desired site",
        },
        {
            id:12,
            pic:joketeller,
            name:"Joke Teller",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Joke-Teller/",
            sourceCode:"https://github.com/mounvip1525/Joke-Teller",
            description:"Too tired to read ? Joke teller reads out programming related jokes to you! Have a funny day"
        },
        {
            id:13,
            pic:paint,
            name:"MS Paint clone",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Paint-Clone/",
            sourceCode:"https://github.com/mounvip1525/Paint-Clone",
            description:"A classic MS Paint clone."
        },
        {
            id:14,
            pic:picinpic,
            name:"Play in background",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/PictureInPicture/",
            sourceCode:"https://github.com/mounvip1525/PictureInPicture",
            description:"View any required re-sizeable screen in your desired tab to enable picture in picture ability"
        },
        // {
        //     id:15,
        //     pic:messlytix,
        //     name:"Messlytix",
        //     link:"https://messlytix.herokuapp.com/",
        //     sourceCode:"https://github.com/mounvip1525/Messlytix-DBMS",
        //     techStack:["html","css","django"],
        //     description:"Efficient Mess Management System made using Flask, I'd bet you want this system in your college too:)"
        // },
        {
            id:16,
            pic:videoplayer,
            name:"Video Player",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Video-Player/",
            sourceCode:"https://github.com/mounvip1525/Video-Player",
            description:"Youtube clone on the way till then this is a simple custom video player!"
        },
        {
            id:17,
            pic:taskmate,
            name:"Taskmate-Django app",
            techStack:["html","css","django"],
            link:"https://taskmateplus.herokuapp.com/task/",
            sourceCode:"https://github.com/mounvip1525/TaskMate",
            description:"A Full stack application to manage your daily tasks and is deployed on heroku. Primarily built to understand the concepts of Django"
        },
        {
            id:18,
            pic:calculator,
            name:"Calculator",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/My-Calculator/",
            sourceCode:"https://github.com/mounvip1525/My-Calculator",
            description:"A simple calculator made using HTML, CSS and Javascript similar to Apple calculator "
        },
        {
            id:19,
            pic:navigation,
            name:"Animated Navigation",
            techStack:["html","css","javascript"],
            link:"https://mounvip1525.github.io/Animated-Navigation/",
            sourceCode:"https://github.com/mounvip1525/Animated-Navigation",
            description:"An application developed to understand the concepts of CSS transitions and effects, custom navbar created"
        },
    ];
    const [description,setDesription]=useState("");
    const [name,setName]=useState("");
    const [img,setImg]=useState("");
    const [techStack,setTechStack]=useState([]);
    const [sourceCode,setSourceCode]=useState("");
    const [launch,setLaunch]=useState("");
    let showModal1 = (name,description,img,link,code,tech) => { 
        setName(name);
        setDesription(description);
        setImg(img);
        setLaunch(link);
        setSourceCode(code);
        setTechStack(tech);
        setShowModal(true);}
    let open = (event,link)=>{
        window.open(link);
        event.stopPropagation();
    }
    return (
        <div className={styles.wrapper}>
            <Title name="My Frontend Projects" />
            <Modal show={showModal} onHide={hideModal} name={name} description={description} img={img} link={launch} code={sourceCode} techStack={techStack}/>
            <div className={styles.container}>
                {projects1.map((project,index)=>{
                return(
                    <div key={index} className={styles.project} onClick={()=>showModal1(project.name,project.description,project.pic,project.link,project.sourceCode,project.techStack)}>
                        <img src={project.pic} alt="My project" />
                        <div className={styles.projectName}>
                            <p>{project.name}</p>
                            <div title="Launch Live" onClick={(e)=>open(e,project.link)}><LaunchIcon /></div>
                        </div>
                    </div>
                )
            })}
            {projects2.map((project,index)=>{
                return(
                    <div key={index} className={showClass} onClick={()=>showModal1(project.name,project.description,project.pic,project.link,project.sourceCode,project.techStack)}>
                        <img src={project.pic} alt="My project" />
                        <div className={styles.projectName}>
                            <p>{project.name}</p>
                        <div title="Launch Live" onClick={(e)=>open(e,project.link)}><LaunchIcon /></div>
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
        </div>
    )
}
