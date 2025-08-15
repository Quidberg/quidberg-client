import {
  // useCallback,
  useEffect,
} from "react";
import {
  CourseType,
  // CoursesType,
  // GradesType,
} from "../../../../app/slices/oracleRegistration/types";
import {
  // selectCourseData,
  setCourseData,
} from "../../../../app/slices/oracleRegistration/registrationSlice";
import { useAppDispatch } from "../../../../app/hooks/regHook";
import { selectedUniversityData } from "../../../../utils/dummyData";

type ParamTypes = {
  courseId: string;
  universityId: string;
};

const getCourse = (id: string) => {
  const universityData = selectedUniversityData;
  const course: CourseType =
    universityData.courses.find((course) => course.id == id) || null;
  return course;
};

export const useFetchCourse = ({ courseId, universityId }: ParamTypes) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // Fetch API to get course with ids
    const fetchedCourseData = getCourse(courseId);
    dispatch(setCourseData(fetchedCourseData));
  }, [courseId, universityId]);
};
