import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS module as necessary

interface DaysLeftProps {
  daysLeft: number;
}

const DaysLeft: React.FC<DaysLeftProps> = ({ daysLeft }) => {
  return (
    <div className={styles.daysCard}>
      <div className={styles.daysLeft}>{daysLeft}</div>
      <div className={styles.daysToGo}>days to go</div>
    </div>
  );
};

export default DaysLeft;
