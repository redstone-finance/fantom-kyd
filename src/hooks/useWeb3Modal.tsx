import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { BigNumber, providers } from "ethers";
import Web3Modal from "web3modal";
import { ChainDetails, chain } from "../config/chain";

type NetworkToAdd = Omit<
  ChainDetails,
  "contractAddress" | "contractExplorerUrl" | "logo" | "label"
>;

export const useWeb3Modal = (
  setVerificationResult: Dispatch<SetStateAction<boolean | null>>
) => {
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);
  const [network, setNetwork] = useState<ChainDetails | null>(null);
  const [signer, setSigner] = useState<providers.JsonRpcSigner | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [isChangingNetwork, setIsChangingNetwork] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
    });
    setWeb3Modal(web3Modal);
  }, []);

  useEffect(() => {
    changeNetwork();
  }, [network]);

  const changeNetwork = async () => {
    if (network) {
      setIsChangingNetwork(true);
      const {
        contractAddress,
        contractExplorerUrl,
        logo,
        label,
        ...restNetworkParams
      } = network;
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: restNetworkParams.chainId }],
        });
        setIsChangingNetwork(false);
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          await addNewNetwork(restNetworkParams);
          setIsChangingNetwork(false);
        }
      } finally {
        setVerificationResult(null);
      }
    }
  };

  const addNewNetwork = async (networkParams: NetworkToAdd) => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [networkParams],
      });
    } catch {
      setVerificationResult(null);
    }
  };

  const connectWallet = async () => {
    if (web3Modal) {
      try {
        setIsConnecting(true);
        const instance = await web3Modal.connect();
        addListeners(instance);
        const provider = new providers.Web3Provider(instance);
        const signer = provider.getSigner();
        setSigner(signer);
        const walletAddress = await signer.getAddress();
        setWalletAddress(walletAddress);
      } catch (error: any) {
        console.error(error);
      } finally {
        setIsConnecting(false);
        setVerificationResult(null);
      }
    }
  };

  const reconnectWallet = async () => {
    if (web3Modal) {
      const instance = await web3Modal.connect();
      const provider = new providers.Web3Provider(instance);
      const signer = provider.getSigner();
      setSigner(signer);
      const walletAddress = await signer.getAddress();
      setWalletAddress(walletAddress);
    }
  };

  const addListeners = (web3ModalProvider: any) => {
    web3ModalProvider.on("accountsChanged", () => {
      window.location.reload();
    });

    web3ModalProvider.on("chainChanged", async (chainId: BigNumber) => {
      const chainIdAsNumber = chainId.toString();
      const isCorrectNetwork = chain.chainId === chainIdAsNumber;
      if (!isCorrectNetwork) {
        setNetwork(null);
      } else {
        setNetwork(chain);
        await reconnectWallet();
      }
    });
  };

  return {
    network,
    setNetwork,
    signer,
    connectWallet,
    walletAddress,
    isChangingNetwork,
    isConnecting,
  };
};
