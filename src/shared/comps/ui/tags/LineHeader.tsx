import { ReactElement } from "react";

type Props = {
  children: string | ReactElement;
};
const LineHeader = ({ children }: Props) => {
  return (
    <div className=" flex items-center relative w-full h-[20px]">
      <div className="h-[0.3px] flex-1 bg-light_font"></div>
        <p className="p-2 text-light_font">
          {children}
        </p>
        <div className="h-[0.3px] flex-1 bg-light_font"></div>

    </div>
  );
};

export default LineHeader;
