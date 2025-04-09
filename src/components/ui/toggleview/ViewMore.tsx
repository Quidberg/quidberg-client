import { ArrowDown } from "../../../assets/svg";
import TextWithIcon from "../styledTexts/TextWithIcon";

type ViewMoreType = {
  handleView: () => void;
  isShown: boolean;
};

const ViewMore = ({ handleView, isShown }: ViewMoreType) => {
  return (
    <TextWithIcon
      text={isShown ? "Hide" : "Show"}
      image={ArrowDown}
      width={4}
      height={4}
      onClick={handleView}
      imageClassName={
        isShown
          ? "-rotate-180 transform transition-all"
          : "transform transition-all"
      }
    />
  );
};

export default ViewMore;
