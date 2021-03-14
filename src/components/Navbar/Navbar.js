import React, { Component } from 'react';
import styles from './Navabr.module.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <h2>&lt;Mounvi /&gt;</h2>
                <div>
                <a href="#home">HOME</a>
                <a href="#education">EDUCATION</a>
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
                </div>
            </nav>
        )
    }
}
