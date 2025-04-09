import MainButton from "../../../ui/buttons/MainButton";
import { useHandleNavToLink } from "../../../../shared/hooks/useHandleNavLink";

type Props = {
  textPosition?: "left" | "right" | undefined;
  image: string;
  title: string;
  description: string;
  handleFeatureNav: () => void;
  navButtonText: string;
  navButtonStyle?: string;
  buttonColor?: string;
  bgColor?: string;
  id: string;
};

const Feature = ({
  textPosition,
  image,
  title,
  description,
  navButtonText,
  navButtonStyle,
  buttonColor,
  bgColor,
  id,
}: Props) => {
  const { navigate } = useHandleNavToLink();

  const handleFeatureNav = () => {
    navigate(id);
  };
  return (
    <div
      className={`w-full flex justify-center ${bgColor} py-4 md:py-6 xl:py-10`}
    >
      <div
        className={`flex flex-col items-center gap-5 xl:gap-10 xl:w-[70%] sm:flex-row sm:items-start ${
          textPosition
            ? textPosition === "left"
              ? "sm:flex-row-reverse"
              : ""
            : ""
        }`}
      >
        {/* image */}
        <div className="sm:w-[55%] max-w-[500px] -mt-10">
          <img src={image} alt="ad" />
        </div>

        {/* description */}
        <div className="flex-1 flex flex-col sm:items-start text-start gap-4 px-4 sm:px-6">
          <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
          <p>{description}</p>
          <MainButton
            onClick={handleFeatureNav}
            className={`py-2 px-4 mt-2 ${navButtonStyle}`}
            bgColor={buttonColor}
          >
            {navButtonText}
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Feature;
