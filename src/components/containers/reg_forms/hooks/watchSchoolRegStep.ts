import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../app/hooks/regHook";
import {
  selectCourseData,
  selectUniversityData,
} from "../../../../app/slices/oracleRegistration/registrationSlice";
import { ExaminationType } from "../../../../app/slices/oracleRegistration/types";

const watchSchoolRegStep = (examData: Array<ExaminationType> | null) => {
  const universityData = useAppSelector(selectUniversityData);
  const courseData = useAppSelector(selectCourseData);
  const [isSchoolDataUpdated, setIsSchoolDataUpdated] = useState(false);

  const setSchoolUpdateFalse = () => {
    setIsSchoolDataUpdated(false);
  };

  useEffect(() => {
    if (!Boolean(examData?.length)) return;
    console.log(examData);
    setIsSchoolDataUpdated(true);
  }, [courseData, universityData]);

  return { isSchoolDataUpdated, setIsSchoolDataUpdated, setSchoolUpdateFalse };
};

export default watchSchoolRegStep;
