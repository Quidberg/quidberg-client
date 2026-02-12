import FolderIcon from "../../../../assets/comps/FolderIcon";
import VideoIcon from "../../../../assets/comps/VideoIcon";
import WriteFeatherIcon from "../../../../assets/comps/WriteFeatherIcon";
import { LearningType } from "../../../../shared/types/ComponentTypes";
import { cn } from "../../../../shared/utils";

export type ClassCardPropType = {
  sections: string | number;
  type: LearningType;
  rating: number;
  title: string;
  // handleAdd: () => void;
  handleCardClick: (id: string, type: LearningType) => void;
  id: string;
  variant?: "landscape" | "portrait";
};

const ClassCard = ({
  id,
  // sections,
  type,
  rating,
  title,
  variant,
  // handleAdd,
  handleCardClick,
}: ClassCardPropType) => {
  // const handleAddAction = () => {
  //   handleAdd();
  // };

  return (
    <div
      className={cn(
        "cursor-pointer flex flex-col w-full aspect-[1/1.2] border-main_bg  rounded-border_radius",
        variant === "landscape" &&
          "aspect-auto flex-1 flex-row w-full"
      )}
      onClick={() => handleCardClick(id, type)}
    >
      {/* PICTURE ON CARD */}
      <section
        className={cn(
          "relative w-full flex-1 border border-b-0 rounded-t-md",
          variant === "landscape" && "aspect-square h-full"
        )}
      >
        <div className="absolute top-1 left-1 bg-slate-500/10 p-1 rounded-md">
          <SelectLearningIcon learningType={type} />
        </div>
      </section>

      <section className="w-full h-fit max-h-[70%] flex flex-col justify-between border p-2 md:p-3">
        <div className="flex flex-col justify-between gap-1 h-full flex-1">
          {/* TYPE and RATING */}
          <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-light_font">
            <p>{type}</p>
            <p>{`${rating} ratings`}</p>
          </div>

          {/* TITLE */}
          <p className="text-sm md:text-base font-medium truncate">
            {title}
          </p>
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
