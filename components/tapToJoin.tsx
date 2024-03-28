import React from 'react';
import styles from '../styles/Home.module.css';

const TapToJoin = () => {
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
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      /tap_to_join_moloch_party
    </div>
  );
};

export default TapToJoin;
