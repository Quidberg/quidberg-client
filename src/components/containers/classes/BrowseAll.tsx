import { useState } from "react";
// import { TabsType } from "../../ui/steps/Tabs";
// import RightArrow from "../../../assets/comps/RightArrow";
import ClassCard from "./ClassCard";
import { AppRoutes } from "../../../routes/AppRoutes";
import { LearningType } from "../../../shared/types/ComponentTypes";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/buttons/Button";

// const tabsList = [
//   {
//     id: "all",
//     title: "All",
//     isActive: true,
//   },
//   {
//     id: "classes",
//     title: "Classes",
//     isActive: false,
//   },
//   {
//     id: "tutorials",
//     title: "Tutorials",
//     isActive: false,
//   },
//   {
//     id: "solutions",
//     title: "Solutions",
//     isActive: false,
//   },
// ];

export const dummyClassList: Array<{
  sections: string | number;
  type: LearningType;
  rating: number;
  title: string;
  id: string;
}> = [
  {
    sections: 2,
    type: "classes",
    rating: 5,
    title: "SS2 Mathematics",
    id: "flakd",
  },
  {
    sections: 2,
    type: "solutions",
    rating: 5,
    title: "SS2 English",
    id: "aljkfn",
  },
  {
    sections: 2,
    type: "tutorials",
    rating: 5,
    title: "SS2 Mathematics",
    id: "niadpiof",
  },
  {
    sections: 2,
    type: "tutorials",
    rating: 5,
    title: "SS2 Mathematics",
    id: "ajflp",
  },
];

const BrowseAll = () => {
  // const [tabsState, setTabsState] = useState(tabsList);
  const [
    classInProgess,
    // setClassInProgress
  ] = useState([]);
  const navigate = useNavigate();

  // const handleClickTab = (id: string) => {
  //   setTabsState(
  //     tabsState.map((tab: TabsType) => {
  //       return tab.id == id
  //         ? {
  //             ...tab,
  //             isActive: true,
  //           }
  //         : {
  //             ...tab,
  //             isActive: false,
  //           };
  //     })
  //   );
  // };

  const handleClassCardClick = (id: string, type: LearningType) => {
    console.log("clicked card");
    navigate(`${AppRoutes.classesAndResources[type]}/` + id);
  };

  // const handleAddClass = () => {};

  return (
    <div className="flex flex-col gap-3">
      <header>
        <h2 className="text-lg font-semibold opacity-80">
          {classInProgess ? "Resume Learning" : "Start Learning"}
        </h2>
        <p className="text-light_font">
          Continue from where you stopped
        </p>
      </header>

      {/* <button className="flex items-center justify-center gap-2 w-fit text-main_bg first-letter:text-lg">
        <p>Browse All</p>
        <div className="w-4 aspect-square flex items-center">
          <RightArrow color={"#1DA1F2"} />
        </div>
      </button> */}
      <section className="w-full flex flex-col items-center">
        {/* TABS */}
        {/* <div className=" mb-4 xl:mb-8">
          <Tabs
            tabsList={tabsState}
            handleClickTab={handleClickTab}
          />
        </div> */}
        <div className="w-full h-fit grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7 p-3">
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

        <Button
          variant={"outline"}
          className="text-sm px-3 py-1 w-full sm:max-w-fit border-[1.5px] border-main_bg/60 text-main_bg"
        >
          {`View History`}
        </Button>
      </section>
    </div>
  );
};

export default BrowseAll;
