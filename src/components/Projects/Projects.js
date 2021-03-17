import React, { Component } from 'react';
import styles from './Projects.module.css';
import LaunchIcon from '@material-ui/icons/Launch';
import pic from '../../assests/project1.png';

export default class Projects extends Component {
    state={
        names:[1,2,3,4,5,6,7,8,9]
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.names.map(name=>{
                    return(
                        <div className={styles.project}>
                            <img src={pic} alt="My project" />
                            <div>
                                <p>Infinity Gallery</p>
                                <LaunchIcon />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
