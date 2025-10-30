import { InfoIcon } from "../../../assets/svg";
import { cn } from "../../../utils";

type Props = {
  children: string;
  textClassName?: string;
  buttonClassName?: string;
  onClick?: () => void;
};

const InfoButton = ({
  children,
  textClassName,
  buttonClassName,
  onClick,
}: Props) => {
  return (
    <button
      className={cn(`flex gap-1 items-center`, buttonClassName)}
      type="button"
      onClick={onClick}
    >
      <p className={cn(textClassName)}>{children}</p>
      <img src={InfoIcon} />
    </button>
  );
};

export default InfoButton;
