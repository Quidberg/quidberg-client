import CheckedIcon from "../../../../assets/comps/CheckedIcon";
import { UnCheckedBlack } from "../../../../assets/svg";
import { cn } from "../../../utils";

const TextCheckBox = ({
  isChecked,
  text,
  onClick,
  isInActive,
  showTextSelected,
  textClass,
}: {
  isChecked: boolean;
  text: string;
  onClick: () => void;
  isInActive?: boolean;
  showTextSelected?: string;
  textClass?: string;
}) => {
  return (
    <button
      className={cn(
        `flex gap-4 text-start items-center`,
        isInActive && "cursor-not-allowed"
      )}
      onClick={isInActive ? () => ({}) : onClick}
    >
      {isChecked && !isInActive ? (
        <CheckedIcon />
      ) : isInActive ? (
        <CheckedIcon fill={"#E2E1E1"} />
      ) : (
        <img src={UnCheckedBlack} />
      )}
      <p
        className={cn(
          `flex-wrap ${
            isChecked && !isInActive
              ? "text-checked "
              : isInActive
              ? "text-[#858181]"
              : "text-main_font"
          }
        
        `,
          textClass
        )}
      >
        {text}
      </p>
      {showTextSelected && isInActive && (
        <p className="text-sm text-primary/60 italic">
          {showTextSelected}
        </p>
      )}
    </button>
  );
};

export default TextCheckBox;
