import { useNavigate } from "react-router-dom";
import { LearningType } from "../../../../../../shared/types/ComponentTypes";
import { AppRoutes } from "../../../../../../routes/AppRoutes";
import SearchField from "../../../../../../shared/comps/ui/fields/SearchField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../shared/comps/ui/input/select";
import { Button } from "../../../../../../shared/comps/ui/buttons/Button";
import { CaretRight } from "@phosphor-icons/react";
import FormCard from "../../../../../../shared/comps/ui/cards/FormCard";
import { capitalize } from "../../../../../../shared/utils/utilFunction";
import ClassCard from "../../../../containers/classes/ClassCard";
import { dummyClassList } from "../../../../containers/classes/BrowseAll";

export const dummyPopularTutorials = [
  { name: "WAEC ", id: " WAEC " },
  { name: "NECO ", id: "NECO " },
  { name: "GSCE ", id: "GSCE " },
  { name: "JAMB ", id: "JAMB " },
];

const ExploreTutorialsPage = () => {
  const handleSearchClasses = () => {
    ("");
  };
  const navigate = useNavigate();
  const handleClassCardClick = (id: string, type: LearningType) => {
    console.log("clicked card");
    navigate(`${AppRoutes.classesAndResources[type]}/` + id);
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <section className="w-full flex justify-center ">
        <div className="max-w-[800px] w-full">
          <SearchField
            placeholder="Find by Classes by Grade, Level, Subject, or Tutor"
            handleSubmit={handleSearchClasses}
            isColored
          />
        </div>
      </section>
      {/* EXPLORE */}
      <section className="w-full flex flex-col gap-4 md:gap-6">
        <h1 className="font-semibold text-lg md:text-xl xl:text-4xl">
          Explore Our Tutorials
        </h1>

        <div className="flex gap-2 items-center">
          <p className="text-main_bg/80">Filter classes by:</p>
          <div className="flex gap-4 items-center ">
            <div className="flex gap-2 items-center ">
              <p className="text-sm opacity-75">Department</p>
              <Select
                value={""}
                onValueChange={() => {
                  ("");
                }}
              >
                <SelectTrigger className={"max-w-[400px] flex-1"}>
                  <SelectValue placeholder={"Select Department"} />
                </SelectTrigger>
                <SelectContent className="bg-light_pry_bg">
                  <SelectItem value="grade7">JS 1</SelectItem>
                  <SelectItem value="grade8">JS 2</SelectItem>
                  <SelectItem value="grade0">JS 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 items-center ">
              <p className="text-sm opacity-75">Grade | Level</p>
              <Select
                value={""}
                onValueChange={() => {
                  ("");
                }}
              >
                <SelectTrigger className={"max-w-[400px] flex-1"}>
                  <SelectValue
                    placeholder={"Select Grade or level"}
                  />
                </SelectTrigger>
                <SelectContent className="bg-light_pry_bg">
                  <SelectItem value="grade7">JS 1</SelectItem>
                  <SelectItem value="grade8">JS 2</SelectItem>
                  <SelectItem value="grade0">JS 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-sm opacity-75">Subject | Course</p>
              <Select
                value={""}
                onValueChange={() => {
                  ("");
                }}
              >
                <SelectTrigger className={"max-w-[400px] flex-1"}>
                  <SelectValue
                    placeholder={"Select Grade or level"}
                  />
                </SelectTrigger>
                <SelectContent className="bg-light_pry_bg">
                  <SelectItem value="grade7">Mathematics</SelectItem>
                  <SelectItem value="grade8">CHM 103</SelectItem>
                  <SelectItem value="grade0">PHS 101</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <section className=" flex flex-col gap-3 ">
          <div className="flex items-center gap-1">
            <p className="md:text-lg">Popular Categories</p>

            <Button
              className="text-main_bg hover:underline"
              variant={"plain"}
            >
              <p>View all categories</p>
              <CaretRight />
            </Button>
          </div>

          <div className="w-full grid grid-cols-2 sm:flex gap-4 overflow-x-scroll ">
            {dummyPopularTutorials.map((sub) => (
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
      </section>

      <section>
        <div className="flex items-center gap-1">
          <p className="md:text-lg">Recommended Solutions</p>
          <Button
            className="text-main_bg hover:underline "
            variant={"plain"}
          >
            <p>View all solutions</p>
            <CaretRight />
          </Button>
        </div>
        <div className="h-fit grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7 p-3">
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
      </section>
    </div>
  );
};
export default ExploreTutorialsPage;
