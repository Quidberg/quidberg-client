import { useEffect, useRef } from "react";

function getNodeFromEvent(e: Event): Node | null {
  return e.target instanceof Node ? e.target : null;
}

export const useListenForOutsideClicks = (
  closeDropdown: () => void,
  isToggle: boolean
) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [listening, setListening] = useState(false);
  const unListen = () => {
    document?.removeEventListener(`click`, evListener);
  };

  const evListener = (evt: Event) => {
    const target = getNodeFromEvent(evt);
    if (dropdownRef?.current?.contains(target)) return;
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
