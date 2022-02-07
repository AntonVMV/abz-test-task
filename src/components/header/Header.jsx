import "./header.scss";
import { useInnerWidth } from "../../hook/useInnerWidth";
import { SideMenu } from "../elements/sideMenu/SideMenu";
import { useState } from "react";
import { MainPortal } from "../elements/MainPortal";

const menuItems = [
  "About me",
  "Relationships",
  "Requirements",
  "Users",
  "Sign Up",
];

export const Header = () => {
  const [isSideMenu, setSideMenu] = useState(false);
  const size = useInnerWidth();

  return (
    <header className="header">
      <div className="main-container header__container">
        <a href="/" className="header__logo">
          <img src="./img/Logo.svg" alt="Logo" />
        </a>
        {size === "desktop" ? (
          <nav className="navigation header__navigation">
            {menuItems.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item === "Sign Up" ? "/#register-field" : "/"}
                  className="navigation__link text"
                >
                  {item}
                </a>
              );
            })}
          </nav>
        ) : (
          <img
            src="./img/Menu.png"
            alt="Menu icon"
            onClick={() => setSideMenu(true)}
          />
        )}
        {isSideMenu && (
          <MainPortal>
            <SideMenu onClose={() => setSideMenu(false)} />
          </MainPortal>
        )}
      </div>
    </header>
  );
};
