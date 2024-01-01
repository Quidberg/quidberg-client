import FieldWithArrowDown from "../../../../components/fields/FieldWithArrowDown"

const CourseSelect = () => {
    const handleCourseSelect = ()=>{

    }
  return (
    <div>
        <FieldWithArrowDown
        placeholder="Search for course"
        dropDownText = 'Select your course of choice'
        title=" Course"
        id= ""
        value= ""
        handleListClick={handleCourseSelect}
        titleClassName="font-normal"
        />
    </div>
  )
}

export default CourseSelect