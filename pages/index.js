import Head from 'next/head'

import Title from '../src/components/title/title';
import Accordion from '../src/components/accordion/Accordion';
import ProgressBar from '../src/components/progressBar/progressBar';

import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
	const res = await fetch("https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress");
	const data = await res.json();

	return {
		props: {
			tasks: data
		}
	}
};


export default function Home({ tasks }) {
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
					{tasks.map((t, index) => (
						<Accordion title={t.name} key={index} content={t.tasks}/>
					))}
					</div>
				</div>
			</main>
		</div>
	);
};
