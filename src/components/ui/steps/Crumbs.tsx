import LeftSkip from "../../../assets/comps/LeftSkipIcon";

type CrumbItemType = { title: string; position: number; id: string };

type CrumbsPropType = {
  currentPosition: number;
  max?: number;
  crumbList: CrumbItemType[];
  handleCrumbStep: (position: number) => void;
};

const Crumb = ({
  isActive,
  crumbItem,
  handleStep,
  currentPosition,
}: {
  isActive: boolean;
  crumbItem: CrumbItemType;
  handleStep: (position: number) => void;
  currentPosition: number;
}) => {
  const {
    // id,
    position,
    title,
  } = crumbItem;
  const handleStepChange = () => {
    handleStep(position);
  };
  return (
    <>
      {/* small devices */}
      <div
        className={`h-[6px] w-[20px] rounded-full md:hidden ${
          isActive ? "bg-main_bg " : " bg-[#E9E9E9]"
        } `}
        onClick={handleStepChange}
      ></div>

      {/* large devices */}
      <div
        className={`hidden md:flex  gap-1 items-center cursor-pointer ${
          position > currentPosition && "md:hidden"
        }`}
        onClick={handleStepChange}
      >
        <p
          className={` text-sm truncate ${
            isActive ? "text-main_bg " : "text-light_font"
          }
        
        `}
        >
          {title}
        </p>
        <div
          className={`${
            (!currentPosition || position === currentPosition) && "hidden"
          }`}
        >
          <LeftSkip color={`#858181`} />
        </div>
      </div>
    </>
  );
};

const Crumbs = ({
  currentPosition,
  // max,
  crumbList,
  handleCrumbStep,
}: CrumbsPropType) => {
  return (
    <div className="flex gap-3 justify-center items-center">
      {/* {Array.from({ length: max }, (_, index) => (
        <Crumb key={index} isActive={index === position} crumbItem={crumbList} handleStep={handleStep}/>
      ))} */}
      {crumbList.map((crumb, index) => (
        <Crumb
          key={index}
          isActive={index === currentPosition}
          crumbItem={crumb}
          handleStep={handleCrumbStep}
          currentPosition={currentPosition}
        />
      ))}
    </div>
  );
};

export default Crumbs;
