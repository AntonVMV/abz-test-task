import "./welcome.scss";
import { ButtonEl } from "../elements/ButtonEl";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__bg">
        <div className="main-container welcome__container">
          <div className="welcome__content">
            <h1 className="title-l welcome__title">
              Test assignment for front-end developers
            </h1>
            <p className="text welcome__text">
              Front-end developers make sure the user sees and interacts with
              all the necessary elements to ensure conversion.{" "}
              <span className="welcome__text_big">
                Therefore, responsive design, programming languages and specific
                frameworks are the must-have skillsets to look for when
                assessing your front-end developers.
              </span>
            </p>
            <ButtonEl text={"Sign up"} href={"/#register-field"} />
          </div>
        </div>
      </div>
    </section>
  );
};
