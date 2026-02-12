import RightArrow from "../../../../assets/comps/RightArrow";
import FormCard from "../../../../shared/comps/ui/cards/FormCard";
import { capitalize } from "../../../../shared/utils/utilFunction";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import { AppRoutes } from "../../../../routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import FolderIcon from "../../../../assets/comps/FolderIcon";
import WriteFeatherIcon from "../../../../assets/comps/WriteFeatherIcon";
import VideoIcon from "../../../../assets/comps/VideoIcon";
import { cn } from "../../../../shared/utils";
import BrowseAll from "./BrowseAll";

type ExploreClassesPropType = {
  popularSubjects: { name: string; id: string }[];
  type: string;
};

const exploreLearningTypes = [
  {
    name: "Explore Classes",
    link: AppRoutes.classesAndResources.classes,
    icon: FolderIcon,
    color: "#845763",
  },
  {
    name: "Explore Tutorials",
    link: AppRoutes.classesAndResources.tutorials,
    icon: VideoIcon,
    color: "#ffb343",
  },
  {
    name: "Explore Solutions",
    link: AppRoutes.classesAndResources.solutions,
    icon: WriteFeatherIcon,
    color: "#245f73",
  },
  {
    name: "Explore Examinations",
    link: AppRoutes.examinationSimulator.index,
    icon: WriteFeatherIcon,
    color: "#FC8EAC",
  },
];

const ExploreClasses = ({
  popularSubjects,
  type,
}: ExploreClassesPropType) => {
  const navigate = useNavigate();
  const navToClass = (id: string) => {
    navigate(`${AppRoutes.classesAndResources.classes}/${id}`);
  };
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-lg md:text-xl xl:text-4xl">
          Explore Our Catalog
        </h1>
        <p className="text-main_bg">{`/ ${type.toUpperCase()}`}</p>
      </div>

      <div className="flex gap-3  w-full justify-center">
        {exploreLearningTypes.map(
          ({ name, link, icon: Icon, color }) => (
            <Button
              className={cn(
                "bg-main_bg text-white font-semibold flex gap-2 hover:bg-main_bg/60 py-2 h-auto"
              )}
              style={{ backgroundColor: color ? color : "" }}
              variant={"comic"}
              onClick={() => navigate(link)}
              key={link}
            >
              <Icon />
              <p>{name}</p>
            </Button>
          )
        )}
      </div>
      {/* BROWSE ALL */}
      <section className="w-full ">
        <BrowseAll />
      </section>

      <section className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="md:text-lg">Classes</p>
          <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-main_bg">
            <p>View all Classes</p>
            <div className="w-3 aspect-square flex items-center">
              <RightArrow color={"#1DA1F2"} />
            </div>
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularSubjects.map((sub) => (
            <Button
              variant={"plain"}
              className="h-auto text-start"
              onClick={() => navToClass(sub.id)}
            >
              <FormCard
                key={sub?.id}
                className="flex flex-col justify-between sm:w-[10rem] xl:w-[15rem] aspect-[2.3]"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-sm truncate ellipsis">
                    {type.toUpperCase()}
                  </p>
                  <p className="text-light_font/90 text-lg font-semibold line-clamp-1">
                    {capitalize(sub?.name)}
                  </p>
                </div>
              </FormCard>
            </Button>
          ))}
        </div>

        <button className="text-sm px-2 py-1 sm:hidden border-[1.5px] border-main_bg/60 text-main_bg">
          View All Subjects
        </button>
      </section>
    </div>
  );
};

export default ExploreClasses;
