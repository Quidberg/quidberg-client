import { useEffect, useRef, } from "react";

export const useListenForOutsideClicks = (
  closeDropdown: () => void,
  isToggle: boolean
) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [listening, setListening] = useState(false);
  const unListen = () => {
    document?.removeEventListener(`click`, evListener);
  };

  const evListener = (evt: any) => {
    console.log("drop clicked");
    if (dropdownRef?.current?.contains(evt?.target)) return;
    closeDropdown();
    unListen();
  };

  const listenForOutsideClicks = () => {
    return () => {
      if (!dropdownRef?.current) return;
      document?.addEventListener(`click`, evListener);
    };
  };

  useEffect(
    listenForOutsideClicks(),
    // if (!dropdownRef?.current) document?.removeEventListener(`click`, evListener, true);

    [isToggle]
  );

  return { listenForOutsideClicks, dropdownRef, unListen };
};
