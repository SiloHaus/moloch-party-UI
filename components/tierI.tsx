// TierI.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary

// Define a TypeScript interface for the component props
interface TierIProps {
  mintRemaining: number;
  costToMint: number;
}

const TierI: React.FC<TierIProps> = ({ mintRemaining, costToMint }) => {
  return (
    <div className={styles.tierRow}>
      <div className={styles.tierContainer}>
        {/* Left Side: Image */}
        <div className={styles.tierImageContainer}>
          <Image src="/42.png" alt="Alchemistress OG" width={900} height={300} />
        </div>
      </div>
      
      <div className={styles.tierContainer}> {/* Right Side: Button and Info */}
          <div className={styles.tierRightButtonWrapper}>
            <div className={styles.tierRightButton}>/tap_to_mint()</div>
            <div className={styles.tierRightButton}>Activate</div>
          </div>
          <div className={styles.tierText}>
            <div className={styles.tierMembershipHeader}> {/* Flex container */}
              <div>MEMBERSHIP: {costToMint} Ξ</div>
              <div>[{mintRemaining} Remaining]</div>
            </div>
            Alchemistresses | OG
            <p>Each NFT owns a Soulbound Moloch Share of an LP Cooperative on Optimism.</p>
            <ul>
              <li>Submit Proposals | Vote to Govern</li>
              <li>Burn your Share to Claim Equity.</li>
            </ul>
            Mint and Activate to Join.
          </div>
      </div>
    </div>
  );
};

export default TierI;
