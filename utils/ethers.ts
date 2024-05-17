import { ethers } from 'ethers';

const CONTRACT_ADDRESS = "0xD84D227b2965a011561FDD6C2782bA74d4551c51";
const ABI = [
  {"inputs":[{"internalType":"uint256","name":"_mintSupply","type":"uint256"},{"internalType":"uint256","name":"_durationInDays","type":"uint256"},{"internalType":"address payable","name":"_molochVault","type":"address"},{"internalType":"address payable","name":"_artistVault","type":"address"},{"internalType":"uint256","name":"_costToMint","type":"uint256"},{"internalType":"uint256","name":"_costToCommission","type":"uint256"},{"internalType":"address","name":"_tierIAddress","type":"address"},{"internalType":"address","name":"_tierIIAddress","type":"address"},{"internalType":"uint256","name":"_artistSharePercentage","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalMinted","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timeFinalized","type":"uint256"}],"name":"CampaignFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"raisedAmount","type":"uint256"}],"name":"GoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalMinted","type":"uint256"}],"name":"TokenMinted","type":"event"},{"inputs":[],"name":"artistSharePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"artistVault","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contributeTierI","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"contributeTierII","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"costToCommission","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"costToMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"finalizeCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"goalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goalReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"molochVault","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceComm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stretchAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierIContract","outputs":[{"internalType":"contract TierI","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierIIContract","outputs":[{"internalType":"contract TierII","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

export const getEthersProvider = () => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const provider = new ethers.providers.JsonRpcProvider(`https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`);
  return provider;
};

export const getWeb3Provider = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    return web3Provider;
  } else {
    console.error('No Ethereum provider found');
    return null;
  }
};

export const getContract = (provider: ethers.providers.Provider | ethers.Signer) => {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
};

export const getSigner = async (provider: ethers.providers.Web3Provider) => {
  await provider.send("eth_requestAccounts", []); // Request account access if needed
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};