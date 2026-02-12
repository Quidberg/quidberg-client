import { WarningIcon } from "../../../../assets/svg";

const WarningText = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-1 items-center">
      <img src={WarningIcon} alt="warning" className="w-4 h-4" />
      <p className="text-light_font text-xs">{text}</p>
    </div>
  );
};

export default WarningText;
