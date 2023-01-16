import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './GroupedTasks.module.css';

const GroupedTasks = ({ labels, handleCheckboxes, check, index }) => {
    const [selected, setSelected] = useState(null);

    const handleChange = (event) => {
        const data = {
            key: index,
            value: event.target.value
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
    index: PropTypes.number,
}
export default GroupedTasks;
