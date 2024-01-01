import { ReactElement } from "react";

type OutlineButtonPropTypes = {
  children: ReactElement | string;
  onClick: () => void;
  borderColor?: string;
  color?: string;
  className?: string
};

const OutlineButton = ({
  children,
  onClick,
  color,
  borderColor,
  className
}: OutlineButtonPropTypes) => {
  return (
    <button
      style={{
        border: "solid 0.2px",
        borderColor: borderColor ? borderColor : "#1DA1F2",
        color: color ? color : "#1DA1F2",
      }}
      className={`border-[1px] px-2 py-2 text-base font-normal ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
