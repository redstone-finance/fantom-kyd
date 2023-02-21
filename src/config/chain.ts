import { utils } from "ethers";
import WalletIcon from "../assets/icons/wallet.png";

export interface ChainDetails {
  chainId: string;
  rpcUrls: string[];
  chainName: string;
  label: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrl: string;
  contractAddress: string;
  contractExplorerUrl: string;
  logo?: any;
}

export const chain = {
  chainId: utils.hexValue(250),
  rpcUrls: ["https://rpc.ankr.com/fantom/"],
  chainName: "Fantom",
  label: "Connect your wallet",
  nativeCurrency: {
    name: "FTM",
    symbol: "FTM",
    decimals: 18,
  },
  blockExplorerUrl: "https://ftmscan.com/",
  contractAddress: "0xaCf97fb2f2c336c45b799DAB925ad10ADC70fCAC",
  contractExplorerUrl:
    "https://ftmscan.com/address/0xaCf97fb2f2c336c45b799DAB925ad10ADC70fCAC",
  logo: WalletIcon,
};
