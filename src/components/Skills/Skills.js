import React, { Component } from 'react';
import styles from './Skills.module.css';

import html from '../../assests/html.png';
import javascript from '../../assests/javascript.png';
import react from '../../assests/react.png';
import nodejs from '../../assests/nodejs.png';
import python from '../../assests/python.png';
import java from '../../assests/java.png';
import mysql from '../../assests/mysql.png';
import git from '../../assests/github.png';
export default class Skills extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <img src={html} alt="HTML" />
                </div>
                <div>
                    <img src={javascript} alt="JavaScript" />
                </div>
                <div>
                    <img src={react} alt="React" />
                </div>
                <div>
                    <img src={nodejs} alt="NodeJS" />
                </div>
                <div>
                    <img src={python} alt="Python" />
                </div>
                <div>
                    <img src={java} alt="Java" />
                </div>
                <div>
                    <img src={mysql} alt="MySQL" />
                </div>
                <div>
                    <img src={git} alt="Git and GitHub" />
                </div>
            </div>
        )
    }
}
