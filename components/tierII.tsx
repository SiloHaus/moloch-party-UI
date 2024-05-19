// tierII.tsx

// IMPORTS
import React, { useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import styles from '../styles/Home.module.css';
import { getWeb3Provider, getSigner } from '../utils/ethers';

interface TierIIProps {
  mintRemaining: number;
  priceComm: number;
}

// CONST | Has the contributeTierII().
const TierII: React.FC<TierIIProps> = ({ mintRemaining, priceComm }) => {
  const [activationLink, setActivationLink] = useState('https://moloch.party');
  const [discordLink, setDiscordLink] = useState('https://discord.gg/tVQTzaps29');

  const handleMintComm = async () => {
    try {
      const web3Provider = getWeb3Provider();
      if (!web3Provider) {
        console.error('No Web3 provider found');
        return;
      }
      const signerContract = await getSigner(web3Provider);
      const tx = await signerContract.contributeTierII({ value: ethers.utils.parseEther(priceComm.toString()) });
      await tx.wait();
      console.log('Transaction successful', tx);
      // Open the activation link in a new tab
      window.open(activationLink, '_blank');
    } catch (error) {
      console.error('Error minting token:', error);
    }
  };

  return (
    <div className={styles.tierRow}>
      <div className={styles.tierContainer}>
        <div className={styles.tierImageContainer}>
          <Image src="/66.png" alt="Alchemistress OG" width={900} height={300} />
        </div>
      </div>
      <div className={styles.tierContainer}>
        <div className={styles.tierRightButtonWrapper}>
          <div className={styles.tierRightButton} onClick={handleMintComm}>
            /tap_to_mintComm()
          </div>
          <div className={styles.tierRightButton} onClick={() => window.open(activationLink, '_blank')}>
            Activation
          </div>
          <div className={styles.tierRightButton} onClick={() => window.open(discordLink, '_blank')}>
            Discord
          </div>
        </div>
        <div className={styles.tierText}>
          <div className={styles.tierMembershipHeader}>
            <div>MEMBERSHIP: {priceComm} Ξ</div>
            <div>[{mintRemaining} Remaining]</div>
          </div>
          PixelArt Landscape Commissions.
          <p>Each Landscape owns a Moloch Share of an LP Cooperative.</p>
          <ul>
            <li>Submit Proposals | Vote to Govern</li>
            <li>Burn your Share to Claim Equity.</li>
          </ul>
          Mint, Activate &amp; Open a Commission Ticket in Discord.
        </div>
      </div>
    </div>
  );
};

export default TierII;