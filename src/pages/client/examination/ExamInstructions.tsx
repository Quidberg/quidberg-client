import {
  useLocation,
  useNavigate,
  useParams,
  // useSearchParams,
} from "react-router-dom";
import { Button } from "../../../components/ui/buttons/Button";
import { useEffect, useState } from "react";
import { SavedExam, SavedExamType } from "./StartExam";
import { AppRoutes } from "../../../routes/AppRoutes";
import { ExamState } from "../../../utils/enums/exam-simulator";

const initialExamData: SavedExam = {
  totalQuestions: 0,
  currentQuestion: 1,
  questions: [],
  answers: {},
  answered: {}, // {quetionId, answer}
  startTime: null,
  expiryTimeStamp: null,
  duration: 10, // in minutes
  examState: ExamState.notStarted,
};

const ExamInstructions = () => {
  const navigate = useNavigate();
  const [
    ,
    // currentQuestion
    setCurrentQuestion,
  ] = useState<number>(1);
  const location = useLocation();
  // const params = useSearchParams();
  const { id, exam } = useParams();
  const baseRoute = `${AppRoutes.examinationSimulator.index}/${
    exam ? exam : "custom-exam"
  }/${id ? id : "0"}/start`;

  const handleStartExam = () => {
    console.log("start exam");

    navigate(`${baseRoute}${location.search}`);
  };

  useEffect(() => {
    // check if any exam currently running on local machine
    // const searchParamString = location.search;

    if (exam) {
      const examData: SavedExam | null = JSON.parse(
        localStorage.getItem(exam) as unknown as string
      ) as SavedExam;
      if (!examData) return;
      setCurrentQuestion(examData?.currentQuestion ?? 1);
    }
  }, [setCurrentQuestion, exam]);

  useEffect(() => {
    const examData: SavedExamType = {
      ...initialExamData,
      totalQuestions: 5,
      answers: {
        sfuiu: "pofd",
        wirpw: "xvzx",
        jrjr: "kikitr",
        jrwrtjr: "uytiyu",
        jgegrjr: "uytuhjgj",
      },
      questions: [
        {
          id: "sfuiu",
          question: {
            text: "Who is/are the founder(s) of Quidberg?",
          },
          options: [
            { id: "gkld", option: "Mr Praise" },
            { id: "dafe", option: "Dr Tope" },
            { id: "pofd", option: "A and B" },
            { id: "cali", option: "Lebron James" },
            { id: "boli", option: "Inspector Tinubu" },
          ],
        },
        {
          id: "wirpw",
          question: { text: "Will QB be a success?" },
          options: [
            { id: "wrwr", option: "100%" },
            { id: "gwbwr", option: "Absolutely" },
            { id: "yrjr", option: "No Question" },
            { id: "ukly", option: "Never in Doubt" },
            { id: "xvzx", option: "All of the above" },
          ],
        },
        {
          id: "jrjr",
          question: { text: "What type of tech is QB" },
          options: [
            { id: "uytu", option: "Fintech" },
            { id: "gwbtkwr", option: "Sales-tech" },
            { id: "yrjhkr", option: "Fashion-tech" },
            { id: "kikitr", option: "Edutech" },
            { id: "xvzvkx", option: "Ajo site" },
          ],
        },
        {
          id: "jgegrjr",
          question: { text: "When do we plan to launch" },
          options: [
            { id: "uytuhjgj", option: "2025" },
            { id: "gwbtjgjkwr", option: "2026" },
            { id: "kiktuitr", option: "in 10 years" },
            { id: "xvzvktyix", option: "Never" },
          ],
        },
        {
          id: "jrwrtjr",
          question: { text: "Who is QB biggest backer and investor" },
          options: [
            { id: "uytiyu", option: "Jehovah" },
            { id: "gwzccbtkwr", option: "Tinubu" },
            { id: "yrjhkjgjr", option: "Daphne Koller" },
            { id: "kiiykitr", option: "Adewale Yusuf" },
            { id: "xvzvkzdx", option: "Small Doctor" },
          ],
        },
      ],
    };

    localStorage.setItem(exam as string, JSON.stringify(examData));
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1000px]">
        <header className="mb-5">
          <h2 className="font-semibold text-lg">
            Examination Instructions and Guidelines
          </h2>
        </header>
        <div className="w-full ">
          <div className="w-full flex flex-col gap-2">
            <p>
              <span className="font-medium">{"Duration: "}</span>
              {`2hr 30mins`}
            </p>
            <Button onClick={handleStartExam} className="w-fit">
              Start Exam
            </Button>
          </div>
          <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl text-gray-800">
            {/* <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
              📘 Examination Instructions
            </h1> */}

            <section className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                🕒 Duration
              </h2>
              <p>
                <strong>2 hours 30 minutes</strong> (150 minutes)
              </p>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                📚 Subjects Covered
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>English Language</strong> – 40 marks
                </li>
                <li>
                  <strong>
                    Mathematics & Quantitative Reasoning
                  </strong>{" "}
                  – 40 marks
                </li>
                <li>
                  <strong>General Knowledge & Current Affairs</strong>{" "}
                  – 20 marks
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                📝 General Guidelines
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  This test contains{" "}
                  <strong>100 multiple-choice questions</strong>.
                </li>
                <li>
                  Each question carries <strong>1 mark</strong>.
                </li>
                <li>
                  <strong>No negative marking</strong> — attempt all
                  questions.
                </li>
                <li>
                  Use only a <strong>blue or black pen</strong> for
                  paper-based tests.
                </li>
                <li>
                  <strong>No electronic devices</strong> (phones,
                  calculators, smartwatches) allowed.
                </li>
                <li>
                  <strong>
                    Submit all answers before time is up.
                  </strong>{" "}
                  No extra time will be granted.
                </li>
                <li>
                  <strong>Silence must be maintained</strong>.
                  Misconduct leads to disqualification.
                </li>
                <li>
                  Raise your hand for assistance; do not leave your
                  seat without permission.
                </li>
                <li>
                  <strong>Use the restroom before the exam</strong>.
                  No breaks during the test.
                </li>
              </ul>
            </section>

            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 rounded-md mt-6">
              <p>
                <strong>Important:</strong> Double-check your{" "}
                <em>name, registration number</em>, and{" "}
                <em>test center</em> details. Review your answers if
                you finish early.
              </p>
            </div>

            <p className="mt-6 text-center font-semibold">
              Best of luck! 🍀 Stay calm, focused, and manage your
              time wisely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
