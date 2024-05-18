import { ethers } from 'ethers';
import { ABI } from './ABI';

const CONTRACT_ADDRESS = "0x48e93b7B9dF1a4AFFd7382e2db5cB5ceF07c4055";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

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