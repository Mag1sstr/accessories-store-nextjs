import { useEffect, useState } from "react";

interface Width {
  isTab: boolean;
  isMobile: boolean;
}

export const useWindowWidth = (): Width => {
  const [isTab, setIsTab] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 576 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      const tab = window.innerWidth <= 768;
      const mobile = window.innerWidth <= 576;
      setIsMobile((prev) => {
        if (prev !== mobile) return mobile;
        return prev;
      });
      setIsTab((prev) => {
        if (prev !== tab) return tab;
        return prev;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isTab, isMobile };
};
