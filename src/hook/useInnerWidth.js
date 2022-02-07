import { useEffect, useState } from "react";

export const useInnerWidth = () => {
  const [size, setSize] = useState();

  useEffect(() => {
    upadteSize();
    window.addEventListener("resize", upadteSize);
    return () => window.removeEventListener("resize", upadteSize);
  }, []);

  function upadteSize() {
    if (window.innerWidth < 767) {
      setSize("mobile");
    } else if (window.innerWidth > 767 && window.innerWidth < 1023) {
      setSize("tablet");
    } else if (window.innerWidth > 1023) {
      setSize("desktop");
    }
  }

  return size;
};
