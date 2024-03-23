import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const TapToJoin = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setShowText(false);
      }
    }, 5000);
  };

  const handleClick = () => {
    // Scroll to the anchor point
    const anchor = document.getElementById('targetAnchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={styles.backingCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onClick={handleClick} style={{cursor: 'pointer'}}>
        /tap_to_join_moloch_party
      </div>
      {showText && (
        <div className={styles.hoverText}>
          Funding Goals:
          <ul>
            <li>1 ETH Discord Sticker Pack by Shizzy!</li>
            <li>3 ETH Art Budget for 69 Synthetix Themed Mistresses.</li>
            <li>Remaining ETH builds DAO owned <a href="https://twitter.com/kaiynne/status/1770356574755963332" target="_blank" rel="noopener noreferrer">
$2192-ETH LP</a> on Velodrome.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TapToJoin;
