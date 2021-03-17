import React, { Component } from 'react';
import styles from './Skills.module.css';

import html from '../../assests/html.svg';
import javascript from '../../assests/js.svg';
import react from '../../assests/react.svg';
import nodejs from '../../assests/node-js.svg';
import python from '../../assests/python.svg';
import java from '../../assests/java.svg';
import mysql from '../../assests/database.svg';
import git from '../../assests/github.svg';

import Title from '../Title/Title';
import Stars from '../Stars/Stars';

export default class Skills extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Title name="My Skills" />
                <div className={styles.container}>
                <div>
                    <img src={html} alt="HTML" />
                    <h5>HTML</h5>
                    <p>My most typed characters: &lt; / &gt;</p>
                    <Stars count='4'/>
                </div>
                <div>
                    <img src={javascript} alt="JavaScript" />
                    <h5>Javascript</h5>
                    <p>My Full-Stack euphoria</p>
                    <Stars count='4' />
                </div>
                <div>
                    <img src={react} alt="React" />
                    <h5>React</h5>
                    <p>I love React like no other thing</p>
                    <Stars count='3' />
                </div>
                <div>
                    <img src={nodejs} alt="NodeJS" />
                    <h5>NodeJS</h5>
                    <p>My backend coding utility</p>
                    <Stars count='2' />
                </div>
                <div>
                    <img src={python} alt="Python" />
                    <h5>Python</h5>
                    <p>PS: More complicated than looks</p>
                    <Stars count='3' />
                </div>
                <div>
                    <img src={java} alt="Java" />
                    <h5>Java</h5>
                    <p>Learning since 10th grade</p>
                    <Stars count='4' />
                </div>
                <div>
                    <img src={mysql} alt="MySQL" />
                    <h5>MySQL</h5>
                    <p>Favourites: Databases & MySQL</p>
                    <Stars count='4' />
                </div>
                <div>
                    <img src={git} alt="Git and GitHub" />
                    <h5>Git and GitHub</h5>
                    <p>My one stop for Version Control</p>
                    <Stars count='4' />
                </div>
            </div>
            </div>
        )
    }
}