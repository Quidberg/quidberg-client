import { Link, useNavigate } from "react-router-dom";
import { cn } from "../../../utils";
import { useState } from "react";
import SelectExamMode from "./SelectExamMode";
import { Modal } from "../../../components/ui/modal";
import { useDisclosure } from "../../../components/ui/modal/useDisclosure";
import * as _ from "lodash";
import SearchField from "../../../components/ui/fields/SearchField";

const examLinks = [
  { name: "JAMB Practice", id: "2020", exam: "jamb" },
  { name: "WAEC Practice", id: "2020", exam: "waec" },
  { name: "NECO Practice", id: "2020", exam: "neco" },
  { name: "GSCE Practice", id: "2020", exam: "gsce" },
  { name: "SAT Practice", id: "2020", exam: "sat" },
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

        <main className="flex flex-col gap-3 mt-3 md:mt-6 items-center w-full">
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[1200px]">
            {examLinks.map(({ name, id, exam }) => (
              <ExamTabs
                title={name}
                id={id}
                exam={exam}
                key={id}
                handleExamTab={handleExamModeModal}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

type Props = {
  title: string;
  bgColor?: string;
  id: string;
  exam: string;
  handleExamTab: (id: string, exam: string) => void;
};

const ExamTabs = ({
  title,
  bgColor,
  id,
  handleExamTab,
  exam,
}: Props) => {
  return (
    <button
      onClick={() => handleExamTab(id, exam)}
      className={cn(
        "flex flex-col justify-start flex-1 relative group w-full aspect-square rounded-xl border-main_bg/20 border p-1 sm:p-2",
        bgColor ? `bg-${bgColor}/20` : "bg-main_bg/5"
      )}
    >
      <p>{title}</p>

      <div className="absolute hidden group-hover:flex z-[2] top-[50%] left-[50%] -translate-x-[50%] bg-main_bg/80 backdrop-blur-md text-white text-sm font-semibold  px-3 py-1">
        <p>Start Exam</p>
      </div>
    </button>
  );
};

export default ExaminationSimulator;
