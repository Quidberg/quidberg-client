import FormCard from "../../../ui/cards/FormCard";
// import { ArrowDown } from "../../../assets/svg";
import ColorCode from "../../../ui/tags/ColorCode";
import { capitalize } from "../../../../utils/utilFunction";
import { CaretDown } from "@phosphor-icons/react";
import { Button } from "../../../ui/buttons/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/menu/drop-down";
import CurvedLineChart from "../../../ui/charts/CurvedLineChart";

type PerformanceDataObjType = {
  name: string;
  targetScore: number;
  currentScore: number;
  colorCode: string;
};

type PerformanceDataType = {
  [index: string]: Array<PerformanceDataObjType>;
};

type PerformancePropType = {
  performanceData: PerformanceDataType;
};

const PerformanceCard = ({
  performanceData,
}: PerformancePropType) => {
  // const handleEditTarget = () => {};
  return (
    <FormCard
      className={`flex flex-col gap-4 sm:gap-5 sm:text-sm h-fit max-w-[900px] md:px-3 md:py-4`}
    >
      <section className=" flex justify-between">
        <h1 className="text-sm sm:text-base font-medium text-light_font">
          Performance Rating
        </h1>
        {/* <EditButton text="Configure" handleEdit={handleEditTarget} /> */}
      </section>

      {/* RATING */}
      <section className="text-sm ">
        <table className="w-full table-auto">
          <thead className="text-black font-semibold">
            <tr>
              <th className="flex flex-col items-start justify-start  text-start pl-2">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant={"plain"}
                      className="flex gap-2 font-semibold"
                    >
                      <p>{`Category`}</p>

                      <div className="flex gap-1 bg-main_bg text-white items-center p-1 py-[0.3px] rounded-md text-sm font-normal">
                        <p>by Subjects</p>
                        <CaretDown />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>
                      Select Performance Category
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>By Subject</DropdownMenuItem>
                    <DropdownMenuItem>By Exam</DropdownMenuItem>
                    <DropdownMenuItem>By Topic</DropdownMenuItem>
                    {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </th>
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
              <tr
                className={`text-start ${
                  i % 2 !== 0 ? "bg-slate-300/30" : ""
                }`}
                key={data?.name}
              >
                <td className="p-2">{capitalize(data.name)}</td>
                <td>{data.targetScore}</td>
                <td>{data.currentScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CHART */}
      <section className="flex flex-col gap-2 mt-3 ">
        <h2 className="text-sm sm:text-base font-medium text-light_font">
          Performance chart
        </h2>
        <div className="w-full aspect-square bg-slate-700  max-h-[300px]">
          <CurvedLineChart />
        </div>
      </section>

      {/* COLOR CODE */}
      <section className="flex gap-4 flex-wrap items-center justify-start">
        {performanceData["subjects"].map((data) => (
          <ColorCode
            color={data?.colorCode}
            text={data?.name}
            key={data?.name}
          />
        ))}
      </section>
    </FormCard>
  );
};

export default PerformanceCard;
