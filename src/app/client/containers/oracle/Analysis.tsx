import {
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { memo } from "react";
import OracleTable from "../../../../shared/comps/ui/tables/OracleTable";

type CutoffMarkType = Array<{
  year: string;
  zone: Array<{ title: string; score: number }>;
}>;

type PercentResultType = Array<{
  examination: string;
  score: number;
}>;

type CutoffMarkTable = Array<{
  year: string;
  [id: string]: number | string;
}>;

type Props = {
  cutoffMark: CutoffMarkType;
  percentResult: PercentResultType;
};

const Analysis = ({ cutoffMark, percentResult }: Props) => {
  const cutOffColumnHelper = createColumnHelper<CutoffMarkTable[0]>();
  const percentResultColumnHelper =
    createColumnHelper<PercentResultType[0]>();

  const defaultCutOffColumns = [
    cutOffColumnHelper.accessor("year", {
      cell: (req) => req.getValue(),
      header: () => "year",
      // footer: req => req.column.id,
    }),
    ...(cutoffMark
      ? cutoffMark[0].zone.map(({ title }) =>
          cutOffColumnHelper.accessor(title, {
            cell: (req) => req.getValue(),
            header: () =>
              title.charAt(0).toUpperCase() + title.slice(1),
            // footer: req => req.column.id,
          })
        )
      : []),
  ];

  const defaultPercentResultColumns = [
    percentResultColumnHelper.accessor("examination", {
      cell: (req) => req.getValue(),
      header: () => "Examination",
      // footer: req => req.column.id,
    }),
    percentResultColumnHelper.accessor("score", {
      cell: (req) => req.getValue(),
      header: () => "Your Score",
      // footer: req => req.column.id,
    }),
  ];

  const cutoffTableInstance = useReactTable({
    data: normalizeTable(cutoffMark),
    columns: defaultCutOffColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const percentResultTableInstance = useReactTable({
    data: percentResult,
    columns: defaultPercentResultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const overallScore = percentResult.find(
    (result) => result.examination === "overallScore"
  )?.score;

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h3 className="font-main_header_weight text-light_font text-lg xl:text-xl">
        {"2. Analysis"}
      </h3>
      <main className="flex flex-col gap-2 sm:gap-4 items-center justify-center w-full  ml-4">
        <section className="flex flex-col gap-2 max-w-[1000px] w-full">
          <p className="text-main_font/90">
            {"Cut-off marks in {Course} of previous years"}
          </p>
          <table className="w-full">
            <thead>
              {cutoffTableInstance
                .getHeaderGroups()
                .map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="mb-2 border-[1px] border-b-light_border_color bg-main_bg/5"
                  >
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="text-light_font py-2 capitalize"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
            </thead>
            <tbody>
              {cutoffTableInstance.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b-[1px] border-b-light_border_color text-center "
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-2 ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="flex flex-col gap-2 max-w-[1000px] w-full">
          {/* <p>{"Your admission score"}</p> */}
          <p className="text-main_font/60">
            <span className="font-semibold">{"Your scores "}</span>
            {"have been calculated based on results you provided."}
          </p>

          <div className="text-main_font/70 w-fit">
            {
              <OracleTable
                tableInstance={percentResultTableInstance}
              />
            }

            <div className="text-main_font">
              <p className="font-normal mt-2">
                Your overall score is{" "}
                {overallScore ? (
                  <span className="font-bold text-lg">{`${overallScore}%`}</span>
                ) : (
                  <span className="font-semibold">
                    unvailable because the results provided is
                    incomplete
                  </span>
                )}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const MemoizedAnalysis = memo(Analysis);
export default MemoizedAnalysis;

const normalizeTable = (data: CutoffMarkType): CutoffMarkTable => {
  return data
    ? data.map((td) => ({
        year: td.year,
        ...td.zone.reduce((a, b) => {
          a[b.title] = b.score;
          return a;
        }, {} as Record<string, number>),
      }))
    : [];
};
