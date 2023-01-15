import React, { useState } from "react";

import styles from '../../../styles/ProgressBar.module.css';

const ProgressBar = ({ done }) => {
  const [progress, setProgress] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setProgress(newStyle);
  }, 200);

    return (
        <div className={styles.container} data-testid="bar">
          <div className={styles.filler} style={progress}>
            <span className={styles.label}>{done}%</span>
          </div>
        </div>
      );
};

export default ProgressBar;
