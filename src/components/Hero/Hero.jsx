import styles from './styles.module.css';
import React from 'react';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <>
            <section className={styles.wrapper}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>TASKANA</h1>
                        <p>
                            Some of the functionalities provided by TASKANA are prioritization, distribution of tasks, monitoring the current progress and customization of the task attributes. TASKANA can also help to centralize task management within larger organizations with multiple task management mechanisms.
                            TASKANA is available as a Java library and as a REST API with lots of customization options for your task management system. It can be operated as standalone or be used to build integrated task management into your own application as well.
                        </p>
                    </div>
                    <div className={styles.heroAsset}>
                        <h2> Open Source Software for Task Management </h2>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Hero;
