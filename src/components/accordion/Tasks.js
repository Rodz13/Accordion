import React, { useState } from 'react';

import styles from '../../../styles/Accordion.module.css';

const Tasks = ({ description, onSelectionChange }) => {
	const [selected, setSelected] = useState([]);

	const handleChange = (e) => {
		if (e.target.checked) {
		  setSelected([...selected, e.target.value]);
		} else {
		  setSelected(selected.filter((item) => item !== e.target.value));
		}
		onSelectionChange(selected.length === description.length)
	  };

	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>
				<input 
				className={styles.input}
				type="checkbox"
				value={description}
				checked={selected.includes(description)}
				onChange={handleChange}
			/>
				{description}
			</label>
		</div>
	);
};

export default Tasks;
