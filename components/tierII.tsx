// TierI.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface TierIIProps {
  mintRemaining: number;
  priceComm: number;
}

const TierII: React.FC<TierIIProps> = ({ mintRemaining, priceComm }) => {
  return (
     <div className={styles.tierRow}>
      <div className={styles.tierContainer}>

        {/* Left Side: Image */}
        <div className={styles.tierImageContainer}>
          <Image src="/66.png" alt="Alchemistress OG"  width={900} height={300} />
        </div>
      </div>
      
      <div className={styles.tierContainer}> {/* Right Side: Button and Info */}
          <div className={styles.tierRightButtonWrapper}>
          <div className={styles.tierRightButton}>/tap_to_mintComm()</div>
          <div className={styles.tierRightButton}>Activation</div>
          <div className={styles.tierRightButton}>Discord</div>
          </div>
          <div className={styles.tierText}>
            <div className={styles.tierMembershipHeader}> {/* Flex container */}
              <div>MEMBERSHIP: {priceComm} Ξ</div>
              <div>[{mintRemaining} Remaining]</div>
            </div>
            Design a Custom Mistress, fulfilled by Shizzy Aizawa.
            <p>Each NFT owns a Soulbound Moloch Share of an LP Cooperative.</p>
            <ul>
              <li>Submit Proposals | Vote to Govern</li>
              <li>Burn your Share to Claim Equity.</li>
              
            </ul>
            Mint, Activate & Open a Commission Ticket in Discord.
          </div>
      </div>
    </div>
  );
};

export default TierII;