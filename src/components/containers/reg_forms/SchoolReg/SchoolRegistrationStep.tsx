import { memo, useState } from "react";
import FormCard from "../../../ui/cards/FormCard";
import FieldWithArrowDown from "../../../ui/fields/FieldWithArrowDown";
import { DropDownFieldDataType } from "../../../../shared/types/FieldTypes";
import InputField from "../../../ui/fields/InputField";
import RoundedButton from "../../../ui/buttons/RoundedButton";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/regHook";
import useNavRegPage from "../../../../shared/hooks/navRegPage";
import { DropListType } from "../../../../shared/types/RegistrationDataTypes";
import {
  RegFormValues,
  SchoolRegFormErrors,
  SchoolRegFormType,
} from "../../../../app/slices/oracleRegistration/types";
import {
  selectFormValues,
  // selectUniversitiesData,
  // selectUniversityData,
  // setCourseData,
  setFormValues,
  // setUniversityData,
} from "../../../../app/slices/oracleRegistration/registrationSlice";
import { Form, Formik } from "formik";
// import { fetchCourse } from "../hooks/fetchCourse";
import { fetchUniversities } from "../hooks/fetchUniversities";
import { fetchUniversity } from "../hooks/fetchUniversity";
import { fieldInfo } from "./fieldInfo";

const formItems: { [index: string]: DropDownFieldDataType } = {
  university: {
    title: "University",
    placeholder: "Search for University ",
    list: null,
    id: "university",
    value: "",
    dropDownText: "Select University",
    fieldName: "university",
  },
  course: {
    title: "Course",
    placeholder: "Search Course of Study",
    list: null,
    id: "course",
    value: "",
    dropDownText: "Select Course of Study",
    fieldName: "course",
  },
};

const initialValues: SchoolRegFormType = {
  university: {
    name: "",
    id: "uni_id",
  },
  course: {
    name: "",
    id: "course_id",
  },
  jambScore: {
    value: 0,
    id: "jamb_id",
  },
};

const initialErrors = {
  university: null,
  course: null,
  jambScore: null,
};

