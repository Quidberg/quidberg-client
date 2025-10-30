import {
  memo,
  // useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useExamTimer } from "../../../utils/timer";
import { Button } from "../../../components/ui/buttons/Button";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { cn, toTimeString } from "../../../utils";
import { toInteger } from "lodash";
import Question, { QuestionsCompProps } from "./Question";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import {
  ExamState,
  // QuestionState,
} from "../../../utils/enums/exam-simulator";
import { Modal } from "../../../components/ui/modal";
import TimeOutIcon from "../../../assets/comps/TimeOutIcon";
import { useDisclosure } from "../../../components/ui/modal/useDisclosure";
import { AppRoutes } from "../../../routes/AppRoutes";
import WarningDialog from "../../../components/containers/dialog/WarningDialog";

export interface SavedExamType {
  totalQuestions: number;
  currentQuestion: number;
  questions: {
    id: string;
    question: { text: string; img?: string };
    options: { id: string; option: string }[];
  }[];
  answers: { [key: string]: string };
  answered: { [key: string]: string }; // {quetionId, answer}
  startTime: number | null;
  expiryTimeStamp: Date | null;
  duration: number; // in minutes
  examState:
    | ExamState.finished
    | ExamState.started
    | ExamState.notStarted;
}

export type SavedExam = SavedExamType | null;

const StartExam = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id: examId, exam: examType } = useParams();
  const navigate = useNavigate();

  const {
    close: closeTimeOutDialog,
    open: openTimeOutDialog,
    isOpen: isTimeUpDialogOpened,
  } = useDisclosure();
  const {
    close: closeExitExamDialog,
    open: openExitExamDialog,
    isOpen: isExitExamDialogOpened,
  } = useDisclosure();
  const {
    close: closeSubmitExamDialog,
    open: openSubmitExamDialog,
    isOpen: isSubmitExamDialogOpened,
  } = useDisclosure();

  const [
    ,
    // scoreRevealed
    setScoreRevealed,
  ] = useState(false);

  const currentQuestion =
    toInteger(searchParams.get("question")) || 1;
  const [examData, setExamData] = useState<SavedExamType | null>(
    null
  );
  const answered = useMemo(() => {
    return examData?.answered ?? {};
  }, [examData?.answered]); // user answers
  const answers = useMemo(() => {
    return examData?.answers ?? {};
  }, [examData?.answers]); // correct answers

  const handleTimerExpired = () => {
    if (!examData) return;
    setExamData({ ...examData, examState: ExamState.finished });
    openTimeOutDialog();
    console.warn("Exam time expired");
    // handle exam time expired logic here, e.g., show modal or redirect
  };

  const calculateScore = useMemo(() => {
    const totalQuestions = examData?.totalQuestions || 0;
    const correctAnswers = Object.keys(answered).filter(
      (ans) => answered[ans] === answers[ans]
    ).length;
    return {
      correctAnswers,
      percentage: ((correctAnswers / totalQuestions) * 100).toFixed(
        0
      ),
    };
  }, [answered, answers, examData?.totalQuestions]);

  const { seconds, minutes, hours, totalMilliseconds } = useExamTimer(
    {
      duration: examData?.duration ?? 2,
      examId: examType ?? "custom-exam",
      loading: false,
      onExpire: handleTimerExpired,
    }
  );

  const handleOptionSelect: QuestionsCompProps["handleOptionSelect"] =
    ({ optionId, questionId }) => {
      if (!examData) return;
      const newAnswered = { ...answered, [questionId]: optionId };
      const newExamData = {
        ...examData,
        answered: newAnswered,
        currentQuestion: currentQuestion,
      };

      // update the answered state
      setExamData(newExamData);

      // const parsedExamData: SavedExamType = JSON.parse(
      //   examData as unknown as string
      // ) as SavedExamType;

      // // save to local storage
      // const currentExam: SavedExamType = {
      //   ...parsedExamData,
      //   currentQuestion: currentQuestion,
      //   answered: newAnswered,
      // };

      localStorage.setItem(
        examType ?? "custom-exam",
        JSON.stringify(newExamData)
      );

      // console.log(newAnswered);
    };

  useEffect(() => {
    // fetch exam data
    const examData = JSON.parse(
      localStorage.getItem(examType as string) as string
    ) as unknown as SavedExamType;
    setExamData(examData);
  }, [examType]);

  useEffect(() => {
    console.log(examType);
    const currentQuestion = localStorage.getItem(
      examType ?? "custom-exam"
    );
    if (!currentQuestion) return;
    const examData: SavedExamType = JSON.parse(
      currentQuestion
    ) as SavedExamType;
    setSearchParams(
      { question: `${examData?.currentQuestion}` },
      { replace: true }
    );
  }, [examType]);

  const navToQuestion = (q: number) => {
    setSearchParams({ question: `${q}` }, { replace: true });
    console.log("clicked number tab", q);
  };

  const handleSubmitExam = () => {
    // end exam timer
    // show toast
  };

  const handleExitExam = () => {
    // clear exam
    // navigate to exam simulator page
  };

  if (!examData) return;

  return (
    <div className="w-full flex justify-center">
      <Modal
        close={closeTimeOutDialog}
        isOpen={isTimeUpDialogOpened}
        // shouldPreventUserFromClosing
      >
        <div className=" flex flex-col gap-3 items-center p-4">
          <TimeOutIcon className="w-16 h-16" />
          <h2 className="font-semibold text-xl">Time is up!</h2>

          <section className="flex flex-col items-center gap-4">
            <Button
              onClick={() => {
                setScoreRevealed(true);
              }}
              className="bg-main_font/60 text-white w-fit font-semibold"
            >
              Reveal Score
            </Button>

            <div className="flex flex-col items-center ">
              <p className="font-semibold text-xl text-main_bg">
                {calculateScore.percentage}%
              </p>
              <p className="max-w-[500px] text-center">
                {`You got `}{" "}
                <span className="font-semibold ">
                  {calculateScore.correctAnswers}
                </span>
                {` out of `}{" "}
                <span className="font-semibold">
                  {examData?.totalQuestions}{" "}
                </span>
                {` correctly, performing better than 90% of students that took
                the mock`}
              </p>
            </div>
          </section>

          <div className="flex w-full justify-end gap-2 mt-5">
            <Button
              className="bg-main_font/60"
              onClick={() =>
                navigate(
                  `${AppRoutes.examinationSimulator.index}/${
                    examType ?? "custom-exam"
                  }/${examId ?? "0"}/instructions`
                )
              }
            >
              Retake
            </Button>
            <Button
              onClick={() => {
                closeTimeOutDialog();
              }}
              className="border rounded-md border-main_font/50"
              variant={"plain"}
            >
              Show Answers
            </Button>
          </div>
        </div>
      </Modal>

      <WarningDialog
        close={closeExitExamDialog}
        isOpen={isExitExamDialogOpened}
        title={"You are about to exit this exam"}
        description={"You will lose all answered entries"}
        handleAction={handleExitExam}
        actionText={"End Exam"}
      />

      <WarningDialog
        close={closeSubmitExamDialog}
        isOpen={isSubmitExamDialogOpened}
        title={"You are about to submit this exam"}
        description={
          "Please go through your answers before you submit"
        }
        handleAction={handleSubmitExam}
        actionText={"Submit Exam"}
      />

      <div className="w-full max-w-[1000px]">
        <header
          className={
            "flex justify-between border-b border-light_nav_bg pb-2 mb-5"
          }
        >
          <div className="flex gap-2 sm:gap-4">
            {currentQuestion > 1 && (
              <Button
                className="font-semibold gap-2 bg-main_font hover:bg-main_font/70"
                onClick={() => {
                  navToQuestion(currentQuestion - 1);
                }}
              >
                <ArrowLeft />
                <p>Previous</p>
              </Button>
            )}
            {currentQuestion < examData["totalQuestions"] && (
              <Button
                className="font-semibold gap-2"
                onClick={() => {
                  navToQuestion(currentQuestion + 1);
                }}
              >
                <p>Next</p>
                <ArrowRight />
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-light_font">
              Time Remaining{" "}
            </p>
            <p
              className={cn(
                `text-base`,
                totalMilliseconds &&
                  totalMilliseconds < 1 * 60 * 1000 &&
                  "text-red-600"
              )}
            >{`${hours} : ${toTimeString(minutes)} : ${toTimeString(
              seconds
            )}`}</p>
          </div>
        </header>
        <section>
          <Question
            question={
              examData.questions[
                currentQuestion ? currentQuestion - 1 : 0
              ]?.question
            }
            questionNumber={currentQuestion}
            options={
              examData.questions[
                currentQuestion ? currentQuestion - 1 : 0
              ]?.options
            }
            pick={
              (answered[
                examData.questions[
                  currentQuestion ? currentQuestion - 1 : 0
                ]?.id
              ] as unknown as string) ?? null
            }
            key={
              examData.questions[
                currentQuestion ? currentQuestion - 1 : 0
              ]?.id
            }
            questionId={
              examData.questions[
                currentQuestion ? currentQuestion - 1 : 0
              ]?.id
            }
            handleOptionSelect={handleOptionSelect}
            answered={examData.answered}
            answers={examData.answers}
            examEnded={examData.examState === ExamState.finished}
          />
        </section>

        <section>
          <div className="flex justify-between items-center mt-5">
            <p className="text-light_font">
              {`Question ${currentQuestion} of ${examData.totalQuestions}`}
            </p>

            {examData?.examState !== ExamState.finished && (
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    openExitExamDialog();
                    // openTimeOutDialog();
                  }}
                  className="bg-red-500 text-white font-semibold"
                >
                  End Exam
                </Button>

                <Button
                  onClick={() => {
                    openSubmitExamDialog();
                  }}
                  className="bg-main_bg/80 text-white font-semibold"
                >
                  Submit Exam
                </Button>
              </div>
            )}

            {examData?.examState === ExamState.finished && (
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    navigate(
                      `${AppRoutes.examinationSimulator.index}`,
                      { replace: true }
                    );
                  }}
                  className="bg-main_font/80 text-white font-semibold"
                >
                  <p>Select Another Exam</p>
                </Button>

                <Button
                  onClick={() => {
                    navigate(
                      `${AppRoutes.examinationSimulator.index}/${
                        examType ?? "custom-exam"
                      }/${examId ?? ""}/instructions`,
                      { replace: true }
                    );
                  }}
                  className="bg-main_bg/80 text-white font-semibold"
                >
                  Retake Exam
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="mt-6 md:mt-10">
          <QuestionNumbers
            totalNumbers={examData.totalQuestions}
            currentQuestion={toInteger(currentQuestion)}
            answers={examData.answers}
            navToQuestion={navToQuestion}
            answered={examData.answered}
            examEnded={examData.examState === ExamState.finished}
            questions={examData.questions}
          />
        </section>
      </div>
    </div>
  );
});

