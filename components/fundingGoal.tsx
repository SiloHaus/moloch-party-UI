import { useState } from 'react';
import styles from '../styles/Home.module.css';

interface FundingGoalProps {
  raisedAmount: number;
  goalAmount: number;
}

/* When you have Contract Address and ABI then update to pull State from Events */

const FundingGoal = ({ raisedAmount, goalAmount }: FundingGoalProps) => {
  const fundingPercentage = Math.min((raisedAmount / goalAmount) * 100, 100);

  return (
    <div className={styles.fundingCard}>
      <div className={styles.fundingMeterContainer}>
        <div className={styles.fundingMeter} style={{ width: `${fundingPercentage}%` }}></div>
      </div>
      <div className={styles.goalRaised}>Ξ {raisedAmount}</div>
      <div className={styles.goalAmount}>pledged of Ξ{goalAmount} Goal</div>
    </div>
  );
};

export default FundingGoal;
