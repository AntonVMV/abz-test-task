import "./sideMenu.scss";

const menuLinks = [
  ["About me", "Relationship", "Users", "Sign up", "Terms and Conditions"],
  ["How it works", "Partnership", "Help", "Level testimonial", "Contact us"],
  ["Articles", "Our news", "Testimonials", "Licenses", "Privacy Policy"],
];

export const SideMenu = ({ onClose }) => {
  return (
    <div className="side-menu" onClick={onClose}>
      <div className="side-menu__container">
        <a href="/" className="side-menu__logo">
          <img src="./img/Logo.svg" alt="Logo" />
        </a>
        <div className="side-menu__content">
          {menuLinks.map((item, index) => {
            return (
              <ul key={index} className="side-menu__list">
                {item.map((link, index) => {
                  return (
                    <li key={index} className="side-menu__element">
                      <a
                        href={link === "Sign up" ? "/#register-field" : "/"}
                        className="text side-menu__link"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
