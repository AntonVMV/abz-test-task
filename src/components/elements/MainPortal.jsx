import { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRootEl = document.querySelector("body");

export const MainPortal = ({ children }) => {
  const element = document.createElement("div");

  useEffect(() => {
    modalRootEl.appendChild(element);

    return () => modalRootEl.removeChild(element);
  }, []);

  return createPortal(children, modalRootEl);
};
