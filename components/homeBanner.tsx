import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path as necessary

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerItem}>
        <div className={styles.bannerIcon}></div> {/* Placeholder for icon */}
        Join the Alchemix Community to build DAO-Owned Liquidity.
      </div>
      <div className={styles.bannerItem}>
        <div className={styles.bannerIcon}></div> {/* Placeholder for icon */}
        Make Proposals to grow the Treasury.
      </div>
      <div className={styles.bannerItem}>
        <div className={styles.bannerIcon}></div> {/* Placeholder for icon */}
        Each Mistress holds Equity and Governance Rights to a Community-Owned Treasury.
      </div>
    </div>
  );
};

export default HomeBanner;
