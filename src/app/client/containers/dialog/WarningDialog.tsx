import CloseIcon from "../../../../assets/comps/CloseIcon";
import { Button } from "../../../../shared/comps/ui/buttons/Button";
import { Modal } from "../../../../shared/comps/ui/modal";

type Props = {
  title: string;
  description: string;
  handleAction: (payload?: string) => void;
  isOpen: boolean;
  actionText: string;
  close: () => void;
};

const WarningDialog = ({
  title,
  description,
  handleAction,
  isOpen,
  actionText,
  close,
}: Props) => {
  return (
    <Modal close={close} isOpen={isOpen}>
      <div className="flex flex-col gap-2 p-3">
        <div className="w-full flex justify-end">
          <Button variant={"plain"} className="px-1">
            <CloseIcon />
          </Button>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="w-full flex justify-end">
          <Button onClick={() => handleAction()} className="w-fit ">
            {actionText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WarningDialog;
