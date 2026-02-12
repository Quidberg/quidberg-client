import { ButtonPropsType } from "../../../types/ComponentTypes";
import { cn } from "../../../utils";

const MainButton = ({
  children,
  className,
  isOutlined,
  textColor,
  bgColor,
  outlineColor,
  onClick,
  disabled,
  type,
}: ButtonPropsType) => {
  return (
    <button
      className={cn(
        `px-5 md:px-10 w-fit py-1 font-normal ${
          isOutlined && (!textColor || !bgColor || !outlineColor)
            ? "border-[1.7px] text-light_font border-light_font"
            : "text-button_text_color bg-button_color"
        } `,
        isOutlined,
        textColor,
        bgColor,
        outlineColor,
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default MainButton;
