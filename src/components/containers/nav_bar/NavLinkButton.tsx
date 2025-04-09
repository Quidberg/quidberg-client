export type NavLinkButtonPropType = {
  link: string;
  isActive: boolean;
  Icon: ({ color }: { color: string }) => JSX.Element;
  title: string;
  alias: string;
  handleNav: (link: string) => void;
};

const NavLinkButton = ({
  link,
  isActive,
  handleNav,
  Icon,
  title,
  alias,
}: NavLinkButtonPropType) => {
  const onClick = () => {
    handleNav(link);
  };
  return (
    <button
      className={`text-start text-xs md:text-[0.8rem] font-normal  w-full p-2 
      md:text-center flex flex-col md:justify-center md:items-center ${
        isActive
          ? " text-[#ffffff] bg-nav_link/80 rounded-md"
          : " text-nav_link"
      }
      `}
      onClick={onClick}
    >
      <div className="w-7 hidden md:flex m-1">
        {Icon && <Icon color={`${isActive ? "#ffffff" : "#263238"}`} />}
      </div>
      {/* LARGE DEVICES */}
      <p className={`hidden lg:flex`}>{alias}</p>

      {/* SMALL DEVICES */}
      <p className={`md:hidden`}>{title}</p>
    </button>
  );
};

export default NavLinkButton;
