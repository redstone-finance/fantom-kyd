interface Props {
  action: () => void;
  text: string;
  subtext?: string;
  background: string;
}

export const ActionButton = ({ action, text, subtext, background }: Props) => {
  return (
    <button
      className={`${background} py-3 px-8 rounded-full text-xl 
        transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
      onClick={action}
    >
      {text}
      {subtext && <p className="text-sm">{subtext}</p>}
    </button>
  );
};
