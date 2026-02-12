import { RadarIcon } from "../../../../../assets/svg";

type RadarButtonPropTypes = {
  onRadarClick: () => void;
};

const RadarButton = ({ onRadarClick }: RadarButtonPropTypes) => {
  return (
    <button
      className="flex justify-center items-center p-4 rounded-[15px] shadow-md bg-main_bg"
      onClick={onRadarClick}
    >
      <img src={RadarIcon} alt="radar" />
    </button>
  );
};

export default RadarButton;
