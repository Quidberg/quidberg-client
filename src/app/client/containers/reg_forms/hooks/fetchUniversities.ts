import { useEffect } from "react";
import { universitiesData } from "../../../../../shared/utils/dummyData";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks/regHook";
import {
  selectUniversitiesData,
  setUniversitiesData,
} from "../../../store/slices/oracleRegistration/registrationSlice";

export const useFetchUniversities = () => {
  const universitiesDataStore = useAppSelector(
    selectUniversitiesData
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!universitiesDataStore)
      dispatch(setUniversitiesData(universitiesData));
  });
  return { universitiesDataStore };
};
