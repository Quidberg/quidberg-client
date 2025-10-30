import SearchField from "../../ui/fields/SearchField";
import ExploreClasses from "./ExploreClasses";
// import BrowseAll from "./BrowseAll";
import { useNavigate } from "react-router-dom";
import RightArrow from "../../../assets/comps/RightArrow";
import { Button } from "../../ui/buttons/Button";
import { dummyClassList } from "./BrowseAll";
import ClassCard from "./ClassCard";
import { LearningType } from "../../../shared/types/ComponentTypes";
import { AppRoutes } from "../../../routes/AppRoutes";

export const dummyPopularSubjects = [
  { name: "Mathematics", id: " mathematics" },
  { name: "Chemistry", id: "chemistry" },
  { name: "Biology", id: "biology" },
  { name: "English", id: "english" },
];

const ClassesContainer = () => {
  const handleSearchClasses = () => {
    ("");
  };
  const navigate = useNavigate();

  const handleClassCardClick = (id: string, type: LearningType) => {
    console.log("clicked card");
    navigate(`${AppRoutes.classesAndResources[type]}/` + id);
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* SEARCH */}
      <section className="w-full flex justify-center">
        <div className="max-w-[800px] w-full">
          <SearchField
            placeholder="Find Classes and Tutorials"
            handleSubmit={handleSearchClasses}
            isColored
          />
        </div>
      </section>

      {/* EXPLORE */}
      <section className="w-full max-w-[95%] xl:max-w-[85%] ">
        <ExploreClasses popularSubjects={dummyPopularSubjects} />
      </section>

      <section className="w-full max-w-[95%] xl:max-w-[85%] ">
        <CategoryContainer
          category={dummyPopularSubjects}
          title={"Classes"}
          handleClassCardClick={handleClassCardClick}
        />
      </section>
      <section className="w-full max-w-[95%] xl:max-w-[85%] ">
        <CategoryContainer
          category={dummyPopularSubjects}
          title={"Tutorials"}
          handleClassCardClick={handleClassCardClick}
        />
      </section>
      <section className="w-full max-w-[95%] xl:max-w-[85%] ">
        <CategoryContainer
          category={dummyPopularSubjects}
          title={"Solutions"}
          handleClassCardClick={handleClassCardClick}
        />
      </section>
    </div>
  );
};

export default ClassesContainer;

type CategoryContainerProps = {
  category: { name: string; id: string }[];
  title: string;
  handleClassCardClick: (id: string, type: LearningType) => void;
};

const CategoryContainer = ({
  title,
  handleClassCardClick,
}: CategoryContainerProps) => {
  return (
    <section className=" flex flex-col gap-3">
      <div className="flex justify-between">
        <p className=" text-main_bg">{`Recommended ${title}`}</p>
        <button className="flex items-center gap-2 text-xs sm:text-sm md:text-base ">
          <p>{`View all ${title}`}</p>
          <div className="w-3 aspect-square flex items-center">
            <RightArrow color={"#000000"} />
          </div>
        </button>
      </div>

      <div className="w-full grid grid-cols-2 sm:flex gap-4 overflow-x-scroll">
        {dummyClassList.map((classObj) => (
          <ClassCard
            title={classObj?.title}
            sections={classObj?.sections}
            type={classObj?.type}
            rating={classObj?.rating}
            // handleAdd={handleAddClass}
            handleCardClick={handleClassCardClick}
            key={classObj.id}
            id={classObj.id}
          />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <Button
          variant={"outline"}
          className="text-sm px-3 py-1 w-full sm:max-w-fit border-[1.5px] border-main_bg/60 text-main_bg"
        >
          {`View All ${title}`}
        </Button>
      </div>
    </section>
  );
};
