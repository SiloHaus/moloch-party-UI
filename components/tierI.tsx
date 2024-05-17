import React from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as necessary
import { getWeb3Provider, getSigner } from '../utils/ethers';

interface TierIProps {
  mintRemaining: number;
  costToMint: number;
}

const TierI: React.FC<TierIProps> = ({ mintRemaining, costToMint }) => {
  const handleMint = async () => {
    try {
      const web3Provider = getWeb3Provider();
      if (!web3Provider) {
        console.error('No Web3 provider found');
        return;
      }

      const signerContract = await getSigner(web3Provider);

      const tx = await signerContract.contributeTierI({
        value: ethers.utils.parseEther(costToMint.toString())
      });

      await tx.wait();
      console.log('Transaction successful', tx);
    } catch (error) {
      console.error('Error minting token:', error);
    }
  };

  return (
    <div className={styles.tierRow}>
      <div className={styles.tierContainer}>
        <div className={styles.tierImageContainer}>
          <Image src="/42.png" alt="Alchemistress OG" width={900} height={300} />
        </div>
      </div>
      
      <div className={styles.tierContainer}> 
        <div className={styles.tierRightButtonWrapper}>
          <div className={styles.tierRightButton} onClick={handleMint}>
            /tap_to_mint()
          </div>
          <div className={styles.tierRightButton}>Activate</div>
        </div>
        <div className={styles.tierText}>
          <div className={styles.tierMembershipHeader}>
            <div>MEMBERSHIP: {costToMint} Ξ</div>
            <div>[{mintRemaining} Remaining]</div>
          </div>
          Undine Liquidity Cooperative
          <p>Each NFT owns a Soulbound Moloch Share of an LP Cooperative on Base.</p>
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
