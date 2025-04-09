import { closeModal as close } from "../../../../app/slices/modal/modalSlice";
import { useAppDispatch } from "../../../../app/hooks/regHook";
import { Modal } from "../../../ui/modal";

type FilterModalPropTypes = {
  isOpen: boolean;
};

const FilterModal = ({ isOpen }: FilterModalPropTypes) => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(close("filterModal"));
  };
  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <div>
        <p>filtermodal</p>
      </div>
    </Modal>
  );
};

export default FilterModal;