export default StartExam;

type QuestionNumbersProps = {
  totalNumbers: number;
  currentQuestion: number;
  // answers: Array<{ id: string }>;
  navToQuestion: (q: number) => void;
  answers: SavedExamType["answers"];
  answered: SavedExamType["answered"];
  examEnded: boolean;
  questions: SavedExamType["questions"];
};
const QuestionNumbers = memo(
  ({
    totalNumbers,
    currentQuestion,
    navToQuestion,
    answers,
    answered,
    examEnded,
    questions,
  }: QuestionNumbersProps) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: totalNumbers }, (_, i) => i + 1).map(
          (num, i) => {
            const qId = questions[i].id;
            const pick = answered[qId];
            const isCorrect = answers[qId] === pick && pick;
            return (
              <Button
                className={cn(
                  `p-1 aspect-square`,
                  examEnded
                    ? isCorrect
                      ? "bg-green-400/40"
                      : "bg-red-500/50"
                    : pick
                    ? "bg-main_bg/30"
                    : "bg-none border border-light_font",
                  currentQuestion === num &&
                    "border-2 border-gray-900/60"
                )}
                key={num}
                onClick={() => navToQuestion(num)}
                variant={"plain"}
              >
                {num}
              </Button>
            );
          }
        )}
      </div>
    );
  }
);
