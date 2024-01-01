import TitleWithSub from "../../../components/styledTexts/TitleWithSub";
import TextCheckBox from "../../../components/checkBox/TextCheckBox";
import { ExaminationCheckListType } from "../../../shared/types/RegistrationDataTypes";
import CancelButton from "../../../components/buttons/CancelButton";
import RoundedButton from "../../../components/buttons/RoundedButton";
import {
  ExaminationType,
  SelectedUniversityType,
} from "../../../app/slices/oracleRegistration/types";

const ExaminationCheckList = ({
  examinationList,
  handleClose,
  onCheck,
  onApply,
  isExamListEmpty,
  selectedExams,
  selectedUniversity,
}: {
  examinationList: ExaminationCheckListType[];
  handleClose: () => void;
  onCheck: (exam: ExaminationType) => void;
  onApply: () => void;
  isExamListEmpty: boolean;
  selectedExams: ExaminationType[];
  selectedUniversity: SelectedUniversityType | null;
}) => {
  const handleCheck = (exam: ExaminationType) => {
    onCheck(exam);
  };
  return (
    <div className="relative flex flex-col items-center px-4 md:px-8 pt-10 md:pt-20 pb-6 rounded-border_radius">
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <CancelButton onClick={handleClose} className={"w-4 h-4"} />
      </div>
      <div className="mb-3">
        <TitleWithSub
          title="Accepted Examinations In University Of Lagos"
          subtitle="Examinations displayed are based on the University You selected "
        />
      </div>
      <section className="flex flex-col gap-6 ml-2 sm:ml-[3%]">
        {!examinationList.length && !selectedExams.length && (
          <p className="text-center">No Examination available to select from</p>
        )}

        {!examinationList.some((exam) => !exam.isAlreadySelected) && (
          <p className="text-center text-yellow-400 font-light">{`You have selected all Examinations available in ${selectedUniversity?.name}, Please close the modal`}</p>
        )}

        <div className="flex flex-col ml-[3%] gap-4 w-full">
          {examinationList?.map((exam) => (
            <TextCheckBox
              key={exam?.name}
              isChecked={exam?.isChecked}
              text={exam?.name}
              onClick={() => {
                handleCheck(exam);
              }}
              isInActive={exam?.isAlreadySelected}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center mt-20 w-full">
        {isExamListEmpty && (
          <p className="text-warning_red text-sm">
            Please selected an Examination
          </p>
        )}

        <div className="flex flex-col-reverse w-full sm:w-fit sm:flex-row gap-4">
          <RoundedButton isOutlined onClick={handleClose} className="w-full">
            Cancel
          </RoundedButton>
          <RoundedButton onClick={onApply} className="w-full">Apply</RoundedButton>
        </div>
      </section>
    </div>
  );
};

export default ExaminationCheckList;
