import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Title from '../src/components/title/title';
import Accordion from '../src/components/accordion/Accordion';
import { groupedTasksData } from '../src/data';
import ProgressBar from '../src/components/progressBar/progressBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lodgyfy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.wrapper}>
          <Title className={styles.title}/>
          <ProgressBar done={36} />
          <div className={styles.accordion}>
            {groupedTasksData.map((n, index) => (
              <Accordion title={n.title} key={index}/>
            ))}
          </div>
        
        </div>
      </main>
    </div>
  )
}