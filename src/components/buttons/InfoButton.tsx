import { InfoIcon } from "../../assets/svg";

type Props = {
  children: string;
  textClassName?: string;
  buttonClassName?: string;
  onClick?: ()=>void
};

const InfoButton = ({ children, textClassName, buttonClassName, onClick }: Props) => {
  return (
    <button className={`flex gap-1 ${buttonClassName} items-center`} type="button" onClick = {onClick}>
      <p className={`${textClassName}`}>{children}</p>
      <img src={InfoIcon} />
    </button>
  );
};

export default InfoButton;
