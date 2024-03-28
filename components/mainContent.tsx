import React from 'react';
// Import the Image component from Next.js or your custom Image component
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Adjust the import path to your CSS module file

const MainContent: React.FC = () => {
  return (
    <div className={styles.mainContent}>
      <Image src="/heroComplete.png" alt="WOAH!" width={1024} height={576} />
    </div>
  );
};

export default MainContent;