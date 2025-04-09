import { useAppSelector } from "../../../app/hooks/regHook";
import { selectModal } from "../../../app/slices/modal/modalSlice";
import FilterModal from "./filterModal/FilterModal";

const Modals = () => {
  const selectFilterModal = useAppSelector(selectModal("filterModal"));

  return (
    <>
      <FilterModal isOpen={selectFilterModal} />
    </>
  );
};

export default Modals;
