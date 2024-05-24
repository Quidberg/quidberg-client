import { useEffect } from "react";
import { selectedUniversityData } from "../../../utils/dummyData";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/regHook";
import {
  selectUniversityData,
  setUniversityData,
} from "../../../app/slices/oracleRegistration/registrationSlice";

type ParamTypes = {
  universityId: string | null;
};

const getUniversity = (
  id: string | null
  ) => {
    console.log(id)
  // API to fetch university
  const universityData = selectedUniversityData;
  return universityData;
};

export const fetchUniversity = ({ universityId }: ParamTypes) => {
  const universityDataStore = useAppSelector(selectUniversityData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    // Fetch API to get course with ids
    const fetchedUniversityData = getUniversity(universityId);
    dispatch(setUniversityData(fetchedUniversityData));
  }, [universityId]);

  return { universityDataStore };
};
