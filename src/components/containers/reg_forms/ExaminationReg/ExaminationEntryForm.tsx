import { memo } from "react";
import FormCard from "../../../ui/cards/FormCard";
import ExaminationEntryField, {
  ExamListPayloadType,
} from "./ExaminationEntryField";
import TitleWithSub from "../../../ui/styledTexts/TitleWithSub";
import { ExaminationType } from "../../../../app/slices/oracleRegistration/types";
import { useAppDispatch } from "../../../../app/hooks/regHook";
import { setSubjectsAndGrades } from "../../../../app/slices/oracleRegistration/registrationSlice";
import EditButton from "../../../ui/buttons/EditButton";

export type ExaminationEntryFormType = {
  title: string;
  subtitle: string;
  total: number;
  isReviewed?: boolean;
  id: string;
  examData: ExaminationType;
  handleEntryFormEdit?: (id: string) => void;
  validate: boolean;
  editText: string;
  editImage: string;
  isSummaryType?: boolean;
};

const ExaminationEntryForm = memo(
  ({
    title,
    subtitle,
    isReviewed,
    id,
    handleEntryFormEdit,
    examData,
    validate,
    editText,
    editImage,
    isSummaryType,
  }: ExaminationEntryFormType) => {
    const dispatch = useAppDispatch();

    const handleEntryForm = () => {
      if (!handleEntryFormEdit) return;
      handleEntryFormEdit(id);
    };

    const handleExamEntryField = ({
      type,
      value,
      subjectId,
    }: ExamListPayloadType) => {
      dispatch(setSubjectsAndGrades({ examId: id, type, value, subjectId }));
    };

    // useEffect(() => {}, [examData]);

    return (
      <FormCard
        className="p-0 sm:p-2 md:p-4 flex flex-col gap-3"
        isLocked={isReviewed}
      >
        <div className="w-full flex justify-end -mt-3 ">
          <EditButton
            handleEdit={handleEntryForm}
            text={editText}
            image={editImage}
          />
        </div>
        <TitleWithSub title={title} subtitle={subtitle} />
        <div className="flex flex-col gap-y-4 md:gap-y-6">
          {examData?.subjectsAndGrades?.map((subAndGrade) => {
            const subjectId = subAndGrade?.subject?.id;
            const error = () => {
              if (validate && !subAndGrade?.grade?.value)
                return [{ type: "", message: "Empty" }];
              else return null;
            };
            return (
              <ExaminationEntryField
                key={subjectId}
                subjectPlaceholder={`Subject`}
                gradePlaceholder={`Grade`}
                subject={subAndGrade?.subject?.value}
                grade={subAndGrade?.grade?.value}
                gradesList={examData?.grades}
                subjectsList={examData?.subjects}
                handleExamEntryField={handleExamEntryField}
                subjectId={subjectId}
                examId={id}
                error={error()}
                isSummaryType={isSummaryType}
              />
            );
          })}
        </div>
      </FormCard>
    );
  }
);

export default ExaminationEntryForm;
