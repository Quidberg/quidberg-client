import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/AppRoutes";
import { useMemo } from "react";

import { Button } from "../../../components/ui/buttons/Button";

type SelectExamModeProps = {
  examTypePath: string;
  isTimerEnabled: boolean;
  // timerVal: string;
  isSolutionsVisible: boolean;
  enableDefaultSetting: () => void;
  toggleSolutionsVisibility: () => void;
  toggleTimer: () => void;
  isOnDefaultSetting: boolean;
  examId: string;
};

const SelectExamMode = ({
  examTypePath,
  isTimerEnabled,
  enableDefaultSetting,
  toggleSolutionsVisibility,
  isSolutionsVisible,
  toggleTimer,
  isOnDefaultSetting,
  examId,
}: SelectExamModeProps) => {
  const baseRoute = `${AppRoutes.examinationSimulator.index}/${examTypePath}/${examId}/instructions`;
  const navigate = useNavigate();

  const newRoute = useMemo(() => {
    return `${baseRoute}?timer=${
      isTimerEnabled ? "on" : "off"
    }&solutions=${isSolutionsVisible ? "on" : "off"}`;
  }, [isTimerEnabled, baseRoute, isSolutionsVisible]);

  return (
    <div className="w-full  flex flex-col gap-4 md:gap-5 p-4">
      <header>
        <h1 className="font-semibold text-lg ">Select Exam Mode</h1>
        <p className="text-sm text-opacity-80">
          Choose the mode and settings you want to take the exam in.
        </p>
      </header>

      <section className="flex flex-col gap-3 text-sm [&_h2]:font-semibold [&_h2]:mb-1 ">
        <div className="flex flex-col gap-3 sm:gap-6">
          <Button
            className="flex flex-col items-start gap-1 w-full h-fit py-2 rounded-es-lg sm:rounded-es-xl md:rounded-es-2xl bg-main_font/80 hover:bg-main_font/50"
            onClick={() => {
              navigate(`${baseRoute}?mode=simulation`);
            }}
          >
            <div className="flex gap-1">
              <h2 className="text-lg font-semibold">
                Simulation Mode
              </h2>
              <p className="text-yellow-300 font-semibold">default</p>
            </div>
            <p>
              {
                "Practice with real exam conditions (timer and scoring)"
              }
            </p>
          </Button>

          <Button
            className="flex flex-col items-start gap-1 w-full h-fit py-2 rounded-es-lg sm:rounded-es-xl md:rounded-es-2xl"
            onClick={() => navigate(`${baseRoute}?mode=freestyle`)}
          >
            <h2 className="text-lg font-semibold">Freestyle Mode</h2>
            <p>
              {
                "Take your time on questions without timer for as long as you want."
              }
            </p>
          </Button>
        </div>
        {/* <div className="w-full flex justify-end">
          <Link
            to={newRoute}
            className="px-3 py-1 rounded-md text-white font-semibold bg-main_bg"
          >
            Proceed
          </Link>
        </div>{" "} */}
      </section>
    </div>
  );
};

export default SelectExamMode;
