import { Avatar } from "@mui/material";
import QuoteIcon from "../../../../../assets/comps/QuoteIcon";
import { ReactElement } from "react";

type Props = {
  children: string[] | string | ReactElement;
  avatar?: string;
  authorName: string;
  role: string;
  school: string;
};
const Testimonial = ({
  children,
  avatar,
  authorName,
  role,
  school,
}: Props) => {
  return (
    <div className="w-full hit-fit rounded-md  px-3">
      <section className="flex flex-col items-center border-b-[1px] border-light_border_color/50 max-h-[60%] w-full p-4 overflow-y-auto no-scrollbar">
        <QuoteIcon />
        <p className="text-center text-light_font">{children}</p>
      </section>
      <section className="flex h-fit gap-2 items-center  ">
        <div className="flex flex-col flex-1 h-full py-4 gap-1 text-light_font">
          <p className="text-sm font-semibold">{authorName}</p>
          <p className="text-sm">{role}</p>
          <p className="text-sm font-semibold text-main_bg/80 mt-1">{`@ ${school}`}</p>
        </div>
        {/* Avatar */}
        <Avatar
          src={avatar}
          alt="avatar"
          sx={{ width: 56, height: 56 }}
        />
      </section>
    </div>
  );
};

export default Testimonial;
