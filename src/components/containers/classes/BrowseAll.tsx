import { useState } from "react";
import Tabs, { TabsType } from "../../ui/steps/Tabs";
import RightArrow from "../../../assets/comps/RightArrow";
import ClassCard from "./ClassCard";

const tabsList = [
  { id: "classes", title: "Classes", isActive: true },
  { id: "tutorials", title: "Tutorials", isActive: false },
  { id: "solutions", title: "Solutions", isActive: false },
];

const dummyClassList = [
  {
    sections: 2,
    type: "class",
    rating: 5,
    title: "SS2 Mathematics",
    id: "flakd",
  },
  {
    sections: 2,
    type: "class",
    rating: 5,
    title: "SS2 Mathematics",
    id: "aljkfn",
  },
  {
    sections: 2,
    type: "class",
    rating: 5,
    title: "SS2 Mathematics",
    id: "niadpiof",
  },
  {
    sections: 2,
    type: "class",
    rating: 5,
    title: "SS2 Mathematics",
    id: "ajflp",
  },
];

const BrowseAll = () => {
  const [tabsState, setTabsState] = useState(tabsList);

  const handleClickTab = (id: string) => {
    setTabsState(
      tabsState.map((tab: TabsType) => {
        return tab.id == id
          ? { ...tab, isActive: true }
          : { ...tab, isActive: false };
      })
    );
  };

  const handleClassCardClick = () => {};

  const handleAddClass = () => {};

  return (
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-center gap-2 w-fit text-main_bg first-letter:text-lg">
        <p>Browse All</p>
        <div className="w-4 aspect-square flex items-center">
          <RightArrow color={"#1DA1F2"} />
        </div>
      </button>
      <section>
        {/* TABS */}
        <div className=" mb-4 xl:mb-8">
          <Tabs tabsList={tabsState} handleClickTab={handleClickTab} />
        </div>
        <div className="h-fit grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 p-3">
          {dummyClassList.map((classObj) => (
            <ClassCard
              title={classObj?.title}
              sections={classObj?.sections}
              type={classObj?.type}
              rating={classObj?.rating}
              handleAdd={handleAddClass}
              handleCardClick={handleClassCardClick}
              key={classObj?.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowseAll;
