import { useCallback } from "react";
import { LinkIcon } from "../../../../assets/svg";
import { Activities } from "../../../../utils/enums/shared";
import TutorIcon from "../../../../assets/comps/TutorIcon";
import ExamIcon from "../../../../assets/comps/ExamIcon";
import NewsIcon from "../../../../assets/comps/NewsIcon";
import StatIcon from "../../../../assets/comps/StatIcon";

type ActivityLinkPropType = {
  link: string;
  type: string;
};

const ActivityLink = ({ link, type }: ActivityLinkPropType) => {
  const chooseIcon = useCallback(() => {
    switch (type.toLowerCase()) {
      case Activities.Classes:
        return <TutorIcon />;
      case Activities.Exam:
        return <ExamIcon />;
      case Activities.News:
        return <NewsIcon />;
      case Activities.Oracle:
        return <StatIcon />;
      default:
        return null;
    }
  }, [type]);
  return (
    <button className="flex gap-3 text-sm font-light">
      <div className="h-6 aspect-square">{chooseIcon()}</div>
      <div className="flex gap-2 truncate text-ellipsis">
        <p className="text-main_bg underline">{link}</p>
        <div className="flex flex-1 ">
          <img src={LinkIcon} />
        </div>
      </div>
    </button>
  );
};

export default ActivityLink;
