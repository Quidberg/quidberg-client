import FormCard from "../../../components/cards/FormCard";
import EditButton from "../../../components/buttons/EditButton";
// import { ArrowDown } from "../../../assets/svg";
import ColorCode from "../../../components/tags/ColorCode";
import { capitalize } from "../../../utils/utilFunction";

type PerformanceDataObjType = {
  name: string;
  targetScore: number;
  currentScore: number;
  colorCode: string
};

type PerformanceDataType = {
  [index: string]: Array<PerformanceDataObjType>;
};

type PerformancePropType = {
  performanceData: PerformanceDataType;
};

const PerformanceCard = ({ performanceData }: PerformancePropType) => {
  const handleEditTarget = () => {};
  return (
    <FormCard
      className={`flex flex-col gap-4 sm:gap-5 sm:text-sm h-fit max-w-[900px] md:px-3 md:py-4`}
    >
      <section className=" flex justify-between">
        <h1 className="text-sm sm:text-base font-medium text-light_font">Performance Rating</h1>
        <EditButton text="Configure" handleEdit={handleEditTarget} />
      </section>

      {/* RATING */}
      <section className="text-sm ">
        <table className="w-full table-auto">
          <thead className="text-black font-semibold">
            <tr>
              <th className="flex flex-col items-start justify-start  text-start pl-2">{`Subject`}</th>
              <th className=" text-start ">
                <div className="flex gap-1 items-start justify-start text-start">
                  {`Target `}
                  <p className="hidden md:flex">Performance</p>
                  {`(%)`}
                </div>
              </th>
              <th className="flex flex-col text-start p-0">
                <div className="flex gap-1 items-start justify-start text-start">
                  {`Current`}
                  <p className="hidden md:flex">Performance</p>
                  {`(%)`}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="max-h-[200px] overflow-scroll font-light">
            {performanceData["subjects"].map((data, i) => (
              <tr className={`text-start ${i % 2 !== 0 ? "bg-slate-300" : ""}`} key={data?.name}>
                <td className="p-2">{capitalize(data.name)}</td>
                <td>{data.targetScore}</td>
                <td>{data.currentScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CHART */}
      <section className="h-[80%] aspect-square bg-slate-600 mt-3"></section>

      {/* COLOR CODE */}
      <section className="flex gap-4 flex-wrap items-center justify-start">
            {performanceData["subjects"].map(data=><ColorCode color={data?.colorCode} text={data?.name} key={data?.name}/>)}
      </section>
    </FormCard>
  );
};

export default PerformanceCard;
