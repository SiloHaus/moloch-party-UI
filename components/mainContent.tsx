import React from 'react';
// Import the Image component from Next.js
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // Adjust the import path to your CSS module file

interface MainContentProps {
  raisedAmount: number;
  goalAmount: number;
}

const MainContent: React.FC<MainContentProps> = ({ raisedAmount, goalAmount }) => {
  console.log("Raised Amount:", raisedAmount, "Goal Amount:", goalAmount); // Debugging line

  const imageSrc = raisedAmount < goalAmount ? "/hero.png" : "/hero.png";
  const imageAlt = raisedAmount < goalAmount ? "Starting image" : "Finishing image";

  return (
    <div className={styles.mainContent}>
      <Image src={imageSrc} alt={imageAlt} width={1024} height={576} />
    </div>
  );
};

export default MainContent;
