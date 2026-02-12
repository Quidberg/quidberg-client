
type PropsType = {
  onClick: () => void;
};

const RemoveButton = ({ onClick }: PropsType) => {
  return (
    <button className="text-remove_red text-sm font-medium" onClick={onClick}>
      Remove
    </button>
  );
};

export default RemoveButton;
