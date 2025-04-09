
const AddExamination = ({
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="max-w-[500px] w-full flex justify-center bg-[#2A2A2B] text-white rounded-full"
      onClick={onClick}
    >
      <div className="flex gap-4 justify-center items-center py-[8px] font-main_header_weight ">
        <h2>Add Examination</h2>
      </div>
    </button>
  );
};

export default AddExamination;
