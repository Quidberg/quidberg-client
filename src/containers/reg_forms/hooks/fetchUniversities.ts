import { useEffect } from "react";
import { universitiesData } from "../../../utils/dummyData";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/regHook";
import {
  selectUniversitiesData,
  setUniversitiesData,
} from "../../../app/slices/oracleRegistration/registrationSlice";

export const fetchUniversities = () => {
  const universitiesDataStore = useAppSelector(selectUniversitiesData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!universitiesDataStore) dispatch(setUniversitiesData(universitiesData));
  });
  return { universitiesDataStore };
};
