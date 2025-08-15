import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CourseOfChoiceType,
  CourseType,
  ExamTakenType,
  ExaminationType,
  InitialRegStepStateType,
  JambScoreType,
  RegFormValues,
  SchoolOfChoiceType,
  SubjectAndGrade,
  SubjectTakenPayloadType,
} from "./types";
import { RootStateType } from "../../store";

const initialRegStepState: InitialRegStepStateType = {
  position: 0,
  universityData: null,
  universitiesData: null,
  courseData: null,
  examinations: [],
  isRegSubmitted: false,
  formValues: {
    examinationTaken: [],
    university: null,
    course: null,
    jambScore: null,
  },
};

export const regStepSlice = createSlice({
  name: "registration-step",
  initialState: initialRegStepState,
  reducers: {
    setRegStep: (state, action: PayloadAction<number>) => {
      state.position = action.payload;
    },

    setExaminations: (state, action: PayloadAction<ExaminationType[]>) => {
      const newExaminations = action.payload;
      const prevExaminations = state.examinations;

      state.examinations = prevExaminations
        ? [...newExaminations, ...prevExaminations]
        : [];
    },

    setExaminationTaken: (state, action: PayloadAction<ExamTakenType[]>) => {
      state.formValues.examinationTaken = action.payload;
    },

    setUniversityData: (
      state,
      action: PayloadAction<InitialRegStepStateType["universityData"]>
    ) => {
      state.universityData = action.payload;
    },

    setUniversitiesData: (
      state,
      action: PayloadAction<InitialRegStepStateType["universitiesData"]>
    ) => {
      state.universitiesData = action.payload;
    },

    setCourseData: (state, action: PayloadAction<CourseType>) => {
      state.courseData = action.payload;
    },

    setSubjectsAndGrades: (
      state,
      action: PayloadAction<SubjectTakenPayloadType>
    ) => {
      const examinations = state.formValues.examinationTaken;
      const { subjectId, value, type, examId } = action?.payload ?? null;

      const newExamTaken = examinations?.map((exam) => {
        if (exam?.id === examId) {
          return {
            ...exam,

            subjectsAndGrades: exam?.subjectsAndGrades?.map(
              (subjectAndGrade) => {
                if (subjectAndGrade?.subject?.id === subjectId) {
                  return {
                    ...subjectAndGrade,
                    [type as keyof SubjectAndGrade]: {
                      value: value?.name,
                      id: value?.id,
                    },
                  };
                }
                return subjectAndGrade;
              }
            ),
          };
        }
        return exam;
      });
      state.formValues.examinationTaken = newExamTaken ? newExamTaken : [];
    },

    removeExaminationTaken: (state, action: PayloadAction<string>) => {
      const id: string = action.payload;
      console.log(id);
      const examList = state.formValues.examinationTaken;
      if (!examList) return;
      const newExaminationTakenList = examList?.filter(
        (exam) => exam?.id !== id
      );
      state.formValues.examinationTaken = newExaminationTakenList;
    },

    setFormValues: (state, action: PayloadAction<RegFormValues>) => {
      state.formValues = { ...state.formValues, ...action.payload };
    },

    setSchoolOfChoice: (state, action: PayloadAction<SchoolOfChoiceType>) => {
      state.formValues.university = action.payload;
    },
    setCourseOfChoice: (state, action: PayloadAction<CourseOfChoiceType>) => {
      state.formValues.course = action.payload;
    },
    setJambScore: (state, action: PayloadAction<JambScoreType>) => {
      if (!action.payload) return;
      state.formValues.jambScore = action.payload;
    },

    setIsRegSubmitted: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) return;
      state.isRegSubmitted = action.payload;
    },
  },
});

export const {
  setRegStep,
  setExaminationTaken,
  setExaminations,
  removeExaminationTaken,
  setFormValues,
  setSubjectsAndGrades,
  setUniversitiesData,
  setUniversityData,
  setCourseData,
  setIsRegSubmitted,
} = regStepSlice.actions;

export const selectRegStep = (state: RootStateType) => state.regStep.position;
export const selectExaminations = (state: RootStateType) =>
  state.regStep.examinations;
export const selectExaminationTaken = (state: RootStateType) =>
  state.regStep.formValues.examinationTaken;
export const selectFormValues = (state: RootStateType) =>
  state.regStep.formValues;
export const selectUniversitiesData = (state: RootStateType) =>
  state.regStep.universitiesData;
export const selectUniversityData = (state: RootStateType) =>
  state.regStep.universityData;
export const selectCourseData = (state: RootStateType) =>
  state.regStep.courseData;
export const selectIsRegSubmitted = (state: RootStateType) =>
  state.regStep.isRegSubmitted;

export default regStepSlice.reducer;
