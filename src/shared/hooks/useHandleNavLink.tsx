import { useNavigate } from "react-router-dom";
import { navLinks } from "../../components/containers/nav_bar/Links";

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
