import { ReactElement } from "react";
import MainButton from "../../../components/buttons/MainButton";

type Props = {
  textPosition?: "left" | "right" | undefined;
  image: string | ReactElement;
  title: string;
  description: string;
  handleFeatureNav: () => void;
  navButtonText: string
  navButtonStyle?: string
};
const Feature = ({ textPosition, image, title, description, handleFeatureNav, navButtonText, navButtonStyle }: Props) => {
  return (
    <div
      className={`flex flex-col gap-5 sm:flex-row ${
        textPosition ? (textPosition === "left" ? "sm:flex-row-reverse" : "") : ""
      }`}
    >
      {/* image */}
      <div className="w-[55%]">

      </div>

      {/* description */}
      <div className="flex-1 flex flex-col items-start text-start gap-4">
        <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
        <p>{description}</p>
        <MainButton onClick={handleFeatureNav} className={`py-2 px-4 mt-2 ${navButtonStyle}`}>{navButtonText}</MainButton>
      </div>
    </div>
  );
};

export default Feature;
