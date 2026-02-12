import { Edit } from "../../../../../assets/svg";
import EditButton from "../../../../../shared/comps/ui/buttons/EditButton";
import FieldWithArrowDown from "../../../../../shared/comps/ui/fields/FieldWithArrowDown";
import InputField from "../../../../../shared/comps/ui/fields/InputField";

type Props = {
  universitySelected?: string;
  jambScore?: number;
  courseSelected?: string;
  handleSchoolEdit: () => void;
};

const SchoolSummary = ({
  universitySelected,
  jambScore,
  courseSelected,
  handleSchoolEdit,
}: Props) => {
  return (
    <div>
      <section className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-10 border-[1px] border-main_bg/10 bg-light_gray_bg bg-opacity-5 p-6 rounded-border_radius">
        <div className="w-full flex justify-end -mt-3 ">
          <EditButton
            handleEdit={handleSchoolEdit}
            text={"Edit"}
            image={Edit}
          />
        </div>
        <FieldWithArrowDown
          title={"University"}
          placeholder={"Search for University "}
          list={null}
          handleListClick={() => {
            return;
          }}
          id={"university"}
          className=""
          fieldName={"university"}
          value={universitySelected || ""}
          dropDownText={""}
          handleFilterList={() => {
            return;
          }}
          handleDropDownClick={() => {
            return;
          }}
          error={null}
          isIdle
        />

        <FieldWithArrowDown
          title={"Course"}
          placeholder={`Search for course`}
          list={null}
          handleListClick={() => {
            return;
          }}
          id={"course"}
          className=""
          fieldName={"course"}
          value={courseSelected || ""}
          dropDownText={``}
          handleFilterList={() => {
            return;
          }}
          handleDropDownClick={() => {
            return;
          }}
          isIdle
          error={null}
        />

        <InputField
          title={"JAMB Score"}
          placeholder={"Enter your JAMB score"}
          className="w-full placeholder:text-light_font"
          type="number"
          id="jambscore"
          value={jambScore || 0}
          fieldName="jambScore"
          handleChange={() => {
            return;
          }}
          error={null}
          isIdle
        />
      </section>
    </div>
  );
};

export default SchoolSummary;
