// import { ButtonPropsType } from "../../../../shared/types/ComponentTypes";

import { ButtonPropsType } from "../../../shared/types/ComponentTypes";
import { cn } from "../../../utils";
import { Button } from "./Button";

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
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type ? type : "button"}
      className={cn(
        isOutlined && (!textColor || !bgColor || !outlineColor)
          ? "border-[1.7px] text-light_font border-light_font"
          : "text-button_text_color bg-button_color",
        className
      )}
      variant={"rounded"}
    >
      {children}
    </Button>
  );
};

export default RoundedButton;
