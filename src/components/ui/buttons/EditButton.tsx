import { EditAndPaperIcon } from "../../../assets/svg";
import TextWithIcon from "../styledTexts/TextWithIcon";

const EditButton = ({
  text,
  handleEdit,
  image,
}: {
  text: string;
  handleEdit?: () => void;
  image?: string;
}) => {
  return (
    <TextWithIcon
      text={text}
      image={image ? image : EditAndPaperIcon}
      width={4}
      height={4}
      onClick={handleEdit}
      textClass="text-sm"
    />
  );
};

export default EditButton;
