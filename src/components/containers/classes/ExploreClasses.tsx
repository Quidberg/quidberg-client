import RightArrow from "../../../assets/comps/RightArrow";
import FormCard from "../../ui/cards/FormCard";
import { capitalize } from "../../../utils/utilFunction";
import { Button } from "../../ui/buttons/Button";
import { AppRoutes } from "../../../routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import FolderIcon from "../../../assets/comps/FolderIcon";
import WriteFeatherIcon from "../../../assets/comps/WriteFeatherIcon";
import VideoIcon from "../../../assets/comps/VideoIcon";
import { cn } from "../../../utils";

type ExploreClassesPropType = {
  popularSubjects: { name: string; id: string }[];
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
}: ExploreClassesPropType) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <h1 className="font-semibold text-lg md:text-xl xl:text-4xl">
        Explore Our Catalog
      </h1>

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

      <section className=" flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="md:text-lg">Popular Categories</p>
          <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-main_bg">
            <p>View all Categories</p>
            <div className="w-3 aspect-square flex items-center">
              <RightArrow color={"#1DA1F2"} />
            </div>
          </button>
        </div>

        <div className="w-full grid grid-cols-2 sm:flex gap-4 overflow-x-scroll">
          {popularSubjects.map((sub) => (
            <FormCard
              key={sub?.id}
              className="flex flex-col justify-between sm:w-[10rem] xl:w-[15rem] aspect-[2.3]"
            >
              <div className="">
                <p className="text-sm truncate ellipsis">
                  {capitalize(sub?.name)}
                </p>
              </div>
            </FormCard>
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
