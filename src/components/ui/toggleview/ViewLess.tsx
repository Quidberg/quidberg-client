import { ArrowUp } from "../../../assets/svg";
import TextWithIcon from "../styledTexts/TextWithIcon";

export type ViewLessType = {
  text: string;
  handleView: () => void;
};

const ViewLess = ({ text, handleView }: ViewLessType) => {
  return (
    <TextWithIcon
      text={text}
      image={ArrowUp}
      width={8}
      height={8}
      onClick={handleView}
    />
  );
};

export default ViewLess;
