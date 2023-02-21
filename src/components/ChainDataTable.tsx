import { ChainDetails } from "../config/chain";
import WalletIcon from "../assets/icons/wallet.png";
import ContractIcon from "../assets/icons/contract.png";

interface Props {
  walletAddress: string;
  network: ChainDetails;
}

export const ChainDataTable = ({ walletAddress, network }: Props) => (
  <table className="w-3/5 table-auto bg-brutal-cyan mb-8">
    <tbody className="text-md">
      <tr>
        <td className="flex items-center gap-3 py-3 px-6">
          <img
            className="object-scale-down w-6 h-6"
            src={WalletIcon}
            alt="Wallet icon"
          />
          Your address
        </td>

        <td className="py-3 px-6 text-right underline">
          <a
            href={`${network.blockExplorerUrl}address/${walletAddress}`}
            target="blank"
            referrerPolicy="no-referrer"
          >
            {walletAddress}
          </a>
        </td>
      </tr>
      <tr>
        <td className="flex items-center gap-3 py-3 px-6">
          <img
            className="object-scale-down w-6 h-6"
            src={ContractIcon}
            alt="Contract icon"
          />
          Integrated Contract
        </td>
        <td className="py-3 px-6 text-right underline">
          <a
            href={network.contractExplorerUrl}
            target="blank"
            referrerPolicy="no-referrer"
          >
            {network.contractAddress}
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);
