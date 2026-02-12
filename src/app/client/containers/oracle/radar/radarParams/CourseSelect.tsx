import FieldWithArrowDown from "../../../../../../shared/comps/ui/fields/FieldWithArrowDown";

const CourseSelect = () => {
  const handleCourseSelect = () => {
    return;
  };
  return (
    <div>
      <FieldWithArrowDown
        placeholder="Search for course"
        dropDownText="Select your course of choice"
        title=" Course"
        id=""
        value=""
        handleListClick={handleCourseSelect}
        titleClassName="font-normal"
      />
    </div>
  );
};

export default CourseSelect;
