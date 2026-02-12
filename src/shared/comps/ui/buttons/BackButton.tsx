import { BackIcon } from "../../../../assets/svg";

const BackButton = ({
  className,
  handleBackNav,
}: {
  className: string;
  handleBackNav: () => void;
}) => {
  return (
    <button onClick={handleBackNav} className={className}>
      <img src={BackIcon} alt="back" className="w-full h-full" />
    </button>
  );
};

export default BackButton;
