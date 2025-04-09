import { Link } from "react-router-dom";
import { AuthRegType } from "../../../../app/slices/auth/types";
import { AuthType } from "../../../../utils/enums/AuthEnum";
import { AppRoutes } from "../../../../routes/AppRoutes";

type Props = {
  handleAuth: (type: AuthRegType) => void;
  goHome: () => void;
  ref?: React.MutableRefObject<any>;
  isScrolledDown: boolean;
};

const NavBar = ({ handleAuth, goHome, ref, isScrolledDown }: Props) => {
  return (
    <nav
      className={`z-nav_bar ${
        isScrolledDown &&
        "backdrop-blur-md shadow-light_gray_bg/10 bg-light_pry_bg/3"
      } flex items-center px-5 py-2 `}
      ref={ref}
    >
      <button
        className=" text-white text-base md:text-[1.2rem] font-bold mr-4"
        onClick={goHome}
      >
        {`quidberg`}
      </button>
      <div className="flex flex-1 justify-end sm:justify-between">
        <div className="text-white/80 hidden sm:flex gap-3">
          <button>
            <p>{"Explore"}</p>
          </button>
          <Link to={AppRoutes.pricing.index} className="flex items-center">
            Pricing
          </Link>
        </div>

        <div className="flex flex-row items-center pl-4 text-sm md:text-base gap-3  ">
          <div className="w-[1.2px] h-7 bg-light_border_color"></div>
          {/* sign in */}
          <button
            onClick={() => handleAuth(AuthType.signin)}
            className="text-white/80"
          >
            Sign In
          </button>

          {/* sign up */}
          <button
            onClick={() => handleAuth(AuthType.signup)}
            className="text-[#FFFFFF] bg-main_bg px-3 py-1 md:px-3 md:py-3"
          >
            <p className="hidden md:flex">Join for Free</p>
            <p className="md:hidden">Join</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
