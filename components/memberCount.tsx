import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as needed

interface MemberCountProps {
  memberNumber: number;
}

const MemberCount: React.FC<MemberCountProps> = ({ memberNumber }) => {
  return (
    <div className={styles.memberCard}>
      <div className={styles.memberNumber}>{memberNumber}</div>
      <div className={styles.members}>members</div>
    </div>
  );
};

export default MemberCount;