const SchoolRegistration = () => {
  const dispatch = useAppDispatch();
  const { handleNextStep } = useNavRegPage();
  const formValues = useAppSelector(selectFormValues);

  // STATES
  const [formValState, setFormValState] = useState<RegFormValues>(formValues);
  const [formItemsState, setFormItemsState] = useState<{
    [index: string]: DropDownFieldDataType;
  }>(formItems);
  const [errors, setErrors] = useState<SchoolRegFormErrors>(initialErrors);

  // HOOKS
  const { universitiesDataStore } = fetchUniversities();
  const { universityDataStore } = fetchUniversity({
    universityId: formValState?.university?.id || null,
  });
  // const courseData = fetchCourse({
  //   courseId: formValState["course"]?.id || "",
  //   universityId: "",
  // });

  // FIELD ACTIONS
  const handleSearchFilterList = ({
    text,
    id,
  }: {
    text: string;
    id: string;
  }) => {
    setFormItemsState({
      ...formItemsState,
      [id]: {
        ...formItemsState[id],
        list: formItems[id]?.list?.filter((textItem) =>
          textItem.name.toLowerCase().includes(text.toLowerCase())
        ),
      },
    });
  };

  const handleUniversitySelect = ({
    item,
    id,
  }: {
    item: DropListType;
    id: string;
  }) => {
    setFormValState({ ...formValState, [id]: item });
  };

  const handleCourseSelect = ({
    item,
    id,
  }: {
    item: DropListType;
    id: string;
  }) => {
    setFormValState({ ...formValState, [id]: item });
  };

  const handleCourseDropDown = (id: string) => {
    setErrors(initialErrors);
    if (id === "course" && !formValState["university"]) {
      return setErrors({
        ...errors,
        university: [
          {
            type: "universityNotSelected",
            message: "Please select University",
          },
        ],
      });
    }
  };

  const handleUniversityDropDown = (id: string) => {
    console.log(id);
    setErrors(initialErrors);
  };

  const handleJambScoreChange = (e: any) => {
    const jambScore: number = e.target.value;
    setFormValState({
      ...formValState,
      jambScore: { ...formValState.jambScore, value: jambScore },
    });
    if (jambScore > 400) {
      return setErrors({
        ...errors,
        jambScore: [
          { type: "limit", message: "Jamb score cannot be greater than 400" },
        ],
      });
    }

    if (jambScore < 0) {
      return setErrors({
        ...errors,
        jambScore: [
          { type: "limit", message: "Jamb score cannot be negative" },
        ],
      });
    }

    setErrors({ ...errors, jambScore: null });
  };

  // VALIDATIONS
  const validateForm = () =>
    // values: SchoolRegFormType
    {
      const errors: SchoolRegFormErrors | null = {};
      const jambScore = formValState["jambScore"];
      const university = formValState["university"];
      const course = formValState["course"];
      let errContent;

      if (!jambScore?.value) {
        errContent = {
          message: "Please Enter Jamb Score",
          type: "empty field",
        };
        errors.jambScore = errors.jambScore
          ? [...errors.jambScore, errContent]
          : [errContent];
      }

      if (!university) {
        errContent = {
          message: "Please Select University",
          type: "empty field",
        };
        errors.university = errors.university
          ? [...errors.university, errContent]
          : [errContent];
      }

      if (!course) {
        errContent = {
          message: "Please Select Course",
          type: "empty field",
        };
        errors.course = errors.course
          ? [...errors.course, errContent]
          : [errContent];
      }

      if (jambScore && jambScore.value > 400) {
        errContent = {
          message: "Jamb score cannot be greater than 400",
          type: "limit",
        };
        errors.jambScore = errors?.jambScore
          ? [...errors.jambScore, errContent]
          : [errContent];
      }
      setErrors(errors);
      return errors;
    };

  // SUBMISSIONS
  const handleSubmit = () =>
    // values: SchoolRegFormType
    {
      dispatch(setFormValues(formValState));
      console.log(formValState);
      handleNextStep();
    };

  return (
    <div className="w-full max-w-[700px] flex flex-col items-center gap-4 sm:gap-6">
      <h1 className="text-center text-lg font-main_header_weight text-light_font">
        Our <span className="text-main_bg ">Oracle</span> feature provides
        detailed analysis on your chances of admission into your choice school{" "}
      </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({
          handleSubmit,
          // errors: errorsFormik
        }) => (
          <FormCard
            title="University of Choice"
            subtitle="Fill in your choice school"
            className="justify-center items-center py-6 "
            childrenClass="flex items-center w-full "
          >
            <Form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-6 md:gap-10"
            >
              <section className="w-full sm:w-[80%] flex flex-col items-center gap-4 sm:gap-6 md:gap-10">
                <FieldWithArrowDown
                  title={"University"}
                  placeholder={"Search for University "}
                  list={universitiesDataStore}
                  handleListClick={handleUniversitySelect}
                  id={"university"}
                  className=""
                  fieldName={"university"}
                  value={formValState["university"]?.name || ""}
                  dropDownText={"Select University of Choice"}
                  handleFilterList={handleSearchFilterList}
                  handleDropDownClick={handleUniversityDropDown}
                  error={errors.university}
                  infoModalContent={fieldInfo.universityInfo}
                />

                <FieldWithArrowDown
                  title={"Course"}
                  placeholder={`Search for course`}
                  list={universityDataStore?.courses}
                  handleListClick={handleCourseSelect}
                  id={"course"}
                  className=""
                  fieldName={"course"}
                  value={formValState["course"]?.name || ""}
                  dropDownText={`${
                    formValState["university"]?.name
                      ? `Select Course available in ${formValState["university"]?.name}`
                      : "Select Course of choice"
                  }`}
                  handleFilterList={handleSearchFilterList}
                  handleDropDownClick={handleCourseDropDown}
                  isDropDownLocked={!Boolean(formValState["university"]?.name)}
                  error={errors["course"]}
                  infoModalContent={fieldInfo.courseInfo}
                />

                <InputField
                  title={"JAMB Score"}
                  placeholder={"Enter your JAMB score"}
                  className="w-full placeholder:text-light_font"
                  type="number"
                  id="jambscore"
                  value={formValState?.jambScore?.value || ""}
                  fieldName="jambScore"
                  handleChange={handleJambScoreChange}
                  error={errors["jambScore"]}
                  infoModalContent={fieldInfo.jambInfo}
                />
              </section>{" "}
              <section>
                <RoundedButton
                  className={`px-8 py-1 font-button_weight text-button_text_color bg-button_color`}
                  type="submit"
                >
                  Next
                </RoundedButton>
              </section>
            </Form>
          </FormCard>
        )}
      </Formik>
    </div>
  );
};

const memoizedSchoolRegistration = memo(SchoolRegistration);

export default memoizedSchoolRegistration;
