import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import OracleTable from "../../../../shared/comps/ui/tables/OracleTable";
import { cn } from "../../../../shared/utils";

type RecommededUnivType = Array<{
  university: string;
  location: string;
  tuitionRange: string;
  isOpen: boolean;
}>;

interface Props {
  recommendedUniv: RecommededUnivType;
}

const Recommendation = ({ recommendedUniv }: Props) => {
  const recommendedUNiColumnHelper =
    createColumnHelper<RecommededUnivType[0]>();

  const recommendedUniColumns = [
    recommendedUNiColumnHelper.accessor("university", {
      cell: (req) => (
        <p className="font-semibold opacity-80">{req.getValue()}</p>
      ),
      header: () => "University",
      // footer: req => req.column.id,
    }),
    recommendedUNiColumnHelper.accessor("location", {
      cell: (req) => req.getValue(),
      header: () => "Location",
      // footer: req => req.column.id,
    }),
    recommendedUNiColumnHelper.accessor("tuitionRange", {
      cell: (req) => req.getValue(),
      header: () => "Tuition Range",
      // footer: req => req.column.id,
    }),
    recommendedUNiColumnHelper.accessor("isOpen", {
      cell: (req) => (
        <div className="flex justify-center">
          <AdmissionStatus status={req.getValue()} />
        </div>
      ),
      header: () => "Admission Status",
      // footer: req => req.column.id,
    }),
  ];

  const recommendedUnivTableInstance = useReactTable({
    data: recommendedUniv,
    columns: recommendedUniColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <h3 className="font-main_header_weight text-light_font text-lg xl:text-xl">
        {"3. Recommendations"}
      </h3>
      <main className="ml-4 w-full">
        <p className="text-main_font/60">
          Next steps based on our analysis of your choice and results.
        </p>

        <section className="w-full flex flex-col gap-4 mt-4">
          <div className="w-full flex ">
            We have recommended other universities that might be a
            good fit for you based on your results.
          </div>
          <OracleTable tableInstance={recommendedUnivTableInstance} />
        </section>
      </main>
    </div>
  );
};

export default Recommendation;

const AdmissionStatus = ({ status }: { status: boolean }) => {
  return (
    <div
      className={cn(
        "px-2 py-1 border rounded-md w-fit text-sm",
        status
          ? "bg-green-500/30 text-green-500 border-green-500"
          : "bg-red-500/30 text-red-500 border-red-500"
      )}
    >
      {status ? <p>Open</p> : <p>Closed</p>}
    </div>
  );
};
