// import { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../buttons/Button";
import CloseIcon from "../../../../assets/comps/CloseIcon";
import { cn } from "../../../utils";
// import {
//   DialogContent,
//   DialogOverlay,
//   DialogPortal,
//   DialogRoot,
// } from "./RadixModal";
import * as Dialog from "@radix-ui/react-dialog";

export interface ModalCompProps {
  isOpen: boolean;
  close: () => void;
  children: JSX.Element;
  dialogClassName?: string;
  shouldPreventUserFromClosing?: boolean; // specifies if user should not be able to close the modal.
  showCloseButton?: boolean;
}

export const Modal = ({
  isOpen,
  children,
  dialogClassName,
  shouldPreventUserFromClosing,
  close,
  showCloseButton,
}: ModalCompProps) => {
  const handleClose = shouldPreventUserFromClosing
    ? () => {
        return;
      }
    : close;

  return (
    // <Transition.Root show={isOpen} as={Fragment}>
    // <DialogRoot
    //   // as="div"
    //   // className="relative z-[292929]"
    //   open={isOpen}
    //   // defaultOpen
    // >
    //   <DialogPortal>
    //     {/* overlay */}

    //     <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.25)] bg-opacity-75 transition-opacity" />

    //     {/* main modal container */}
    //     <DialogContent className="fixed inset-0 z-10 overflow-y-auto">
    //       <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
    //         {/* main modal panel */}
    //         <div
    //           className={cn(
    //             `relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all min-w-[100px] max-w-[99%]  min-h-fit max-h-[90vh] ${
    //               dialogClassName ? dialogClassName : ""
    //             }`
    //           )}
    //         >
    //           {showCloseButton && (
    //             <div className="w-full flex justify-end px-3">
    //               <Button
    //                 className="px-1"
    //                 variant={"plain"}
    //                 onClick={handleClose}
    //               >
    //                 {<CloseIcon />}
    //               </Button>
    //             </div>
    //           )}
    //           {children}
    //         </div>
    //       </div>
    //     </DialogContent>
    //   </DialogPortal>
    // </DialogRoot>

    <Dialog.Root open={isOpen} onOpenChange={close}>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[292929] fixed inset-0 bg-[rgba(0,0,0,0.25)] bg-opacity-75 transition-opacity" />
        <Dialog.Content className="z-[292929] bg-white fixed top-1/2 w-full sm:w-fit max-w-[97vw] sm:max-w-[80vw] md:max-w-[70vw] max-h-[90vh] left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg p-3 shadow-xl transition-all">
          <div className="flex min-h-full w-full items-center justify-center p-4 text-center sm:items-center sm:p-0 ">
            {/* main modal panel */}
            <div
              className={cn(
                `relative transform overflow-hidden text-left  sm:min-w-[100px] w-full sm:w-fit min-h-fit max-h-[90vh] ${
                  dialogClassName ? dialogClassName : ""
                }`
              )}
            >
              {showCloseButton && (
                <div className="w-full flex justify-end px-3">
                  <Button
                    className="px-1"
                    variant={"plain"}
                    onClick={handleClose}
                  >
                    {<CloseIcon />}
                  </Button>
                </div>
              )}
              {children}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>

    // </Transition.Root>
  );
};
