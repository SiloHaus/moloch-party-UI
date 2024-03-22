import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  // Removed unused state hooks and related functions

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
            <ConnectButton />
            
            <div className="card">
              <h3 className="cardTitle">ALCHEMISTRESSES:</h3>
              <p className="cardSubtitle">A Moloch LP Cooperative focused on alAsset Liquidity.</p>
            </div>

            <div className={styles.contentArea}>
              <div className={styles.menu}>
                <button className={styles.card}>
                  <span className={styles.h4}>mint()</span>
                </button>

                <button className={styles.card}>
                  <span className={styles.h4}>mintComm()</span>
                </button>

                <button className={styles.card}>
                  <span className={styles.h4}>marketplace()</span>
                </button>

                <button className={styles.card}>
                  <span className={styles.h4}>withdraw()</span>
                </button>
              </div>
              <div className={styles.mainContent}>
                <p> Hero Image. </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>Made with ❤️ by your frens at 🌈</span>
        <div className={styles.socialIcons}>
          <a href="https://twitter.com/rootdraws" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
