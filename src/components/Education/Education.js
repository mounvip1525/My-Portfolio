import React, { Component } from 'react';
import styles from './Education.module.css';
import pic from '../../assests/hat.png';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Title from '../Title/Title';
export default class Education extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
               <div className={styles.title}>
               <Title name="My Education" />
               </div>
                <div className={styles.container}>
                <div className={styles.userCard}>
                    <p>My Education Section</p>
                    <img src={pic} />
                    <div>
                        <h5>College Clubs/Chapters</h5>
                        <p>Mozilla Firefox</p>
                        <p>Apple Developers Group</p>
                        <h5>My Hobbies</h5>
                        <p>I paint!</p>
                        <h5>Extra Cirriculars</h5>
                        <p>I'm an athlete</p>
                        <p>I'm a classical dancer</p>
                        <p>I've got a black belt in Karate</p>
                    </div>
                </div>
                <div className={styles.eduContainer}>
                    <div>
                        <HourglassEmptyIcon />
                        <div>
                            <h4>VELLORE INSTITUTE OF TECHNOLOGY</h4>
                            <p>Currently doing my B.Tech 2nd year</p>
                            <p>Current CGPA - 9.46</p>
                        </div>
                    </div>
                    <div>
                        <DoneRoundedIcon />
                        <div>
                            <h4>SRI CHAITANYA TECHNO SCHOOL</h4>
                            <p>2017 - 2019</p>
                            <p>XII Passing % - 95.75%</p>
                        </div>
                    </div>
                    <div>
                        <DoneRoundedIcon />
                        <div>
                            <h4>PATEL PUBLIC SCHOOL (ICSE) </h4>
                            <p> 2008 - 2017</p>
                            <p>X Passing % - 95.6%</p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        )
    }
}
