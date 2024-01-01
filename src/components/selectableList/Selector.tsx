import { SelectorType } from "../../shared/types/ComponentTypes";
import CheckButton from "../buttons/CheckButton";

const Selector = ({ text, isActive, selectorClick }: SelectorType) => {
  const handleClick = () => {
    selectorClick(text);
  };
  return (
    <div>
      {isActive ? (
        <CheckButton className="" text={text} onClick={handleClick} />
      ) : (
        <button>{text}</button>
      )}
    </div>
  );
};

export default Selector;
