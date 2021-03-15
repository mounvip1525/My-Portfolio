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
                    <h5>HTML</h5>
                    <p>I spend most of my time typing :- &lt; and / &gt;</p>
                    <div className={styles.myProgress}>
                        <div className={styles.myBar}></div>
                    </div>
                </div>
                <div>
                    <img src={javascript} alt="JavaScript" />
                    <h5>Javascript</h5>
                    <p>My Full-Stack euphoria</p>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div>
                    <img src={react} alt="React" />
                    <h5>React</h5>
                    <p>I love React like no other thing</p>
                </div>
                <div>
                    <img src={nodejs} alt="NodeJS" />
                    <h5>NodeJS</h5>
                    <p>Well, this is how I do backend coding</p>
                </div>
                <div>
                    <img src={python} alt="Python" />
                    <h5>Python</h5>
                    <p>PS: It's more complicated than it's looks</p>
                </div>
                <div>
                    <img src={java} alt="Java" />
                    <h5>Java</h5>
                    <p>I've been doing Java since my 10th grade!</p>
                </div>
                <div>
                    <img src={mysql} alt="MySQL" />
                    <h5>MySQL</h5>
                    <p>Databases and MySQL are my favourites</p>
                </div>
                <div>
                    <img src={git} alt="Git and GitHub" />
                    <h5>Git and GitHub</h5>
                    <p>My one stop for Version Control</p>
                </div>
            </div>
            </div>
        )
    }
}
