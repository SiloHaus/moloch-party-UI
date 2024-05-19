// ethers.ts

// IMPORTS
import { ethers } from 'ethers';
import { ABI } from './ABI';

// ADDRESSES
const CONTRACT_ADDRESS = "0x48e93b7B9dF1a4AFFd7382e2db5cB5ceF07c4055";
const MOLOCH_SHARE_TOKEN_ADDRESS = "0x01810b8f8ef3ea2dbb84d95f63982c1470fa4688";

// .ENV
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// ALCHEMY
export const getEthersProvider = () => {
  const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const provider = new ethers.providers.JsonRpcProvider(`https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`);
  return provider;
};

// WALLET
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

// ETHERSCAN API
export const getTokenTotalSupply = async () => {
  const molochToken = MOLOCH_SHARE_TOKEN_ADDRESS;
  const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
  const response = await fetch(
    `https://api-optimistic.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${molochToken}&apikey=AF13HSINCV1R86QHX18GA7N5FG6X589GFQ`
  );
  const data = await response.json();
  console.log('Etherscan API response:', data);
  
  if (data.status === '1') {
    const totalSupply = data.result;
    const decimals = 18; // Adjust this value based on your token's decimal places
    const formattedTotalSupply = ethers.utils.formatUnits(totalSupply, decimals);
    return formattedTotalSupply;
  } else {
    console.error('Etherscan API error:', data.message);
    throw new Error('Failed to fetch token total supply');
  }
};