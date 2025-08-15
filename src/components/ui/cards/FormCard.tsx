import React from "react";

type formCardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isLocked?: boolean;
  headerColor?: string;
  childrenClass?: string;
};

const FormCard = ({
  title,
  subtitle,
  children,
  className,
  isLocked,
  headerColor,
  childrenClass,
}: formCardProps) => {
  return (
    <div
      className={` ${
        isLocked ? "bg-light_gray_bg" : "bg-main_bg"
      } flex flex-col w-full h-fit bg-opacity-5 border-[1px] border-main_bg/10  rounded-border_radius gap-4 py-4 ${className}`}
    >
      {title && (
        <header className="w-full flex flex-col justify-center items-center text-center">
          <h2
            className={`text-main_header_size font-main_header_weight capitalize ${
              headerColor ? headerColor : "text-main_font"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <h4 className="text-sub_header_size font-sub_header_weight text-subtitle_color">
              {subtitle}
            </h4>
          )}
        </header>
      )}
      <div className={`w-full px-3 md:px-6 ${className} ${childrenClass}`}>
        {children}
      </div>
    </div>
  );
};

export default FormCard;
