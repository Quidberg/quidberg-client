import TitleWithSub from "../../../ui/styledTexts/TitleWithSub";
import { useAppSelector } from "../../../../app/hooks/regHook";
import {
  selectExaminations,
  selectFormValues,
  setIsRegSubmitted,
} from "../../../../app/slices/oracleRegistration/registrationSlice";
import ExaminationEntryForm from "../ExaminationReg/ExaminationEntryForm";
import RoundedButton from "../../../ui/buttons/RoundedButton";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../../routes/AppRoutes";
import { Edit } from "../../../../assets/svg";
import SchoolSummary from "./SchoolSummary";
import useNavRegPage from "../../../../shared/hooks/navRegPage";
import { ExaminationType } from "../../../../app/slices/oracleRegistration/types";
import { useDispatch } from "react-redux";

const RegistrationSummary = () => {
  const examinationTaken = useAppSelector(selectExaminations);
  const formValues = useAppSelector(selectFormValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleBackStep, handleCrumbStep } = useNavRegPage();

  const handleSubmit = () => {
    // some ASYN POST op
    navigate(AppRoutes.statistics.analysis, { replace: true });

    // temp auth
    dispatch(setIsRegSubmitted(true));
  };

  const handleEditExam = () => {
    handleCrumbStep(1);
  };

  const handleSchoolEdit = () => {
    handleCrumbStep(0);
  };
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <TitleWithSub
        title="SUMMARY"
        subtitle="Please review your entries before submitting"
      />

      {/* EXAMINATION FORMS */}
      <section className="w-full max-w-[500px] flex flex-col gap-4">
        <SchoolSummary
          courseSelected={formValues?.course?.name}
          universitySelected={formValues?.university?.name}
          jambScore={formValues.jambScore?.value}
          handleSchoolEdit={handleSchoolEdit}
        />

        {examinationTaken?.map((exam: ExaminationType) => (
          <ExaminationEntryForm
            key={exam?.name}
            title={exam?.name}
            subtitle="Please fill in the field appropriately"
            isReviewed
            id={exam?.id}
            total={examinationTaken?.length > 4 ? examinationTaken?.length : 4}
            handleEntryFormEdit={handleEditExam}
            examData={exam}
            validate
            editImage={Edit}
            editText="Edit"
            isSummaryType
          />
        ))}
      </section>
      <section className="flex gap-6">
        <RoundedButton onClick={handleBackStep} isOutlined>
          Go Back
        </RoundedButton>
        <RoundedButton onClick={handleSubmit}>Done</RoundedButton>
      </section>
    </div>
  );
};

export default RegistrationSummary;
