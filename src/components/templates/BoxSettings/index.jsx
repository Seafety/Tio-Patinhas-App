import React from 'react';
import styles from './index.module.scss';

const Box = ({ title, children }) => {
  return (
    <div className={styles.box}>
      {title && <h3 className={styles.boxTitle}>{title}</h3>}
      <div className={styles.boxContent}>{children}</div>
    </div>
  );
};

export default Box;
