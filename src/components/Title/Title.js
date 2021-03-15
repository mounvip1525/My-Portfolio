import React from 'react';
import styles from './Title.module.css';

export default function Title(props) {
    return (
        <div className={styles.container}>
            <h1>{props.name}</h1>
            <hr className={styles.hr}></hr>
        </div>
    )
}
