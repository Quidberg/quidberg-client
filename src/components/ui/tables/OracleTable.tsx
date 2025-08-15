import { flexRender, useReactTable } from "@tanstack/react-table";

type Props = {
  tableInstance: ReturnType<typeof useReactTable>;
};

const OracleTable = ({ tableInstance }: Props) => {
  if (!tableInstance) return null;
  return (
    <table className="w-full ">
      <thead>
        {tableInstance.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="mb-2 border-[1px] border-b-light_border_color bg-main_bg/5 "
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-light_font py-2 capitalize px-4"
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
        {tableInstance.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b-[1px] border-b-light_border_color text-center "
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="py-2 ">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OracleTable;
