import { Check, X } from "@phosphor-icons/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { cn } from "../../../../shared/utils";

type Requirements = Array<{
  passed: boolean;
  title: string;
  id: string;
  description: string;
}>;

type Props = {
  requirements: Requirements;
};

const Requirements = ({ requirements }: Props) => {
  const columnHelper = createColumnHelper<Requirements[0]>();
  const defaultColumns = [
    columnHelper.accessor("title", {
      cell: (req) => req.getValue(),
      header: () => "Requirement",
      // footer: req => req.column.id,
    }),
    columnHelper.accessor("description", {
      cell: (req) => req.getValue(),
      header: () => "Description",
      // footer: req => req.column.id,
    }),
    columnHelper.accessor("passed", {
      cell: (req) => <PassedRequirement passed={req.getValue()} />,
      header: () => "Passed",
      // footer: req => req.column.id,
    }),
  ];
  const unmetRequirements = useMemo(() => {
    return requirements.filter((req) => !req.passed);
  }, [requirements]);

  const table = useReactTable({
    data: requirements,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-main_header_weight text-light_font text-lg xl:text-xl">
        {"1. Minimum requirements for admission"}
      </h3>
      <main className="ml-4">
        <div>
          {!unmetRequirements.length ? (
            <p>
              You have the{" "}
              <span className="text-main font-semibold">
                {" minimum "}
              </span>{" "}
              requirements for consideration.
            </p>
          ) : (
            <div className="flex gap-2">
              <p className="text-main_font/60">
                The following requirements were{" "}
                <span className="font-bold text-red-500">
                  {" not "}
                </span>{" "}
                met:
              </p>

              {unmetRequirements.map((req, i) => (
                <div key={req.id} className="flex gap-1 ">
                  <h4 className=" italic">
                    {req.title}
                    <span
                      className={cn(
                        ``,
                        i === unmetRequirements.length - 1 && "hidden"
                      )}
                    >
                      ,
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          )}

          {<div></div>}
        </div>

        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="mb-2 border-[1px] border-b-light_border_color bg-main_bg/5"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-light_font py-2"
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
            {table.getRowModel().rows.map((row) => (
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
      </main>
    </div>
  );
};

export default Requirements;

export const PassedRequirement = ({
  passed,
}: {
  passed: boolean;
}) => {
  return (
    <span
      className={`w-full flex justify-center text-2xl font-black ${
        passed ? "text-green-500" : "text-red-500"
      }`}
    >
      {passed ? <Check weight={"bold"} /> : <X weight={"bold"} />}
    </span>
  );
};
