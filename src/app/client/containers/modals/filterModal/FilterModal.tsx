import { closeModal as close } from "../../../store/slices/modal/modalSlice";
import { useAppDispatch } from "../../../store/hooks/regHook";
import { Modal } from "../../../../../shared/comps/ui/modal";

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
