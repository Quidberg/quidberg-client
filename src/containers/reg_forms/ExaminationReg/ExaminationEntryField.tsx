import { FormErrorType } from "../../../app/slices/oracleRegistration/types";
import FieldWithArrowDown from "../../../components/fields/FieldWithArrowDown";
import { BasicValueType } from "../../../shared/types/FieldTypes";
import { DropListType } from "../../../shared/types/RegistrationDataTypes";

type ExaminationEntryFieldType = {
  subjectPlaceholder: string;
  gradePlaceholder: string;
  subject: string;
  grade: string;
  gradesList?: BasicValueType[];
  subjectsList?: BasicValueType[];
  subjectId: string;
  examId: string;
  handleExamEntryField: ({
    subjectId,
    value,
    type,
  }: ExamListPayloadType) => void;
  error: FormErrorType[] | null;
  isSummaryType?: boolean;
};

export type ExamListPayloadType = {
  subjectId: string;
  value: DropListType;
  type: "subject" | "grade";
};

const ExaminationEntryField = ({
  subjectPlaceholder,
  gradePlaceholder,
  subject,
  grade,
  gradesList,
  subjectId,
  subjectsList,
  handleExamEntryField,
  error,
  isSummaryType,
}: // subjectsList,
// handleExamEntryField
ExaminationEntryFieldType) => {
  const handleListAction = ({
    subjectId,
    value,
    type,
  }: ExamListPayloadType) => {
    handleExamEntryField({ type, value, subjectId });
  };

  return (
    <div className="flex justify-between gap-4 md:gap-8">
      <aside className="flex-1 max-w-[65%]">
        {/* SUBJECT */}
        <FieldWithArrowDown
          dropDownText={subjectPlaceholder}
          placeholder={"Select subject"}
          list={subjectsList}
          handleListClick={({ item, id }) => {
            handleListAction({ subjectId: id, value: item, type: "subject" });
          }}
          id={subjectId}
          value={subject}
          isDropDownLocked
          isIdle={isSummaryType}
        />
      </aside>
      <aside className="w-[28%] min-w-fit max-w-[50px] sm:w-20">
        {/* GRADE */}
        <FieldWithArrowDown
          dropDownText={gradePlaceholder}
          list={gradesList}
          className="w-full"
          handleListClick={({ item, id }) => {
            handleListAction({ subjectId: id, value: item, type: "grade" });
          }}
          id={subjectId}
          value={grade}
          isSearchLocked
          error={error}
          isIdle={isSummaryType}
        />
      </aside>
    </div>
  );
};

export default ExaminationEntryField;
