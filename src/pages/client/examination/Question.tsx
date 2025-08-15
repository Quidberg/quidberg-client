import { memo } from "react";
import { Button } from "../../../components/ui/buttons/Button";
import { cn } from "../../../utils";
import { SavedExamType } from "./StartExam";
import CloseIcon from "../../../assets/comps/CloseIcon";

export interface QuestionsCompProps {
  questionNumber: number;
  question: { text: string; img?: string };
  options: Array<{ id: string; option: string }>;
  pick: string | null;
  handleOptionSelect: ({
    optionId,
    questionId,
  }: {
    optionId: string;
    questionId: string;
  }) => void;
  questionId: string;
  answered: SavedExamType["answered"];
  answers: SavedExamType["answers"];
  examEnded: boolean;
}

const Question = memo(
  ({
    questionNumber,
    pick,
    options,
    question,
    handleOptionSelect,
    questionId,
    answered,
    answers,
    examEnded,
  }: QuestionsCompProps) => {
    const handleOptionSelectWrapper = (optionId: string) => {
      handleOptionSelect({ optionId, questionId });
    };
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-1">
          <h2 className="font-semibold">{`${questionNumber}.) `}</h2>
          <div>
            <p>{question?.text}</p>
          </div>
        </div>
        <div>
          {
            <Options
              options={options}
              pick={pick}
              handleOptionSelect={handleOptionSelectWrapper}
              answers={answers}
              answered={answered}
              examEnded={examEnded}
              questionId={questionId}
            />
          }
        </div>
      </div>
    );
  }
);

export default Question;

type OptionsProps = Omit<
  QuestionsCompProps,
  "question" | "questionNumber" | "handleOptionSelect"
> & {
  handleOptionSelect: (optionId: string) => void;
};
// {
//   options: Array<{ id: string; option: string }>;
//   pick: string | null;
//
//   answered: SavedExamType['answered']
//   answers: SavedExamType['answers']
// };
const Options = ({
  options,
  pick,
  handleOptionSelect,
  examEnded,
  answers,
  answered,
  questionId,
}: OptionsProps) => {
  const alphab = ["a", "b", "c", "d", "e", "f", "g"];
  // console.log(pick);
  return (
    <div className="flex flex-col gap-2 items-start">
      {options.map((option, i) => {
        const correctOption = answers[questionId];
        const isOptionCorrect = option.id === answers[questionId];
        const isWrongPick =
          pick !== correctOption && pick === option.id;
        return (
          <div className="flex items-center gap-1 flex-1">
            <Button
              key={option.id}
              variant={"plain"}
              className={cn(
                `flex items-start flex-1 gap-2 disabled:opacity-90 py-1 h-fit`,
                examEnded && isOptionCorrect && "bg-green-400/40",
                examEnded && isWrongPick && "bg-red-500/50"
              )}
              onClick={() => {
                // handle option selection logic here
                handleOptionSelect(option.id);
              }}
              disabled={examEnded} // disable if already picked
              data-testid={`option-${option.id}`}
              data-option-id={option.id}
              data-option-value={option.option}
              data-option-index={i}
              data-pick={pick}
              data-question-id={option.id} // assuming option.id is the question id
              data-question-number={i + 1} // assuming i is the question number
              data-option-alphabet={alphab[i] || ""} // assigning alphabet to each option
            >
              <div
                className={cn(
                  `flex items-center justify-center rounded-sm w-4 aspect-square  border-2 border-light_nav_bg`,
                  pick === option.id && " p-[0.8px]"
                )}
              >
                {pick === option.id && (
                  <div className="w-full h-full bg-light_font/80 rounded-sm"></div>
                )}
              </div>
              <div className="flex items-start gap-1">
                <p className="capitalize font-semibold ">{`${alphab[i]}.`}</p>
                <p className="w-full">{option.option}</p>
              </div>
            </Button>

            {isWrongPick && examEnded && (
              <div className="w-4 h-4">
                <CloseIcon color="#ef4444" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
