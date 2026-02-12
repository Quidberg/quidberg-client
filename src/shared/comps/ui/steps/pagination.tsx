import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { cn } from "../../../utils";
import { Button } from "../buttons/Button";
import { useEffect, useState } from "react";

type Props = {
  pageSize: number;
  navigateToPage: (page: number) => void;
  activePage: number;
};
const Pagination = ({
  pageSize,
  navigateToPage,
  activePage,
}: Props) => {
  const [pages, setPages] = useState<Array<string | number>>([]);

  useEffect(() => {
    const pages: Array<string | number> = [];
    // Always show first
    if (pageSize > 1) pages.push(1);

    // Add left ellipsis
    if (activePage > 3) pages.push("...");

    // Middle window
    for (let i = activePage - 1; i <= activePage + 1; i++) {
      if (i > 1 && i < pageSize) pages.push(i);
    }

    // Add right ellipsis
    if (activePage < pageSize - 2) pages.push("...");

    // Always show last
    if (pageSize > 1) pages.push(pageSize);

    setPages(pages);
  }, [activePage]);

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {pageSize > 1 && (
        <div className="flex items-center flex-wrap gap-2">
          <Button
            className="flex items-center text-sm"
            onClick={() =>
              navigateToPage(
                activePage > 1 ? (activePage || 1) - 1 : 1
              )
            }
          >
            <CaretLeft size={20} />
            <p>Previous</p>
          </Button>

          {pages.map((p, index) => {
            if (p === "...") return <p>...</p>;

            if (typeof p === "number")
              return (
                <Button
                  key={index}
                  onClick={() => navigateToPage(p)}
                  className={cn(
                    `p-0 aspect-square rounded-sm bg-gray-300/70 hover:bg-gray-300 transition-colors text-sm`,
                    activePage === p &&
                      " border-main_bg/60 border-2 bg-gray-400"
                  )}
                  variant={"plain"}
                >
                  {p}
                </Button>
              );
          })}
          <Button
            className="flex items-center"
            onClick={() =>
              navigateToPage(
                activePage < pageSize
                  ? (activePage || 1) + 1
                  : pageSize
              )
            }
          >
            <p>Next</p>
            <CaretRight size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
