import React, { Component } from 'react';
import styles from './Navabr.module.css';

export default class Navbar extends Component {
      handleResize = (e) => {
        const nav = document.getElementById('nav');
        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        }else{
          nav.classList.remove("add-shadow");
        }
       };
      
       componentDidMount() {
        window.addEventListener("scroll", this.handleResize);
       }
      
       componentWillUnmount() {
        window.addEventListener("scroll", this.handleResize);
       } 
    render() {
        return (
            <nav className={styles.navbar} id="nav">
                <h2>&lt;<span> &nbsp;Mounvi</span> &nbsp; /&gt;</h2>
                <div>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT ME</a>
                <a href="#education">EDUCATION</a>
                <a href="#skills">SKILLS</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
                </div>
            </nav>
        )
    }
}
