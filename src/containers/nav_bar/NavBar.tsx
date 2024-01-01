import { useState } from "react";
import {  useNavigate } from "react-router-dom";

import TopNav from "./TopNav";

const isOpenClass = (): string => {
  return "h-full fixed ";
};

const NavBar = () => {
  const navigate = useNavigate();
  //   const selectIsOpenMenu = useAppSelector()
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav
      className={`flex flex-col z-[100]  
     bg-[#FFFFFF] w-full gap-10 md:gap-0 ${isOpen ? isOpenClass() : "h-fit"}
       md:h-full
      `}
    >
      

      
    </nav>
  );
};

export default NavBar;
