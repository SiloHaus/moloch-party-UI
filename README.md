# React Hooks

## fundingGoal.tsx [raisedAmount, goalAmount, stretchAmount]

MolochParty.sol

    uint256 public goalAmount; 
    uint256 public raisedAmount;
    uint256 public stretchAmount;

## memberCount.tsx [memberNumber]

Etherscan API || MolochShareAddress Holder Count.

## daysLeft.tsx [daysLeft]

MolochParty.sol
  uint256 public endTime;

Will need to convert to Hours Remaining until End Time.

## tier1.tsx [mintRemaining, costToMint]

MolochParty.sol
    uint256 public mintRemaining;
    uint256 public costToMint;

* function contributeTierI()

## tier2.tsx [mintRemaining, priceComm]

MolochParty.sol
    uint256 public mintRemaining;
    uint256 public priceComm;

* function contributeTierII()

## DISCORD TICKET BOT

* The Commissions queue is a Discord Ticket Bot, with some basic prompts, and room for reference images to be put into the chat for that specific Issue.

* The commissioner also needs to link their NFT -- specifically so that the TokenID can be associated with their image.

## Anatomy of SILO

* Create a Diagram which shows the different components of a SILO.
  * DAO Treasury [SAFE]
    * Sudoswap LP
  * Manager Vault [SAFE]
  * LOOT [SAFE] [RQ]
  * NFT
  * 6551 Acct with Membership Shares [RQ]

* We also want to provide links here to Activation and Admin.
* Explain Equity | RageQuit rights, and limitations of only Rage Quitting Liquid Values.
* We also want to cover Treasury Dissolution.

## SOCIALS

* X
* WARPCASTER
* Discord
* Github

.:.

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

* moloch.party URL for pop-up Campaigns.
* 1.moloch.party could be a compelling URL structure, and then we could have a record list of past campaigns, where people can check to see how much was raised.