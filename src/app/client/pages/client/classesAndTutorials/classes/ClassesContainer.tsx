import SearchField from "../../../../../../shared/comps/ui/fields/SearchField";
import ExploreClasses from "../../../../containers/classes/ExploreClasses";
// import BrowseAll from "./BrowseAll";
import {
  // useNavigate,
  useSearchParams,
} from "react-router-dom";
import RightArrow from "../../../../../../assets/comps/RightArrow";
import { Button } from "../../../../../../shared/comps/ui/buttons/Button";
import { dummyClassList } from "../../../../containers/classes/BrowseAll";
import ClassCard from "../../../../containers/classes/ClassCard";
import { LearningType } from "../../../../../../shared/types/ComponentTypes";
// import { AppRoutes } from "../../../../routes/AppRoutes";
import { Modal } from "../../../../../../shared/comps/ui/modal";
import { useEffect, useState } from "react";
import { useDisclosure } from "../../../../../../shared/comps/ui/modal/useDisclosure";
// import CheckButton from "../../../../components/ui/buttons/CheckButton";
import { Programs } from "../../../../../../shared/data/general";
import { CheckButton } from "../../../../../../shared/comps/ui/checkBox/CheckBox";
import { dummyClasses } from "../../../../../../shared/data/dummy";

const ClassesContainer = () => {
  const [selectedProgram, setSelectedProgram] = useState<
    { name: string; id: string }[]
  >([]);
  const handleSearchClasses = () => {
    ("");
  };
  const {
    isOpen: isSelectedProgramOpen,
    close: closeSelectedProgram,
    // open: openSelectedProgram,
  } = useDisclosure();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // const handleClassCardClick = (id: string, type: LearningType) => {
  //   console.log("clicked card");
  //   navigate(`${AppRoutes.classesAndResources[type]}/` + id);
  // };

  const handleProgramSelect = (program: {
    name: string;
    id: string;
  }) => {
    setSelectedProgram(
      selectedProgram.filter((p) => p.id !== program.id)
    );
  };

  useEffect(() => {
    setSearchParams({ program: "jupeb" });
  }, []);
  // useEffect(() => {
  //   openSelectedProgram();
  // }, []);

  return (
    <div className="w-full flex flex-col gap-10 mt-5 pb-8">
      <Modal
        isOpen={isSelectedProgramOpen}
        close={closeSelectedProgram}
      >
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-lg font-semibold">
            Select Program you are looking for
          </h2>
          <div>
            {Programs.map((program) => (
              <div key={program.id}>
                <CheckButton
                  variant={"plain"}
                  checked={
                    selectedProgram.findIndex(
                      (p) => p.id === program.id
                    ) !== -1
                  }
                  onClick={() => handleProgramSelect(program)}
                >
                  {program.name}
                </CheckButton>
              </div>
            ))}
          </div>
        </div>
      </Modal>
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
        <ExploreClasses
          popularSubjects={dummyClasses}
          type={searchParams.get("program") ?? "all"}
        />
      </section>

      {/* <section className="w-full max-w-[95%] xl:max-w-[85%] ">
        <CategoryContainer
          category={dummyPopularSubjects}
          title={"Classes"}
          handleClassCardClick={handleClassCardClick}
        />
      </section> */}
      {/* <section className="w-full max-w-[95%] xl:max-w-[85%] ">
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
      </section> */}
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
        <p className=" text-main_bg">{`More ${title}`}</p>
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
