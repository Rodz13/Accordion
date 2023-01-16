import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Title from '../src/components/title/Title.jsx';
import Accordion from '../src/components/accordion/Accordion.jsx';
import ProgressBar from '../src/components/progressBar/ProgressBar.jsx';

import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
    try {
        const res = await fetch('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress');
        const data = await res.json();

        return {
            props: {
                tasks: data
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
};

const Home = ({ tasks }) => {
    const [update, setUpdate] = useState(false);
    const [data, setData] = useState(!update && tasks);
    const [progress, setProgress] = useState(0);

    const updateData = (newData) => {
        setUpdate((update) => !update)
        let replaceData = data
        replaceData[newData.key].tasks = newData.data
        setData(replaceData)
    }

    useEffect(() => {
        let totalTasksValue = 0;
        let taskValue = 0;

        for (const tasks of data) {
            for (const subTasks of tasks.tasks) {
                totalTasksValue += subTasks.value
                if (subTasks.checked) {
                    taskValue += subTasks.value
                }
            }
        };

        const normalizedValue = Math.round((taskValue / totalTasksValue) * 100);
        setProgress(normalizedValue);
    }, [update]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Lodgify</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className={styles.wrapper}>
                    <Title className={styles.title} pageTitle={'Lodgify Grouped Tasks'} />
                    <ProgressBar done={progress} />
                    <div className={styles.accordion}>
                        {data.map((task, index) => (
                            <Accordion
                                updateData={updateData} 
                                title={task.name}
                                key={index}
                                contents={task.tasks}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

Home.propTypes = {
	tasks: PropTypes.array,
};

export default Home;
