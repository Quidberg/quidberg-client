import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { adminNavLinks } from "../../../../shared/comps/ui/nav_bar/Links";
import SideNav from "../../../../shared/comps/ui/nav_bar/SideNav";
import DropDownMenu from "../../../../shared/comps/ui/nav_bar/DropDownMenu";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import { ADMIN_PRF } from "../../../../routes/AppRoutes";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();
  const handleNav = (link: string) => {
    // Trigger Navigation when link is clicked
    setIsOpen(false);
    navigate(link);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const goHome = () => {
    // Go To Home Page
    navigate(ADMIN_PRF);
  };

  return (
    <div className="flex flex-col ">
      {/* TOP MENU */}
      <div className=" sticky top-0 z-50">
        {/* HOME BUTTON */}
        <Button
          className=" text-main_font text-base md:text-[1.2rem] font-bold m-3 mix-blend-difference"
          onClick={goHome}
          variant={"plain"}
        >
          {`quidberg`}
        </Button>
      </div>

      <section className="relative h-screen flex flex-row ">
        {/* SIDE MENU */}
        <SideNav
          currentPath={currentPath}
          handleNav={handleNav}
          navLinks={adminNavLinks}
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
          navLinks={adminNavLinks}
          handleNav={handleNav}
          currentPath={currentPath}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default AdminLayout;
