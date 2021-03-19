import React from 'react';
import styles from './Footer.module.css';
import Feedback from '../Feedback/Feedback';

export default function Footer() {
    return (
        <div>
            <Feedback />
            <div className={styles.container}>
                <p>&lt; div languageUsed=&#123; ReactJS &#125; </p>
                <p>deployedOn=&#123; Heroku &#125; </p>
                <p>formSubmissionTo=&#123; Formcarry &#125;</p>
                <p>carouselLibrary=&#123; react-pure-carousel &#125;</p>
                <p>madeWith=&#123; Love &#125; /&gt; </p>
        </div>
        </div>
    )
}
