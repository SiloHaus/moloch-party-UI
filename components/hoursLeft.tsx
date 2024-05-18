// hoursLeft.tsx

// IMPORTS
import React from 'react';
import styles from '../styles/Home.module.css';

interface HoursLeftProps {
  hoursLeft: number;
}

// CONST | Calculates hours remaining in campaign.

const HoursLeft: React.FC<HoursLeftProps> = ({ hoursLeft }) => {
  return (
    <div className={styles.hoursCard}>
      <div className={styles.hoursLeft}>{hoursLeft}</div>
      <div className={styles.hoursToGo}>hours to go</div>
    </div>
  );
};

export default HoursLeft;
