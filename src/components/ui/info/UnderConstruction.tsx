import { UnderConstructionImg } from "../../../assets/jpg";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="h-screen flex flex-col gap-4  items-center mt-6">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-medium text-center">
          Page is under construction
        </h1>
        <Link to={"/"} className="text-main_bg underline">
          Go back to home
        </Link>
      </div>
      <img
        className="max-w-[500px] w-[90%] md:w-[70%]"
        src={UnderConstructionImg}
        alt="Page is under construction"
      />
    </div>
  );
};

export default UnderConstruction;
