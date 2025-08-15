import { cn } from "../../../utils";

const TitleWithSub = ({
  title,
  subtitle,
  mainHeaderCol,
  subHeaderCol,
  className,
}: {
  title?: string;
  subtitle?: string;
  mainHeaderCol?: string;
  subHeaderCol?: string;
  className?: string;
}) => {
  return (
    <header
      className={cn(
        "w-full flex flex-col gap-2 justify-center items-center mb-4 text-center",
        className
      )}
    >
      <h2
        className={`text-18 font-main_header_weight capitalize ${
          mainHeaderCol ? mainHeaderCol : "text-main_font"
        } `}
      >
        {title}
      </h2>
      {subtitle && (
        <h4
          className={`text-sub_header_size   ${
            subHeaderCol ? subHeaderCol : "text-primary/80"
          }  font-light`}
        >
          {subtitle}
        </h4>
      )}
    </header>
  );
};

export default TitleWithSub;
