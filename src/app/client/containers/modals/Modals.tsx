import { useAppSelector } from "../../store/hooks/regHook";
import { selectModal } from "../../store/slices/modal/modalSlice";
import FilterModal from "./filterModal/FilterModal";

const Modals = () => {
  const selectFilterModal = useAppSelector(
    selectModal("filterModal")
  );

  return (
    <>
      <FilterModal isOpen={selectFilterModal} />
    </>
  );
};

export default Modals;
