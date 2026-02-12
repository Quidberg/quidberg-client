import { BasicValueType } from "../../../../../shared/types/FieldTypes";
import { DropListType } from "../../../../../shared/types/RegistrationDataTypes";

export interface BasicDataType {
  value: string;
  id: string;
}

export interface SubjectAndGrade {
  grade: BasicDataType;
  subject: BasicDataType;
}

export interface ExaminationType {
  name: string;
  title?: string;
  id: string;
  score?: number | null;
  subjects?: BasicValueType[];
  grades?: BasicValueType[];
  subjectsAndGrades?: Array<SubjectAndGrade>;
}

export interface ExamTakenType {
  name: string;
  id: string;
  subjectsAndGrades?: Array<SubjectAndGrade>;
  title?: string;
}

export interface SubjectTakenPayloadType {
  subjectId?: string;
  value: DropListType;
  type: "subject" | "grade";
  examId: string;
}

export type SchoolOfChoiceType = {
  name: string;
  id: string;
} | null;

export type CourseOfChoiceType = {
  name: string;
  id: string;
} | null;

export interface JambScoreType {
  value: number;
  id?: string;
}

export type CourseType = {
  name: string;
  id: string;
  subjectsAccepted: { name: string; id: string }[];
} | null;

export type CoursesType =
  | {
      name: string;
      id: string;
    }[]
  | null;

export type GradesType =
  | {
      name: string;
      id: string;
    }[]
  | null;

export interface RegFormValues {
  examinationTaken: Array<ExamTakenType> | null;
  university: SchoolOfChoiceType | null;
  course: CourseOfChoiceType;
  jambScore: JambScoreType | null;
}

export interface SelectedUniversityType {
  name: string;
  id: string;
  courses: {
    name: string;
    id: string;
    subjectsAccepted: { name: string; id: string }[];
  }[];
  grades: { name: string; id: string }[];
  applicableExaminations: {
    name: string;
    id: string;
    title?: string;
  }[];
}

export interface InitialRegStepStateType {
  position: number;
  formValues: RegFormValues;
  examinations: Array<ExaminationType> | null;
  universityData: SelectedUniversityType | null;
  universitiesData: { name: string; id: string }[] | null;
  courseData: CourseType;
  isRegSubmitted: boolean;
}

export interface SchoolRegFormType {
  university: {
    name: string;
    id: string;
  } | null;
  course: {
    name: string;
    id: string;
  } | null;
  jambScore: {
    value: number;
    id: string;
  } | null;
}

export interface FormErrorType {
  type: string;
  message: string;
}

export type SchoolRegFormErrors = {
  [index: string]: Array<FormErrorType> | null;
  // university: Array<FormErrorType> | null;
  // course: Array<FormErrorType> | null;
  // jambScore: Array<FormErrorType> | null;
};
