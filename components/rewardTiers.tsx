// RewardTiers.tsx

// IMPORTS
import React from 'react';
import TierI from './tierI'; // Adjust path as necessary
import TierII from './tierII'; // Adjust path as necessary
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

interface RewardTiersProps {
  mintRemaining: number;
  costToMint: number;
  priceComm: number;
}

// CONST | A larger frame which holds TierI and TierII.

const RewardTiers: React.FC<RewardTiersProps> = ({ mintRemaining, costToMint, priceComm }) => {
  return (
    <div className={styles.notAStyle}>
      <TierI mintRemaining={mintRemaining} costToMint={costToMint} />
      <div className={styles.newTierLine}></div>
      <TierII mintRemaining={mintRemaining} priceComm={priceComm} />
      {/* Add TierIII and so on, as necessary */}
    </div>
  );
};

export default RewardTiers;