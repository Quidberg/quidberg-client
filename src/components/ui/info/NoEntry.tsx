import { NoDataYetImg } from "../../../assets/png";

const NoEntry = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-[#c2c0c0] text-[16px] text-center font-regular">
        Examination Results would appear here, Click the 'Add Examination'
        button to add Results
      </h2>
      <img src={NoDataYetImg} className="max-w-[300px] w-[70%]" />
    </div>
  );
};

export default NoEntry;
