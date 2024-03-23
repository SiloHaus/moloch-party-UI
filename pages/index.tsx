import { useState } from 'react';
import React, { useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import FundingGoal from '../components/fundingGoal';
import MemberCount from '../components/memberCount';
import DaysLeft from '../components/daysLeft';
import TapToJoin from '../components/tapToJoin';
/*import { Link, Element } from '@react-scroll/modules/components';*/

const Home: NextPage = () => {
  // Example static state - replace these with real data from your smart contracts later
  const [raisedAmount, setRaisedAmount] = useState(420.69);
  const [goalAmount, setGoalAmount] = useState(1000);
  const [memberNumber, setMemberNumber] = useState(69); // Placeholder value
  const [daysLeft, setDaysLeft] = useState(5); // Placeholder value
  const anchorRef = useRef(null);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>moloch.party</title>
        <meta content="Artists Crowdfunding Moloch Treasuries." name="description" />
        <link href="/favicon.png?v=2" rel="icon" type="image/png" />
      </Head>

      <div className={styles.mainWrapper}>
        <div className={styles.centeredContent}>

          <main className={styles.main}>
            
            <div className={styles.mainWrapper}>
              
              <div className={styles.topBar}>
                <div className={styles.connectButton}><ConnectButton /></div>
              </div>

              <div className={styles.Title}>
                <div className={styles.cardSubtitle}>ALCHEMISTRESSES: An LP Cooperative for the Alchemix Community on Optimism.</div>
              </div>

              <div className={styles.contentArea}>
                <div className={styles.menu}>
                      <FundingGoal raisedAmount={raisedAmount} goalAmount={goalAmount} />
                      <MemberCount memberNumber={memberNumber} />
                      <DaysLeft daysLeft={daysLeft} />
                      <TapToJoin />
                </div>
                <div className={styles.mainContent}>
                    <iframe className={styles.videoIframe}
                      src="https://www.youtube.com/embed/jysypCeADJI">
                    </iframe>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
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
      
      <div className={styles.subBanner}>
        <div id="targetAnchor">Campaign Offerings:</div>
      </div>

  
<div className={styles.parentContainer}>
  {/* Left Rewards Container.*/}
  <div className={styles.tierContainerLeft}>
    <div className={styles.tierContainer}>
      <div className={styles.tierI}>
        <Image src="/42.png" alt="Alchemistress OG" width={900} height={300} />
      </div>
      <div className={styles.tierII}>Card 2</div>
      <div className={styles.tierIII}>Card 3</div>
    </div>
  </div>

  <div className={styles.tierContainerRight}>
    {/* Right Rewards Container.*/}
    <div className={styles.tierRightI}>
      <div className={styles.tierRightButton}>/tap_to_mint()</div>
    </div>
    <div className={styles.tierRightII}>
      <div className={styles.tierRightButton}>/tap_to_mintComm()</div>
    </div>
    <div className={styles.tierRightIII}>
      <div className={styles.tierRightButton}>/tap_to_mint()</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
