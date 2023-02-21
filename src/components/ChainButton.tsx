import { ChainDetails } from "../config/chain";

interface Props {
  chain: ChainDetails;
  onChainClick: () => void;
  disabled: boolean;
}

export const ChainButton = ({ chain, onChainClick, disabled }: Props) => (
  <button
    className="flex align-center gap-2 border py-3 px-6 bg-brutal-lime rounded disabled:opacity-30 hover:scale-110	ease-in-out duration-300"
    onClick={() => onChainClick()}
    disabled={disabled}
  >
    <img width={24} height={24} src={chain.logo} alt={`${chain.label} logo`} />
    {chain.label}
  </button>
);
