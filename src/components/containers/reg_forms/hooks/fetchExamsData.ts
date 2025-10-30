// import { useCallback, useEffect, useState } from "react";
import {
  examinations,
  universityAndFacultyData,
} from "../../../../utils/dummyData";
import { ExaminationType } from "../../../../app/slices/oracleRegistration/types";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/hooks/regHook";
import {
  // selectCourseData,
  selectExaminations,
  setExaminationTaken,
} from "../../../../app/slices/oracleRegistration/registrationSlice";
// import { BasicValueType } from "../../../../shared/types/FieldTypes";

type ParamTypes = {
  exams: ExaminationType[];
};

const getExamsData = (
  examsId: Array<{ id: string }>
  // subjectsAccepted: BasicValueType[]
) => {
  const exams: ExaminationType[] = [];
  const subjectsAccepted: { name: string; id: string }[] =
    universityAndFacultyData["unilageng"]["subjectsAccepted"];

  examsId.forEach(({ id }) => {
    const exam = examinations?.find((e) => e?.id === id);
    if (exam) exams.push(exam);
  });
  return exams.map((exam) => ({
    ...exam,
    subjects: subjectsAccepted,
    subjectsAndGrades: subjectsAccepted?.map((subj) => ({
      grade: { value: "", id: "" },
      subject: { value: subj?.name, id: subj?.id },
    })),
  }));
};

export const useFetchExamsData = () => {
  const examinationTaken = useAppSelector(selectExaminations) || [];
  // const subjectsAccepted =
  //   useAppSelector(selectCourseData)?.subjectsAccepted || [];
  const dispatch = useAppDispatch();

  const handleFetchExamsData = ({ exams }: ParamTypes) => {
    const examsId = exams.map((exam) => ({ id: exam.id })); //returns only the exams id to be fetched
    const examsData = getExamsData(examsId);
    console.log(examsData);
    dispatch(setExaminationTaken(examsData));
  };

  return { handleFetchExamsData, examsData: examinationTaken };
};
