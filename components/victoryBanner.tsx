// VictoryBanner.tsx
import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

interface VictoryBannerProps {
  isVisible: boolean;
}

const VictoryBanner: React.FC<VictoryBannerProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.congratsBanner}>
      MEMBERSHIP EXPANSION UNLOCKED! -- shizzy.eth has been commissioned 3Ξ to paint 69 Velodrome Themed, Biker Waifus!
    </div>
  );
};

export default VictoryBanner;
