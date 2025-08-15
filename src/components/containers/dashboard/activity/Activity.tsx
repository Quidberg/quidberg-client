import FormCard from "../../../ui/cards/FormCard";
import { ActivityCalendar } from "react-activity-calendar";

const data = [
  {
    date: new Date(new Date().getFullYear() - 1, 0, 1)
      .toISOString()
      .split("T")[0], // first day of the year
    count: 2,
    level: 1,
  },
  {
    date: "2024-08-02",
    count: 16,
    level: 4,
  },
  {
    date: new Date().toISOString().split("T")[0], // today's date
    count: 11,
    level: 3,
  },
];

const Activity = () => {
  return (
    <FormCard
      className={`flex flex-col gap-4 sm:gap-5 sm:text-sm h-fit max-w-[900px] md:px-3 md:py-4`}
    >
      <section className="flex flex-col gap-2">
        <h1 className="text-sm sm:text-base font-medium text-light_font">
          Activity graph
        </h1>
        <div className="w-full h-fit">
          <ActivityCalendar
            data={data}
            colorScheme="light"
            style={{}}
            theme={{ light: ["#E0FFE0", "#2CFF05"] }}
          />
        </div>
      </section>
    </FormCard>
  );
};

export default Activity;
