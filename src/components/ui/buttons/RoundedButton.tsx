import { ButtonPropsType } from "../../../../shared/types/ComponentTypes";

const RoundedButton = ({
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
      className={`px-5 md:px-10 py-1 font-normal  rounded-full ${isOutlined} ${textColor} ${bgColor} ${outlineColor} ${
        isOutlined && (!textColor || !bgColor || !outlineColor)
          ? "border-[1.7px] text-light_font border-light_font"
          : "text-button_text_color bg-button_color"
      }  ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
