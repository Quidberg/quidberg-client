import { ReactElement } from "react";
import CancelButton from "../../../components/buttons/CancelButton";
import { Modal } from "../../../components/modal";
import { ModalCompProps } from "../../../components/modal/Modal";

interface Props extends ModalCompProps {
  children: ReactElement;
}

const InfoModal = ({ children, isOpen, close }: Props) => {
  return (
    <Modal close={close} isOpen={isOpen}>
      <div className="flex flex-col items-center justify-center p-4 gap-2 min-w-[300px] max-w-[400px] xl:min-w-[400px] min-h-[50px]">
        <div className="absolute top-4 right-4">
          <CancelButton onClick={close} className={"w-4 h-4"} />
        </div>
        <section className="mt-10">

        {children}
        </section>
      </div>
    </Modal>
  );
};

export default InfoModal;
