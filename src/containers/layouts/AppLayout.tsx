import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNav from "../nav_bar/SideNav";
import { useState } from "react";
import { navLinks } from "../nav_bar/Links";
import TopNav from "../nav_bar/TopNav";
import DropDownMenu from "../dropDowns/DropDownMenu";
import AuthModal from "../authentication/AuthModal";
import { AuthRegType } from "../../app/slices/auth/types";
import useAuthModal from "../authentication/useAuthModal";

const AppLayout = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  // const [authType, setAuthType] = useState<AuthRegType>(null)
  const {openAuthModal, closeAuthModal, isAuthModalOpen}= useAuthModal()

  const handleNav = (link: string) => {
    // Trigger Navigation when link is clicked
    setIsOpen(false);
    navigate(link);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  

  const handleAuth = (type:AuthRegType)=>{
    openAuthModal(type)
  }

  return (
    <div className="flex flex-col">
      {/* MODALS */}
      <AuthModal isOpen= {isAuthModalOpen} close={closeAuthModal}  />

      {/* TOP MENU */}
        <TopNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navigate={navigate}
          navLinks={navLinks}
          handleNav={handleNav}
          currenPath={currentPath}
          handleAuth={handleAuth}
        />

      <section className="relative h-screen flex flex-row ">
          {/* SIDE MENU */}
          <SideNav
            currentPath={currentPath}
            handleNav={handleNav}
            navLinks={navLinks}
          />

        {/* DYNAMIC CONTENT */}
        <div className="relative m-0 md:ml-[80px] lg:ml-[150px] xl:ml-[200px] flex w-full  mt-4 md:mt-6 xl:mt-10 px-2 xl:px-5">
          <Outlet />
        </div>
      </section>

      {/*DROPDOWN MENU ON SMALL DEVICES */}

      {isOpen && (
          <DropDownMenu
            isOpen={isOpen}
            navLinks={navLinks}
            handleNav={handleNav}
            currentPath={currentPath}
            handleClose={handleClose}
          />
      )}
    </div>
  );
};

export default AppLayout;
