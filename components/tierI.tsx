// TierI.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

const TierI = () => {
  return (
    <div className={styles.tierRow}> {/* Use a row style here if necessary */}
      <div className={styles.tierContainerLeft}>
        <Image src="/42.png" alt="Alchemistress OG" width={900} height={300} />
      </div>
      <div className={styles.tierContainerRight}>
        <button className={styles.tierRightButton}>/tap_to_mint()</button>
      </div>
    </div>
  );
};

export default TierI;