import { ButtonEl } from "../elements/ButtonEl";
import "./about.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="main-container about__container">
        <img
          src="./img/about-image.webp"
          alt="about container"
          className="about__image"
        />

        <div className="about__content">
          <h2 className="title-l about__title">Let's get acquainted</h2>
          <h3 className="title-m about__subtitle">
            I'm a good front-end developer
          </h3>
          <p className="text about__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <ButtonEl text={"Sign up"} href={"/#register-field"} />
        </div>
      </div>
    </section>
  );
};
