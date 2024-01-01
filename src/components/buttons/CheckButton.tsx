import { CheckIcon } from "../../assets/svg";

export type CheckButtonPropType = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const CheckButton = ({ text, className, onClick }: CheckButtonPropType) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        <p>{text}</p>
        <img src={CheckIcon} alt="check" />
      </button>
    </div>
  );
};

export default CheckButton;
