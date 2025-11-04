import { Ref, RefObject, useEffect } from "react";

export const useClickOutside = (
  setOpen: (b: boolean) => void,
  ref: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    function handleOutsideClick(event: PointerEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
};
