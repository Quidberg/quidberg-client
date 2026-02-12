import { CloseIconBlack } from "../../../../assets/svg";

const CancelButton = ({
  onClick,
  className,
}: {
  className: string;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={className}>
      <img src={CloseIconBlack} />
    </button>
  );
};

export default CancelButton;
