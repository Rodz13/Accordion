import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.css';

const Title = ({ pageTitle }) => {
    return (
        <div className={styles.title} data-testid='title'>
            {pageTitle}
        </div>
    );
};

Title.propTypes = {
    pageTitle: PropTypes.string,
};

export default Title;
