import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS module as necessary

interface HoursLeftProps {
  hoursLeft: number;
}

const HoursLeft: React.FC<HoursLeftProps> = ({ hoursLeft }) => {
  return (
    <div className={styles.hoursCard}>
      <div className={styles.hoursLeft}>{hoursLeft}</div>
      <div className={styles.hoursToGo}>hours to go</div>
    </div>
  );
};

export default HoursLeft;
