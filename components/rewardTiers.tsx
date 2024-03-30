// Assuming this is part of a larger component file
import React from 'react';
import TierI from './tierI'; // Adjust path as necessary
import TierII from './tierII'; // Adjust path as necessary
// Import TierII, TierIII etc., similarly
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

const RewardTiers = () => {
  return (
    <div className={styles.rowContainer}>
      <TierI />  
     <div className={styles.newTierLine}></div>
      <TierII />
      {/*<TierIII /> */}
      {/* And so on, for each tier you have */}
    </div>
  );
};

export default RewardTiers;
