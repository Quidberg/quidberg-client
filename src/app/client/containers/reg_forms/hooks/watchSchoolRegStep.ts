import { useEffect, useState } from "react";
import {
  selectCourseData,
  selectUniversityData,
} from "../../../store/slices/oracleRegistration/registrationSlice";
import { ExaminationType } from "../../../store/slices/oracleRegistration/types";
import { useAppSelector } from "../../../store/hooks/regHook";

const useWatchSchoolRegStep = (
  examData: Array<ExaminationType> | null
) => {
  const universityData = useAppSelector(selectUniversityData);
  const courseData = useAppSelector(selectCourseData);
  const [isSchoolDataUpdated, setIsSchoolDataUpdated] =
    useState(false);

  const setSchoolUpdateFalse = () => {
    setIsSchoolDataUpdated(false);
  };

  useEffect(() => {
    if (!examData?.length) return;
    console.log(examData);
    setIsSchoolDataUpdated(true);
  }, [courseData, universityData, examData]);

  return {
    isSchoolDataUpdated,
    setIsSchoolDataUpdated,
    setSchoolUpdateFalse,
  };
};

export default useWatchSchoolRegStep;
