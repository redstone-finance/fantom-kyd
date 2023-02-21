import { TokenMintingResult } from "./TokenMintingResult";

interface Props {
  verificationResult: boolean;
  addressBalance: string;
}

export const VerificationResult = ({
  verificationResult,
  addressBalance,
}: Props) => {
  return (
    <div className="w-3/5 text-center mt-3">
      <div>
        {verificationResult ? (
          <TokenMintingResult addressBalance={addressBalance} />
        ) : (
          <div className="text-lg font-bold py-3 px-6 bg-brutal-cyan">
            Sorry, your address doesn't have required KYD Level
          </div>
        )}
      </div>
    </div>
  );
};
