import {
  useAppDispatch,
  useAppSelector,
} from "../../app/hooks/regHook";
import {
  selectRegStep,
  setRegStep,
} from "../../app/slices/oracleRegistration/registrationSlice";

const useNavRegPage = () => {
  const dispatch = useAppDispatch();
  const currentRegStep = useAppSelector(selectRegStep);

  const handleNextStep = () => {
    dispatch(setRegStep(currentRegStep + 1));
  };

  const handleBackStep = () => {
    if (currentRegStep) dispatch(setRegStep(currentRegStep - 1));
  };

  const handleCrumbStep = (position: number) => {
    if (currentRegStep === position) return;
    dispatch(setRegStep(position));
  };
  return {
    handleNextStep,
    handleBackStep,
    handleCrumbStep,
  };
};

export default useNavRegPage;
