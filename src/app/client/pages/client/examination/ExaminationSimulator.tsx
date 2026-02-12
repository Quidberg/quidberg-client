// import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../../../../shared/utils";
import { useState } from "react";
import SelectExamMode from "./SelectExamMode";
import { Modal } from "../../../../../shared/comps/ui/modal";
import { useDisclosure } from "../../../../../shared/comps/ui/modal/useDisclosure";
import * as _ from "lodash";
import SearchField from "../../../../../shared/comps/ui/fields/SearchField";

// const examLinks = [
//   { name: "JAMB Practice", id: "2020", exam: "jamb" },
//   { name: "WAEC Practice", id: "242s", exam: "waec" },
//   { name: "NECO Practice", id: "20tw20", exam: "neco" },
//   { name: "GSCE Practice", id: "202zc0", exam: "gsce" },
//   { name: "SAT Practice", id: "20ru20", exam: "sat" },
// ];

const examPracticeData = [
  {
    name: "JAMB Practice",
    id: "2020",
    type: "Year",
    score: { bestScore: 80, currentScore: 80 },
    exam: "jamb",
  },
  {
    name: "WAEC Practice",
    id: "001",
    type: "Custom",
    score: null,
    exam: "waec",
  },
  {
    name: "NECO Practice",
    id: "2020",
    type: "Year",
    score: { bestScore: 76, currentScore: 76 },
    exam: "neco",
  },
  {
    name: "GSCE Practice",
    id: "2020",
    type: "Custom",
    score: { bestScore: 76, currentScore: 76 },
    exam: "gsce",
  },
  // {
  //   name: "SAT Practice",
  //   id: "2020",
  //   type: "2020",
  //   score: 76,
  //   exam: "sat",
  // },
];

const defaultSetting = {
  timerEnabled: true,
  // timerVal: string,
  isSolutionsVisible: false,
};

type Setting = null | {
  timerEnabled: boolean;
  isSolutionsVisible: boolean;
};

