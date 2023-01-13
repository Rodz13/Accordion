import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp, BsClipboardData } from "react-icons/bs";

import Tasks from './Tasks';
import { groupedTasksData } from '../../data';
import styles from '../../../styles/Accordion.module.css';

const data = {
  title: "General Infos",
  tasks: [
    {
      description: "Add name and surname",
      value: 10,
      checked: true
    },
    {
      description: "Add email",
      value: 15,
      checked: false
    },
    {
      description: "Add linkedin profile",
      value: 8,
      checked: false
    },
    {
      description: "Provide websites page url",
      value: 5,
      checked: true
    }, 
  ]
}

const newData = data.tasks.map((d, index) => {
  return <Tasks description={d.description} key={index}/>
});

const Accordion = ({ title }) => {

  // console.log(newData);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={() => setIsActive(!isActive)}>
        <div className={styles.title}>
          <BsClipboardData className={styles.icon}/>
          <div>{title}</div>
        </div>
        <div className={styles.toggle}>
          <div>{isActive ? 'Hide' : 'Show'}</div>
          <div className={styles.toggleContent}>{isActive ? <BsChevronUp /> : <BsChevronDown />}</div>
        </div>
      </div>
      {isActive && newData}
    </div>
  );
};

export default Accordion;

