import React from 'react';

import styles from '../../../styles/Accordion.module.css';

const Tasks = ({ description }) => {
	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>
				<input className={styles.input} type="checkbox"/>
				{description}
			</label>
		</div>
	);
};

export default Tasks;
