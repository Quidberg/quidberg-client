import { useState } from "react";
import { ExaminationType } from "../../../app/slices/oracleRegistration/types";

const genSubAndGrade = (arr: any) => {
  return [
    ...Array.from({ length: arr?.length }, (_, i) => {
      return {
        grade: { value: "", id: `${i}` },
        subject: { value: "", id: `subject ${i}` },
      };
    }),
  ];
};

const useAddExam = () => {
  const [examTakenList, setExamTakenList] = useState<ExaminationType[]>([]);
  const handleAddCheck: (param: ExaminationType) => void = (
    examSelected: ExaminationType
  ) => {
    const isExamSelected = examTakenList.findIndex(
      (examTaken) => examTaken?.id === examSelected?.id
    );
    isExamSelected !== -1
      ? setExamTakenList(
          examTakenList.filter((exam) => exam?.id !== examSelected?.id)
        )
      : setExamTakenList([
          ...examTakenList,
          {
            ...examSelected,
            subjectsAndGrades: genSubAndGrade(examSelected?.subjects),
          },
        ]);
  };

  // useEffect(()=>{

  // },[])
  return {
    handleAddCheck,
    examTakenList,
    setExamTakenList,
  };
};

export default useAddExam;
