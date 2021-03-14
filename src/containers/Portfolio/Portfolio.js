import React, { Component } from 'react';
import styles from './Portfolio.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import ContactMe from '../../components/ContactMe/ContactMe';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <section id="home">
                    <Landing />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <ContactMe />
                </section>
            </div>
        )
    }
}
