import { useState } from 'react';
import React, { useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FundingGoal from '../components/fundingGoal';
import MemberCount from '../components/memberCount';
import DaysLeft from '../components/daysLeft';
import TapToJoin from '../components/tapToJoin';
import HomeBanner from '../components/homeBanner';
import RewardTiers from '../components/rewardTiers';
import MainContent from '../components/mainContent';
import VictoryBanner from '../components/victoryBanner';

const Home: NextPage = () => {
  // Example static state - replace these with real data from your smart contracts later
  const [raisedAmount, setRaisedAmount] = useState(3.5);
  const [goalAmount, setGoalAmount] = useState(3);
  const [stretchAmount, setStretchAmount] = useState(10);
  const [memberNumber, setMemberNumber] = useState(69);
  const [daysLeft, setDaysLeft] = useState(5);
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
                      <DaysLeft daysLeft={daysLeft} />
                      <TapToJoin />
                </div>
                <MainContent />
              </div>
            </div>
          </main>
        </div>
      </div>
      
    <HomeBanner raisedAmount={raisedAmount} goalAmount={goalAmount} />
    
    <VictoryBanner isVisible={isVictoryBannerVisible} />

      <div className={styles.newPageA}>
        <div id="targetAnchor"></div>
      </div>

      <div className={styles.newPageB}>
        {"//MEMBERSHIP_rewards"}
      </div>
    
    <RewardTiers />  
    
    </div>
  );
};

export default Home;
