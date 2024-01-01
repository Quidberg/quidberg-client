import InfoButton from "../../../components/buttons/InfoButton";
import RoundedButton from "../../../components/buttons/RoundedButton";
import CourseSelect from "./radarParams/CourseSelect";
import LocationFilter from "./radarParams/LocationFilter";
import TuitionFilter from "./radarParams/TuitionFilter";

type Props = {
  handleRadarInfoModal?: () => void;
};

const Radar = ({ handleRadarInfoModal }: Props) => {
  return (
    <div className="flex flex-col gap-8 xl:gap-10 w-full min-h-fit">
      <main className=" flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <InfoButton
            textClassName="font-semibold text-lg"
            onClick={handleRadarInfoModal}
          >
            Radar
          </InfoButton>
          <h3 className="text-sm text-light_font">
            {"Don't have a University in mind?, Radar will find Universities that fits your needs."}
          </h3>
        </header>

        {/* Parameters */}
        <section className="flex flex-col gap-5 px-1">
          {/* Course Selected */}
          <div>
            <CourseSelect />
          </div>

          {/* Location */}
          <div>
            <LocationFilter />
          </div>

          {/* Tuition */}
          <div>
            <TuitionFilter />
          </div>

          {/* Rank */}
          {/* <div>
            <h3>Rank Range</h3>
          </div> */}
        </section>
      </main>

      <section className="w-full flex flex-col items-center px-2">
        <RoundedButton className="w-full py-1 text-base">
          {"Find Universities "}
        </RoundedButton>
      </section>
    </div>
  );
};

export default Radar;
