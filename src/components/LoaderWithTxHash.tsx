import { LoaderWithText } from "./LoaderWithText";

interface Props {
  text: string;
  transactionHash: string;
  blockExplorerUrl: string;
}

export const LoaderWithTxHash = ({
  text,
  transactionHash,
  blockExplorerUrl,
}: Props) => (
  <div>
    <LoaderWithText text={text} />
    {transactionHash && (
      <p className="pt-2">
        {`Transaction hash: `}
        <a
          className="underline"
          href={`${blockExplorerUrl}address/${transactionHash}`}
          target="blank"
          referrerPolicy="no-referrer"
        >
          {` ${transactionHash.slice(0, 8)}...${transactionHash.slice(-6)}`}
        </a>
      </p>
    )}
  </div>
);
