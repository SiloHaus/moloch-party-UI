// RewardTiers.tsx
import React from 'react';
import TierI from './tierI'; // Adjust path as necessary
import TierII from './tierII'; // Adjust path as necessary
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

interface RewardTiersProps {
  ogLeft: number;
  commLeft: number;
}

const RewardTiers: React.FC<RewardTiersProps> = ({ ogLeft, commLeft }) => {
  return (
    <div className={styles.notAStyle}>
      <TierI ogLeft={ogLeft} />
      <div className={styles.newTierLine}></div>
      <TierII commLeft={commLeft} />
      {/* Add TierIII and so on, as necessary */}
    </div>
  );
};

export default RewardTiers;