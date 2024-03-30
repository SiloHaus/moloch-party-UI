# INFO

## TODO

### React Hooks

#### fundingGoal.tsx [raisedAmount, goalAmount, stretchAmount]

* raisedAmount needs to exclude commission funds, and only be equity that is raised and deposited toward treasury.

* Withdraws will also need to take place after the campaign concludes, which means that setRaisedAmount needs to be finalized before withdraw() is executed. That way, the campaign registers as completed and funding score remains.

* goalAmount | stretchAmount can be set per campaign.

#### memberCount.tsx

* memberNumber - Moloch Shares which exist in TBAs of Alchemistresses

#### daysLeft.tsx

* daysLeft - Set per Campaign. Could probably Hardcode to 1.

#### tier1.tsx

* ogLeft - This is about Inventory from 

#### tier2.tsx

* commLeft


* What is the balance of currently funded contracts minus comms?
  * Does that balance accurately represent itself on gauges?
* How much time is left in the campaign before comms close?
* Withdraw Page could use deBank API for Token Balances | NFT Balances
  * https://docs.cloud.debank.com/en/readme/api-pro-reference/user

## START

npm run dev
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## REF

* [RainbowKit Documentation](https://rainbowkit.com)
* [wagmi Documentation](https://wagmi.sh)
* [Next.js Documentation](https://nextjs.org/docs)
* [the RainbowKit GitHub repository](https://github.com/rainbow-me/rainbowkit)

## DEPLOY

* [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
* [Next.js deployment documentation](https://nextjs.org/docs/deployment)
