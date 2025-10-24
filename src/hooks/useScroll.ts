import { useEffect, useRef } from "react";

export function useScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);
  return ref;
}