const ExaminationSimulator = () => {
  // const navigate = useNavigate();
  const [examType, setExamType] = useState<null | string>(null);
  const [id, setId] = useState<string>("");

  const [setting, setSetting] = useState<Setting>(defaultSetting);

  const {
    open: openExamMode,
    close: closeExamMode,
    isOpen: isExamModeOpen,
  } = useDisclosure();

  const toggleTimer = () => {
    if (!setting) return;
    setSetting({ ...setting, timerEnabled: !setting.timerEnabled });
  };

  const handleExamModeModal = (id: string, exam: string) => {
    setExamType(exam);
    setId(id);
    openExamMode();
    console.log(exam);
  };

  const toggleSolutionsVisibility = () => {
    if (!setting) return;
    setSetting({
      ...setting,
      isSolutionsVisible: !setting.isSolutionsVisible,
    });
  };

  const enableDefaultSetting = () => {
    setSetting(defaultSetting);
  };
  const handleSearchClasses = () => {
    ("");
  };
  return (
    <div className="flex-1 flex justify-center">
      <div className="w-full ">
        {examType && (
          <Modal
            isOpen={!!isExamModeOpen}
            close={closeExamMode}
            showCloseButton
          >
            <SelectExamMode
              toggleTimer={toggleTimer}
              examTypePath={examType}
              examId={id}
              isTimerEnabled={setting?.timerEnabled ?? false}
              toggleSolutionsVisibility={toggleSolutionsVisibility}
              isSolutionsVisible={
                setting?.isSolutionsVisible ?? false
              }
              isOnDefaultSetting={_.isEqual(defaultSetting, setting)}
              enableDefaultSetting={enableDefaultSetting}
            />
          </Modal>
        )}
        <header>
          <h2 className="text-lg font-semibold">
            Examination Simulator
          </h2>
          <p className="text-opacity-80 text-light_font max-w-[800px]">
            Practice questions with our simulators for various
            examinations. Each question has been properly curated to
            align with examination patterns
          </p>
          <section className="w-full mt-2 flex justify-center">
            <div className="max-w-[800px] w-full">
              <SearchField
                placeholder="Find Examination to practice with"
                handleSubmit={handleSearchClasses}
                isColored
              />
            </div>
          </section>
        </header>

        <div className="w-full flex justify-between gap-6">
          <main className="flex flex-col gap-6 md:gap-10 mt-3 md:mt-6 items-center w-full">
            <section className="w-full flex flex-col gap-2">
              <p>Recent Exam Practice</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1200px]">
                {examPracticeData.length !== 0 &&
                  examPracticeData.map(
                    ({ name, id, exam, score, type }) => (
                      <ExamCard
                        title={name}
                        id={id}
                        exam={exam}
                        score={score}
                        key={`${id} ${type}`}
                        type={type}
                        handleExamTab={handleExamModeModal}
                      />
                    )
                  )}
              </div>
            </section>
            <section className="w-full flex flex-col gap-2">
              <p>Explore Exam Practice</p>
              <div className="grid grid-cols-3 md:grid-cols-4  gap-4 md:gap-6 w-full max-w-[1200px]">
                {examPracticeData.length !== 0 &&
                  examPracticeData.map(
                    ({ name, id, exam, score, type }) => (
                      <ExamCard
                        title={name}
                        id={id}
                        exam={exam}
                        score={score}
                        key={`${id} ${type}`}
                        type={type}
                        handleExamTab={handleExamModeModal}
                        isCardExplore={true}
                      />
                    )
                  )}
              </div>
            </section>
          </main>
          <aside className="hidden lg:flex border-main_bg/20 border p-1 sm:p-2 lg:w-[300px] xl:w-[350px] 2xl:w-[400px] flex-col gap-4 mt-3 md:mt-6 overflow-scroll">
            <p className="text-center text-light_font">
              Filter Examination
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

type ExamTabsProps = {
  title: string;
  bgColor?: string;
  id: string;
  exam: string;
  score?: { bestScore: number; currentScore: number } | null;
  handleExamTab: (id: string, exam: string) => void;
};

// const ExamTabs = ({
//   title,
//   bgColor,
//   id,
//   handleExamTab,
//   exam,
// }: ExamTabsProps) => {
//   return (
//     <button
//       onClick={() => handleExamTab(id, exam)}
//       className={cn(
//         "flex flex-col justify-start flex-1 relative group w-full aspect-square rounded-xl border-main_bg/20 border p-1 sm:p-2",
//         bgColor ? `bg-${bgColor}/20` : "bg-main_bg/5"
//       )}
//     >
//       <p>{title}</p>

//       <div className="absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] bg-main_bg/80 backdrop-blur-md text-white text-sm font-semibold  px-3 py-1">
//         <p>Select Exam</p>
//         <div>
//           {/* Exam type */}
//           <p>By Ex</p>
//         </div>
//       </div>
//     </button>
//   );
// };

type ExamCardProp = ExamTabsProps & {
  type: string;
  isCardExplore?: boolean;
};

const ExamCard = ({
  title,
  // bgColor,
  id,
  handleExamTab,
  exam,
  score,
  type,
  isCardExplore,
}: ExamCardProp) => {
  return (
    <button
      onClick={() => handleExamTab(id, exam)}
      className={cn(
        "group flex flex-col justify-between items-center flex-1 relative group w-full aspect-square rounded-xl border-main_bg/20 border p-1 sm:p-2 bg-gray-300/5"
      )}
    >
      <div>
        <p className="text-main_font/80 font-semibold">{title}</p>
        <p className="text-sm text-light_font">{`${type} ${id}`}</p>
      </div>

      <section className="flex flex-col gap-1">
        {score ? (
          <>
            <div className="flex gap-2 items-center text-light_font">
              <p>Best Score</p>
              <p className="text-main_font font-medium">
                {score?.bestScore}
              </p>
            </div>

            <div className="flex gap-2 items-center text-light_font">
              <p>Current Score</p>
              <p className="text-main_font font-medium">
                {score?.currentScore}
              </p>
            </div>
          </>
        ) : (
          <p className="text-main_bg font-medium">Not attempted</p>
        )}
      </section>

      <div
        className={cn(
          `gbackdrop-blur-md text-white text-sm font-semibold  px-3 py-2 w-full rounded-b-md`,
          isCardExplore
            ? "bg-main_bg group-hover:bg-main_bg/60"
            : "group-hover:bg-gray-600/60 bg-gray-600/90 "
        )}
      >
        <p>Take Exam</p>
      </div>
    </button>
  );
};

export default ExaminationSimulator;
