import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsChevronDown, BsChevronUp, BsClipboardData, BsClipboardCheck } from "react-icons/bs";

import GroupedTasks from '../groupedTasks/GroupedTasks';

import styles from './Accordion.module.css';

const Accordion = ({ title, contents, index, updateData }) => {
    const [isActive, setIsActive] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [mainContent, setMainContent] = useState(contents);

    const titleColor = isAllSelected ? '#00B797' : '#333333';

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

        updateData({ 
            key: data.key,
            data: edit
        });
    };

    useEffect(() => {
        const isAllSelected = contents?.filter((item) => (item.checked)).length === contents.length;

        setIsAllSelected(isAllSelected);
    }, [mainContent]);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.container} data-testid="headers">
            <div className={styles.content} onClick={handleToggle}>
                <div className={styles.title}>
                    { isAllSelected ?
                        <BsClipboardCheck className={styles.iconDone} /> :
                        <BsClipboardData className={styles.icon} /> }
                    <div style={{ color :titleColor }}>{title}</div>
                </div>
                <div className={styles.toggle}>
                    <div>{isActive ? 'Hide' : 'Show'}</div>
                    <div className={styles.toggleContent}>
                        { isActive ? <BsChevronUp /> : <BsChevronDown /> }
                    </div>
                </div>
            </div>
            { isActive && mainContent && mainContent.map((content, idex) => {
                return (
                    <GroupedTasks 
                        labels={content.description || content.name}
                        key={idex}
                        check={content.checked}
                        handleCheckboxes={(data) => handleCheckboxes(data)}
                        index={index}
                        className={styles.tasksWrapper}
                    />
                );
            }) }			
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.string,
    contents: PropTypes.array,
    index: PropTypes.number,
    updateData: PropTypes.func,
};

export default Accordion;
