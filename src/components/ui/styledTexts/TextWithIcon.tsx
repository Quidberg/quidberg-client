import { useRef } from "react";
import { sizeConverterTW } from "../../../utils/utilFunction";

type TextWithIconPropType = {
  text: string;
  image: string;
  sizeType?: "px" | "rem" | "em";
  width: string | number;
  height: string | number;
  onClick?: () => void;
  flexPositions?: string;
  imageClassName?: string;
  buttonClassName?: string;
  textClass?: string;
};

const TextWithIcon = ({
  text,
  image,
  width,
  height,
  sizeType,
  onClick,
  flexPositions,
  imageClassName,
  buttonClassName,
  textClass,
}: TextWithIconPropType) => {
  // SIZE CONVERTER
  const size = useRef(sizeConverterTW({ width, height }, sizeType));

  return (
    <div
      className={`cursor-pointer flex gap-1 md:text-base text-sm ${
        flexPositions ? flexPositions : "items-center justify-center"
      } ${buttonClassName}`}
      onClick={onClick}
    >
      <p className={`text-main_bg ${textClass}`}>{text}</p>
      <div className={`${size.current} `}>
        <img src={image} className={`w-full h-full ${imageClassName}`} />
      </div>
    </div>
  );
};

export default TextWithIcon;
