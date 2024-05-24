import { ReactElement } from "react";
import {  Fragment,  } from "react";
import {  Menu, Transition } from "@headlessui/react";

type DropDownContainerPropType = {
  children: ReactElement;
  isOpen: boolean;
  handleClose: () => void;
  dialogClassName?: string;
};

const DropDownContainer = ({
  children,
  isOpen,
  // handleClose,
  dialogClassName,
}: DropDownContainerPropType) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Menu as="div" className="relative p-4 z-[292929]" >
        {/* overlay */}
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 top-0 bg-[rgba(0,0,0,0.25)] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* main menu container */}
        <div className="relative  z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              {/* main modal panel */}
              <Menu.Items
                className={`relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-full  ${
                  dialogClassName ? dialogClassName : ""
                }`}
              >
                {children}
              </Menu.Items>
            </Transition.Child>
          </div>
        </div>
      </Menu>
    </Transition.Root>
  );
};

export default DropDownContainer;
