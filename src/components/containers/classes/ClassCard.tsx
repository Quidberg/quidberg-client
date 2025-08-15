import FolderIcon from "../../../assets/comps/FolderIcon";
import VideoIcon from "../../../assets/comps/VideoIcon";
import WriteFeatherIcon from "../../../assets/comps/WriteFeatherIcon";
import { LearningType } from "../../../shared/types/ComponentTypes";

type ClassCardPropType = {
  sections: string | number;
  type: LearningType;
  rating: number;
  title: string;
  handleAdd: () => void;
  handleCardClick: (id: string, type: LearningType) => void;
  id: string;
};

const ClassCard = ({
  id,
  sections,
  type,
  rating,
  title,
  handleAdd,
  handleCardClick,
}: ClassCardPropType) => {
  const handleAddAction = () => {
    handleAdd();
  };

  return (
    <div
      className="cursor-pointer flex flex-col w-full aspect-[1/1.2] border-main_bg  rounded-border_radius"
      onClick={() => handleCardClick(id, type)}
    >
      {/* PICTURE ON CARD */}
      <section className="relative w-full flex-1 border border-b-0 rounded-t-md">
        <div className="absolute top-1 left-1 bg-slate-500/10 p-1 rounded-md">
          <SelectLearningIcon learningType={type} />
        </div>
      </section>

      <section className="w-full h-[40%] flex flex-col justify-between border p-2 md:p-3">
        <div className="flex flex-col justify-between h-full">
          {/* TYPE and RATING */}
          <div className="flex justify-between text-sm text-light_font">
            <p>{type}</p>
            <p>{`${rating} ratings`}</p>
          </div>

          {/* TITLE */}
          <p className="text-18 font-semibold">{title}</p>
          <div></div>
        </div>
        {/* <div className="flex justify-between">
          <p>{`${sections} sections`}</p>
          <button
            onClick={
              handleAddAction
            }
          >{`Add`}</button>
        </div> */}
      </section>
    </div>
  );
};

export default ClassCard;

interface Props {
  learningType: "classes" | "tutorials" | "solutions";
}
const SelectLearningIcon = ({ learningType }: Props) => {
  switch (learningType) {
    case "classes":
      return <FolderIcon />;
      break;
    case "tutorials":
      return <VideoIcon />;
      break;
    case "solutions":
      return <WriteFeatherIcon />;
      break;
    default:
      return <VideoIcon />;
      break;
  }
};
