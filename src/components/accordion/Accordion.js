import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp, BsClipboardData, BsClipboardCheck } from "react-icons/bs";

import GroupedTasks from './groupedTasks';

import styles from '../../../styles/Accordion.module.css';

const Accordion = ({ title, content, ind, updateData }) => {
	const [isActive, setIsActive] = useState(false);
	const [isAllSelected, setIsAllSelected] = useState(false);
	const [mainContent, setMainContent] = useState(content);
	const titleColor = (isAllSelected ? '#00B797' : '#333333');

	const handleCheckboxes = (data) => {
		let main = mainContent;
		let edit = main.map((content) => {
			if (content.description === data?.value) {
				Object.assign(content, { checked: !content.checked });
			} else if (content.name === data?.value) {
				Object.assign(content, { checked: !content.checked });
			}
			return content;
		});
		
		setMainContent(edit);
		const newData = {
			key: data.key,
			data: edit
		};
		updateData(newData);
	};

	useEffect(() => {
		const length = content?.length;
		const count = content?.filter((c) => (c.checked));

		if (count?.length === length) {
			setIsAllSelected(true);
		} else {
			setIsAllSelected(false);
		}
	}, [mainContent]);

	const handleToggle = () => {
		setIsActive(!isActive);
	}

	return (
		<div className={styles.container} data-testid="headers">
			<div className={styles.content} onClick={handleToggle}>
				<div className={styles.title}>
					{isAllSelected ? <BsClipboardCheck className={styles.iconDone}/> : <BsClipboardData className={styles.icon}/> }
					<div style={{ color :titleColor }}>{title}</div>
				</div>
				<div className={styles.toggle}>
					<div>{isActive ? 'Hide' : 'Show'}</div>
					<div className={styles.toggleContent}>
						{isActive ? <BsChevronUp /> : <BsChevronDown />}
					</div>
				</div>
			</div>
			{isActive && mainContent && mainContent.map((c, index) => {
				return (
					<GroupedTasks 
						labels={c.description || c.name}
						key={index}
						check={c.checked}
						handleCheckboxes={(data) => handleCheckboxes(data)}
						ind={ind}
					/>
				);
			})}
		</div>
	);
};

export default Accordion;
