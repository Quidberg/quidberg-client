import SchoolRegistration from "../../containers/reg_forms/SchoolReg/SchoolRegistrationStep";
import { RegistrationStepsEnum } from "../../utils/enums/RegistrationEnum";
import RegistrationSummary from "../../containers/reg_forms/Summary/RegistrationSummaryStep";
import { RegistrationStepType } from "../../shared/types/RegistrationDataTypes";
import { useAppSelector } from "../../app/hooks/regHook";
import Crumbs from "../../components/steps/Crumbs";
import BackButton from "../../components/buttons/BackButton";
import useNavRegPage from "../../shared/hooks/navRegPage";
import { selectRegStep } from "../../app/slices/oracleRegistration/registrationSlice";
import { ExaminationSelectionForm } from "../../containers/reg_forms/ExaminationReg";
import { oracleRegistrationSteps } from "../../shared/data/regData";

const Registration = () => {
  // const dispatch = useAppDispatch();
  const { handleBackStep, handleCrumbStep } = useNavRegPage();
  const currentRegStep = useAppSelector(selectRegStep);

  const registrationScreens: RegistrationStepType[] = [
    {
      step: RegistrationStepsEnum.UniversitySelectStep,
      component: <SchoolRegistration />,
    },
    {
      step: RegistrationStepsEnum.ExaminationSelectStep,
      component: <ExaminationSelectionForm />,
    },
    {
      step: RegistrationStepsEnum.SummaryStep,
      component: <RegistrationSummary />,
    },
  ];

  return (
    <main className="flex flex-col w-full items-center ">
      <section className=" flex flex-col gap-4 w-full justify-center items-center ">
        <nav className="relative flex items-center py-6 w-full h-[30px] md:gap-4 xl:gap-6">
          {Boolean(currentRegStep) && (
            <BackButton className="w-10 h-10" handleBackNav={handleBackStep} />
          )}
          <div className="absolute md:relative top-[50%] left-[50%] md:top-[0%] md:left-[0%] -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">
            <Crumbs
              max={3}
              currentPosition={currentRegStep}
              crumbList={oracleRegistrationSteps}
              handleCrumbStep={handleCrumbStep}
            />
          </div>
        </nav>
        <section className="px-3 w-full flex justify-center">
          {/* FORMS AND LIST GOES HERE */}
          {registrationScreens[currentRegStep].component}
        </section>
        <section></section>
      </section>
    </main>
  );
};

export default Registration;
