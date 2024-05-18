// tapToJoin.tsx [AESTHETIC UI]

// IMPORTS
import React from 'react';
import styles from '../styles/Home.module.css';

// CONST | Dynamic UI | Scrolls the page to an Anchor Point to view Tiers.

const TapToJoin = () => {
  const handleClick = () => {
    const anchor = document.getElementById('targetAnchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={styles.backingCard}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      /tap_to_join_moloch_party
    </div>
  );
};

export default TapToJoin;
