import React, { useState, useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FundingGoal from '../components/fundingGoal';
import MemberCount from '../components/memberCount';
import HoursLeft from '../components/hoursLeft';
import TapToJoin from '../components/tapToJoin';
import HomeBanner from '../components/homeBanner';
import RewardTiers from '../components/rewardTiers';
import MainContent from '../components/mainContent';
import VictoryBanner from '../components/victoryBanner';

const Home: NextPage = () => {
  // Connect these to Testnet Contracts to pull State
  const [raisedAmount, setRaisedAmount] = useState(2.4);
  const [goalAmount, setGoalAmount] = useState(3);
  const [stretchAmount, setStretchAmount] = useState(10);
  const [memberNumber, setMemberNumber] = useState(69);
  const [hoursLeft, setHoursLeft] = useState(24);
  const [mintRemaining, setMintRemaining] = useState(14);
  const [costToMint, setCostToMint] = useState(0.42);
  const [priceComm, setPriceComm] = useState(0.69);
  const isVictoryBannerVisible = raisedAmount >= goalAmount;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>moloch.party</title>
        <meta content="Artists Crowdfunding Moloch Treasuries." name="description" />
        <link href="/favicon.png?v=2" rel="icon" type="image/png" />
      </Head>

      <div className={styles.topBar}>
                <div className={styles.connectButton}><ConnectButton /></div>
              </div>

              <div className={styles.Title}>
                <div className={styles.cardSubtitle}>/ALCHEMISTRESSES_expansionPack</div>
              </div>
      <div className={styles.mainWrapper}>
        <div className={styles.centeredContent}>

          <main className={styles.main}>
            
            <div className={styles.mainWrapper}>

              <div className={styles.contentArea}>
                <div className={styles.menu}>
                      <FundingGoal raisedAmount={raisedAmount} goalAmount={goalAmount} stretchAmount={stretchAmount} />
                      <MemberCount memberNumber={memberNumber} />
                      <HoursLeft hoursLeft={hoursLeft} />
                      <TapToJoin />
                </div>
                <MainContent raisedAmount={raisedAmount} goalAmount={goalAmount} />

              </div>
            </div>
          </main>
        </div>
      </div>
      
    <HomeBanner raisedAmount={raisedAmount} goalAmount={goalAmount} />
    
    <VictoryBanner isVisible={isVictoryBannerVisible} />

{/* Reward Tiers Section */}

      <div className={styles.newPageA}>
        <div id="targetAnchor"></div>
      </div>

      <div className={styles.newPageB}>
        {"//MEMBERSHIP_rewards"}
      </div>
    
    <RewardTiers mintRemaining={mintRemaining} costToMint={costToMint} priceComm={priceComm} />  

{/* BAAL | 6551 Structures */}    

    <div className={styles.newPageA}>
        <div id="targetAnchorB"></div>
    </div>

    <div className={styles.newPageB}>
        {"//ANATOMY_of_SILO"}
    </div>

{/* Equity | Rage Quit Rights */}    

    <div className={styles.newPageA}>
        <div id="targetAnchorC"></div>
    </div>

    <div className={styles.newPageB}>
        {"//EQUITY_and_RAGE_QUIT"}
    </div>

{/* BAAL | 6551 Structures */}    

    <div className={styles.newPageA}>
        <div id="targetAnchorD"></div>
    </div>

    <div className={styles.newPageB}>
        {"//TREASURY_balance_sheet"}
    </div>


  </div>  
  );
};

export default Home;
