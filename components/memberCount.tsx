// memberCount.tsx

// IMPORTS
import React from 'react';
import styles from '../styles/Home.module.css'; // Adjust the path to your CSS file as needed

interface MemberCountProps {
  memberNumber: number;
}

// CONST | LINK to Moloch DAO UI || Also displays Members, which are fetched from Etherscan API.

const MemberCount: React.FC<MemberCountProps> = ({ memberNumber }) => {
  return (
    <a href="https://silohaus.github.io/silo-nft-dao-admin/#/molochv3/0xa/0x912aab5913023d20a5dcd17160e6954528433a7f" className={styles.memberCard} target="_blank" rel="noopener noreferrer">
      <div className={styles.memberNumber}>{memberNumber}</div>
      <div className={styles.members}>members</div>
    </a>
  );
};

export default MemberCount;
