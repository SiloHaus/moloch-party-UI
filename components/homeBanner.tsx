// homeBanner.tsx [AESTHETIC UI]

// IMPORTS
import React from 'react';
import styles from '../styles/Home.module.css';

interface HomeBannerProps {
  raisedAmount: number;
  goalAmount: number;
}

// CONST | Bottom of Home Page Funding Banner.
// This is not really necessary, but you might be able to do an "almost there" type UI.

const HomeBanner = ({ raisedAmount, goalAmount }: HomeBannerProps) => {
  const sections = 3; // These sections fill up as Goal is reached.

  return (
    <div className={styles.banner}>
      {[...Array(sections)].map((_, index) => {
        // Calculate the milestone for each section as a fraction of the goalAmount
        const milestone = ((index + 1) * goalAmount) / sections;
        const isMilestoneReached = raisedAmount >= milestone;
        
        // Calculate fillPercentage for the current section
        let fillPercentage = Math.max(0, Math.min(100, (raisedAmount - (index * goalAmount / sections)) / (goalAmount / sections) * 100));
        
        // Ensure that only the portion up to the raisedAmount is filled
        fillPercentage = isMilestoneReached ? 100 : fillPercentage;

        return (
          <div key={index} className={styles.bannerItem}>
            {/* Render the milestone box if the milestone is reached */}
            {isMilestoneReached && (
              <div className={styles.milestoneBox}>
                {`${(index + 1) * (goalAmount / sections)} Ξ`}
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
