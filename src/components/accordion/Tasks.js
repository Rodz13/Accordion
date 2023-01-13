import React, { useState } from 'react';

import styles from '../../../styles/Accordion.module.css';

const Tasks = ({ description }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input}type="checkbox" id="box" name="tasks"/>
      <label className={styles.label} htmlFor="tasks">{description}</label>
    </div>
  );
};

export default Tasks;

