import CancelButton from "../../../../../shared/comps/ui/buttons/CancelButton";
import RoundedButton from "../../../../../shared/comps/ui/buttons/RoundedButton";
import { Modal } from "../../../../../shared/comps/ui/modal";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const UpdatedDataModal = ({ isOpen, close }: Props) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col items-center justify-center p-3 py-4 md:p-8 gap-7">
        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <CancelButton onClick={close} className={"w-4 h-4"} />
        </div>
        <section className="mt-8 text-center flex flex-col gap-4 ">
          <p className="">{`You changed ${""} to ${""}`}</p>
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
        </section>
      </div>
    </Modal>
  );
};

export default UpdatedDataModal;
