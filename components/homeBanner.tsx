import React from 'react';
import styles from '../styles/Home.module.css'; // Ensure this is the correct path to your CSS module

interface HomeBannerProps {
  raisedAmount: number;
  goalAmount: number;
}

const HomeBanner = ({ raisedAmount, goalAmount }: HomeBannerProps) => {
  const sections = 3; // Total number of sections
  const milestones = [1, 2, 3]; // Define ETH milestones

  return (
    <div className={styles.banner}>
      {milestones.map((milestone, index) => {
        const fillPercentage = Math.min(100, (raisedAmount / ((index + 1) * (goalAmount / sections))) * 100);
        const isMilestoneReached = raisedAmount >= milestone;
        const milestoneText = `${milestone} Ξ`;

        return (
          <div key={index} className={styles.bannerItem}>
            {/* Conditionally render the milestone box */}
            {isMilestoneReached && (
              <div className={styles.milestoneBox}>
                {milestoneText}
              </div>
            )}
            <div className={styles.fillLevel} style={{
              width: `${fillPercentage}%`,
            }}></div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeBanner;
