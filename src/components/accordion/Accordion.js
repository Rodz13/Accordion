import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsClipboardData } from "react-icons/bs";

import Tasks from './Tasks';

import styles from '../../../styles/Accordion.module.css';

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);
	const [isAllSelected, setIsAllSelected] = useState(false);

	const handleSelectionChange = (isAllSelected) => {
		setIsAllSelected(isAllSelected);
	};

	const titleColor = isAllSelected ? '#00B797' : '#333333';

	return (
		<div className={styles.container}>
			<div className={styles.content} onClick={() => setIsActive(!isActive)}>
				<div className={styles.title}>
					<BsClipboardData className={styles.icon}/>
					<div style={{ color :titleColor }}>{title}</div>
				</div>
				<div className={styles.toggle}>
					<div>{isActive ? 'Hide' : 'Show'}</div>
					<div className={styles.toggleContent}>
					{isActive ? <BsChevronUp /> : <BsChevronDown />}
					</div>
				</div>
			</div>
			{isActive && content.map((c, index) => (
				<Tasks 
					description={c.description || c.name}
					key={index}
					onSelectionChange={handleSelectionChange}
				/>
			))}
		</div>
	);
};

export default Accordion;
