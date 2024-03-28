// TierI.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

const TierI = () => {
  return (
     <div className={styles.tierRow}>
      <div className={styles.tierContainer}>

        {/* Left Side: Image */}
        <div className={styles.tierImageContainer}>
          <Image src="/42.png" alt="Alchemistress OG"  width={900} height={300} />
        </div>
      </div>
      
      <div className={styles.tierContainer}> {/* Right Side: Button and Info */}
        <div className={styles.tierRightInfo}>
          <div className={styles.tierRightButton}>/tap_to_mint()</div>
          <div>
            Information about membership goes here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierI;