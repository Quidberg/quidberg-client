export type TabsType = {
  title: string;
  id: string;
  isActive: boolean;
};

type TabsPropsType = {
  tabsList: TabsType[];
  handleClickTab: (
    id: string
  ) => void;
};
const Tabs = ({
  tabsList,
  handleClickTab,
}: TabsPropsType) => {
  const handleTab = (
    id: string
  ) => {
    console.log(id);
    handleClickTab(id);
  };

  return (
    <div className="flex items-start justify-around sm:justify-start w-full gap-5 border-b-[0.8px] border-light_border_color/40">
      {tabsList.map(
        ({
          id,
          title,
          isActive,
        }) => (
          <button
            key={id}
            className="flex flex-col gap-1"
            onClick={() => {
              handleTab(id);
            }}
          >
            <p
              className={`${
                isActive
                  ? ""
                  : "text-light_font text-sm"
              }`}
            >
              {title}
            </p>
            <div
              className={`h-[2px] w-full  rounded-full ${
                isActive
                  ? "bg-main_bg"
                  : "bg-inherit"
              }`}
            ></div>
          </button>
        )
      )}
    </div>
  );
};

export default Tabs;
