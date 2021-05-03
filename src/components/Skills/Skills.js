import React, { Component } from 'react';
import styles from './Skills.module.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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

export default function Skills(props) {
        return (
            <div className={styles.wrapper}>
              <Title name="My Skillsets" />
              <div className={styles.container}>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={8}
                isPlaying={true}
                visibleSlides={4}
                interval={3000}>
                <Slider className={styles.slider}>
                  <Slide index={0}>
                  <div className={styles.slideComponent}>
                        <img src={html} alt="HTML" />
                        <h5>HTML</h5>
                        <p>My most typed characters: &lt; / &gt;</p>
                        <Stars count='4'/>
                  </div>
                  </Slide>
                  <Slide index={1}>
                    <div className={styles.slideComponent}>
                    <img src={javascript} alt="JavaScript" />
                        <h5>Javascript</h5>
                        <p>My Full-Stack euphoria</p>
                        <Stars count='4' />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className={styles.slideComponent}>
                        <img src={react} alt="React" />
                        <h5>React</h5>
                        <p>I love React like no other thing</p>
                        <Stars count='3' />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className={styles.slideComponent}>
                        <img src={nodejs} alt="NodeJS" />
                        <h5>NodeJS</h5>
                        <p>My backend coding utility</p>
                        <Stars count='2' />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className={styles.slideComponent}>
                        <img src={python} alt="Python" />
                        <h5>Python</h5>
                        <p>PS: More complicated than looks</p>
                        <Stars count='3' />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className={styles.slideComponent}>
                        <img src={java} alt="Java" />
                        <h5>Java</h5>
                        <p>Learning since 10th grade</p>
                        <Stars count='4' />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className={styles.slideComponent}>
                        <img src={mysql} alt="MySQL" />
                        <h5>MySQL</h5>
                        <p>Favourites: Databases & MySQL</p>
                        <Stars count='4' />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className={styles.slideComponent}>
                        <img src={git} alt="Git and GitHub" />
                        <h5>Git and GitHub</h5>
                        <p>My one stop for Version Control</p>
                        <Stars count='4' />
                    </div>
                  </Slide>
                </Slider>
                <div className={styles.buttonContainer}>
                <ButtonBack>&lt;</ButtonBack>
                <ButtonNext>&gt;</ButtonNext>
                </div>
              </CarouselProvider>
              </div>
              </div>
        )
    }