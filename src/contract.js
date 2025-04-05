import { ethers } from "ethers";
import abi from './UserRegistryABI.json'; // paste ABI from Remix after compiling

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // paste here

export const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};
