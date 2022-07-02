import React, { useEffect } from "react";

type Listener = () => void;

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  listener: Listener
) {
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!ref.current || !target || ref.current.contains(target)) {
        return;
      }
      listener();
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, listener]);
}
