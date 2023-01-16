import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GroupedTasks.module.css';

const GroupedTasks = ({ labels, handleCheckboxes, check, ind }) => {
	const [selected, setSelected] = useState(null);

	const handleChange = (e) => {
		const data = {
			key: ind,
			value: e.target.value
		}
		setSelected(data);
	  };

	  useEffect(() => {
		if (selected) {
			handleCheckboxes(selected);
			setSelected(null);
		}
	  }, [selected]);

	return (
		<div className={styles.wrapper} data-testid="grouped-tasks">
			<div className={styles.tasksWrapper}>
				<label className={styles.label}>
					<input 
						className={styles.input}
						type="checkbox"
						value={labels}
						checked={check}
						onChange={handleChange}
					/>
						{labels}
				</label>
			</div>
		</div>
	);
};

GroupedTasks.propTypes = {
	labels: PropTypes.string, 
	handleCheckboxes: PropTypes.func,
	check: PropTypes.bool,
	ind: PropTypes.number,

}
export default GroupedTasks;
