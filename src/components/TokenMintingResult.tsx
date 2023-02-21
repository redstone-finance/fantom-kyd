interface Props {
  addressBalance: string;
}

export const TokenMintingResult = ({ addressBalance }: Props) => {
  return (
    <div>
      {!!addressBalance && (
        <div className="py-3 px-6 bg-brutal-cyan">
          <p className="text-lg font-bold mb-3">Your minted token</p>
          <table className="w-full table-auto">
            <tbody className="text-md">
              <tr>
                <td className="py-3 px-6 text-left">FKT Token balance</td>
                <td className="py-3 px-6 text-right">{addressBalance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
