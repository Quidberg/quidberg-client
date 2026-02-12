import { useNavigate } from "react-router-dom";
import { navLinks } from "../comps/ui/nav_bar/Links";

export const useHandleNavToLink = () => {
  const navigateTo = useNavigate();

  const navigate = (id: string) => {
    const nav = navLinks?.find(
      (link) => link.alias.toLowerCase() === id.toLowerCase()
    );

    if (nav) {
      navigateTo(nav.link);
    }
  };

  return { navigate };
};
