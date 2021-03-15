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

export default class Skills extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Title name="My Skills" />
                <div className={styles.container}>
                <div>
                    <img src={html} alt="HTML" />
                    <p>I spend most of my time typing &lt; and / &gt;</p>
                </div>
                <div>
                    <img src={javascript} alt="JavaScript" />
                    <p>My Full-Stack euphoria</p>
                </div>
                <div>
                    <img src={react} alt="React" />
                    <p>I love React like no other thing</p>
                </div>
                <div>
                    <img src={nodejs} alt="NodeJS" />
                    <p>Well, this is how I do backend coding</p>
                </div>
                <div>
                    <img src={python} alt="Python" />
                    <p>PS: It's more complicated than it's looks</p>
                </div>
                <div>
                    <img src={java} alt="Java" />
                    <p>I've been doing Java since my 10th grade!</p>
                </div>
                <div>
                    <img src={mysql} alt="MySQL" />
                    <p>Databases and MySQL are my favourites</p>
                </div>
                <div>
                    <img src={git} alt="Git and GitHub" />
                    <p>My one stop for Version Control</p>
                </div>
            </div>
            </div>
        )
    }
}
