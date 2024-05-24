// import { useCallback, useEffect, useState } from "react";
import { examinations } from "../../../utils/dummyData";
import { ExaminationType } from "../../../app/slices/oracleRegistration/types";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/regHook";
import {
  selectCourseData,
  selectExaminations,
  setExaminations,
} from "../../../app/slices/oracleRegistration/registrationSlice";
import { BasicValueType } from "../../../shared/types/FieldTypes";

type ParamTypes = {
  exams: ExaminationType[];
};

const getExamsData = (
  examsId: Array<{ id: string }>,
  subjectsAccepted: BasicValueType[]
) => {
  const exams: ExaminationType[] = [];
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

export const fetchExamsData = () => {
  const examinationTaken = useAppSelector(selectExaminations) || [];
  const subjectsAccepted =
    useAppSelector(selectCourseData)?.subjectsAccepted || [];
  const dispatch = useAppDispatch();

  const handleFetchExamsData = ({ exams }: ParamTypes) => {
    const examsId = exams.map((exam) => ({ id: exam.id }));
    const examsData = getExamsData(examsId, subjectsAccepted);

    dispatch(setExaminations(examsData));
  };

  return { handleFetchExamsData, examsData: examinationTaken };
};
