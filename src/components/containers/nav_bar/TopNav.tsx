import React, { useState } from "react";
import {
  BurgerMenu,
  CloseGreyIcon,
  ThreeDotMenu,
} from "../../../assets/svg";
import {
  // AppRoutes,
  PRF,
} from "../../../routes/AppRoutes";
import { useAppDispatch } from "../../../app/hooks/regHook";
import { showModal } from "../../../app/slices/modal/modalSlice";
import { NavigateFunction } from "react-router-dom";
// import SearchField from "../../components/fields/SearchField";
// import DropDownMenu from "./DropDownMenu";
import { NavLinksPropsType } from "./Links";
import SearchDropDown from "../dropDowns/SearchDropDown";
import SearchButton from "../../ui/buttons/SearchButton";
// import DropDownContainer from "./DropDownContainer";
import { DropDownContentEnum } from "../../../utils/enums/NavBarEnum";
import { useListenForOutsideClicks } from "../../../shared/hooks/listenForOutsideClicks";
import { AuthType } from "../../../utils/enums/AuthEnum";
import { cn } from "../../../utils";

type TopNavPropTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  navLinks: NavLinksPropsType[];
  handleNav: (link: string) => void;
  currenPath: string;
  handleAuth: (type: AuthType) => void;
};

// type dropDownContentsType = {
//   [index: string]: ReactElement;
// };

const TopNav = ({
  isOpen,
  setIsOpen,
  navigate,
  // handleNav,
  // currenPath,
  handleAuth,
}: TopNavPropTypes) => {
  const dispatch = useAppDispatch();

  //   STATES
  const [
    auth,
    // setAuth
  ] = useState(false);
  // const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [dropDownContent, setDropDownContent] = useState<
    null | string
  >(null);

  // HOOKS
  const { dropdownRef } = useListenForOutsideClicks(() => {
    handleCloseDropDownMenu();
  }, isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goHome = () => {
    // Go To Home Page
    navigate(PRF);
  };

  const handleNavSearchButton = () => {
    // setIsDropDownActive(!isDropDownActive);
    if (dropDownContent) {
      setDropDownContent(null);
    } else {
      setDropDownContent(DropDownContentEnum.SearchDropDown);
    }
  };

  const handleCloseDropDownMenu = () => {
    setDropDownContent(null);
  };

  // const handleSearch = () => {};

  const showSearchResults = () => {
    return;
  };

  return (
    <div
      className={`z-nav_bar shadow-sm shadow-light_gray_bg/10 bg-light_pry_bg/30 sticky top-0 left-0 flex justify-between items-center w-full h-fit md:h-full px-4 xl:px-20 py-3 border-b-[.4px] border-light_border_color/30 backdrop-blur-md`}
    >
      <section className="flex flex-row justify-center gap-3">
        {/* TOGGLED MENU SMALL DEVs */}
        <button onClick={toggleMenu} className={`md:hidden`}>
          {isOpen ? (
            <img
              src={CloseGreyIcon}
              alt="close"
              className="w-5 h-4"
            />
          ) : (
            <img src={BurgerMenu} alt="menu" className="w-5 h-4" />
          )}
        </button>

        {/* HOME BUTTON */}
        <button
          className=" text-main_font text-base md:text-[1.2rem] font-bold"
          onClick={goHome}
        >
          {`quidberg`}
        </button>
      </section>

      <section className="flex flex-row gap-3 items-center">
        {/* SEARCH BAR */}
        <div ref={dropdownRef}>
          {
            <SearchButton
              placeholder={
                "Search Courses, Tutorials, Resources, Information"
              }
              handleSearch={handleNavSearchButton}
            />
          }
          {/* BOTTOM SECTION FOR DROP DOWN MENUS */}
          <div>
            <SearchDropDown
              isOpen={
                dropDownContent === DropDownContentEnum.SearchDropDown
              }
              handleClose={handleCloseDropDownMenu}
              showSearchResults={showSearchResults}
            />
          </div>
        </div>

        {/* AUTH OPTIONS */}
        {!auth && (
          <div className="flex flex-row items-center pl-4 text-sm md:text-base gap-3  ">
            <div className="w-[1.2px] h-7 bg-light_border_color"></div>
            {/* sign in */}
            <button onClick={() => handleAuth(AuthType.signin)}>
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
        )}
      </section>

      {/* OPTION MENU BUTTON*/}
      {auth && (
        // display if user authenticated
        <button
          className={cn(`md:hidden `, isOpen && "hidden")}
          onClick={() => dispatch(showModal("filterModal"))}
        >
          <img src={ThreeDotMenu} alt="menu" className="w-6 h-5" />
        </button>
      )}
    </div>
  );
};

export default TopNav;
