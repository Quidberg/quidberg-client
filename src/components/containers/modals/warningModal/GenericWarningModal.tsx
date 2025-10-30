import CancelButton from "../../../ui/buttons/CancelButton";
import RoundedButton from "../../../ui/buttons/RoundedButton";
import { Modal } from "../../../ui/modal";

export type WarningProps = {
  isOpen: boolean;
  close: () => void;
  proceed: () => void;
  headerText?: string;
  proceedButtonText?: string;
  warningMsg?: string;
};

const GenericWarningModal = ({
  isOpen,
  close,
  proceed,
  proceedButtonText,
  warningMsg,
  headerText,
}: WarningProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col items-center justify-center p-3 py-4 md:p-8 gap-7">
        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <CancelButton onClick={close} className={"w-4 h-4"} />
        </div>
        <section className="mt-8 text-center flex flex-col gap-4 ">
          {headerText && (
            <h1 className="font-semibold text-[18px] md:text-lg text-main_bg hover:text-main_bg/70">
              {headerText}
            </h1>
          )}
          <p className="">{warningMsg}</p>
        </section>
        <section className="w-full flex gap-4 justify-center">
          <RoundedButton
            onClick={close}
            isOutlined
            textColor="text-[#0A0A0A]"
            outlineColor="border-[#0A0A0A]"
          >
            Cancel
          </RoundedButton>
          <RoundedButton onClick={proceed}>
            {proceedButtonText || "Proceed"}
          </RoundedButton>
        </section>
      </div>
    </Modal>
  );
};

export default GenericWarningModal;
