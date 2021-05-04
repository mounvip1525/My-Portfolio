import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import ContactMe from '../../components/ContactMe/ContactMe';
import Footer from '../../components/Footer/Footer';
import Feedback from '../../components/Feedback/Feedback';
import Overlay from '../../components/Overlay/Overlay';

export default class Portfolio extends React.Component  {
    render(){
        return (
            <div>
                <Overlay />
                <Navbar/>
                <section id="home">
                    <Landing />
                </section>
                <section id="about">
                    <AboutMe />
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
                <Feedback />
                <Footer />
            </div>
        )
    }
}
