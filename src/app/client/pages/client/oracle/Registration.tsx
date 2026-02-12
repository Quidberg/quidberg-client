import SchoolRegistration from "../../../containers/reg_forms/SchoolReg/SchoolRegistrationStep";
import { RegistrationStepsEnum } from "../../../../../shared/utils/enums/RegistrationEnum";
import RegistrationSummary from "../../../containers/reg_forms/Summary/RegistrationSummaryStep";
import { RegistrationStepType } from "../../../../../shared/types/RegistrationDataTypes";
import { useAppSelector } from "../../../store/hooks/regHook";
import Crumbs from "../../../../../shared/comps/ui/steps/Crumbs";
import BackButton from "../../../../../shared/comps/ui/buttons/BackButton";
import useNavRegPage from "../../../../../shared/hooks/navRegPage";
import { selectRegStep } from "../../../store/slices/oracleRegistration/registrationSlice";
import { ExaminationSelectionForm } from "../../../containers/reg_forms/ExaminationReg";
import { oracleRegistrationSteps } from "../../../../../shared/data/regData";

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
    <main className="flex flex-col w-full items-center relative flex-1">
      <section className=" flex flex-col gap-4 w-full items-center flex-1 bg relative">
        <nav className=" sticky top-0 flex items-center py-6 w-full h-[30px] md:gap-4 xl:gap-6 backdrop-blur-md bg-light_pry_bg/30">
          {Boolean(currentRegStep) && (
            <BackButton
              className="w-10 h-10"
              handleBackNav={handleBackStep}
            />
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
