import { NavLinksPropsType } from "./Links";
import NavLinkButton from "./NavLinkButton";

type SideNavPropType = {
  navLinks: NavLinksPropsType[];
  handleNav: (link: string) => void;
  currentPath: string;
};

const SideNav = ({
  navLinks,
  handleNav,
  currentPath,
}: SideNavPropType) => {
  return (
    <div
      className={`hidden md:flex fixed z-side_bar top-[100px] left-3  h-fit  flex-col gap-4 md:gap-1 px-1 items-start  
        w-fit max-w-[200px]  md:bg-light_nav_bg/[19%] rounded-md
        `}
    >
      {navLinks?.map(({ name, alias, link, Icon }) => {
        const isActive = currentPath === link;
        return (
          <NavLinkButton
            link={link}
            isActive={isActive}
            key={name}
            handleNav={handleNav}
            Icon={Icon}
            title={name}
            alias={alias}
          />
        );
      })}
    </div>
  );
};

export default SideNav;
