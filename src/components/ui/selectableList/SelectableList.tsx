import { SelectorType } from "../../../shared/types/ComponentTypes";
import Selector from "./Selector";

const SelectableList = ({ items }: { items: SelectorType[] }) => {
  const handleSelectorClick = (text: string) => {
    console.log(text);
  };
  return (
    <div>
      {items.map((item) => (
        <Selector
          text={item.text}
          isActive={item.isActive}
          selectorClick={handleSelectorClick}
        />
      ))}
    </div>
  );
};

export default SelectableList;
