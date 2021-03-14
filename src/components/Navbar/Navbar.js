import React, { Component } from 'react';
import styles from './Navabr.module.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav id="nav">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        )
    }
}
