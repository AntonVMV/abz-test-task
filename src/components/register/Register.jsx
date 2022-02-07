import "./register.scss";
import { RegisterForm } from "../elements/registerForm/RegisterForm";
import { Modal } from "../elements/modal/Modal";
import { MainPortal } from "../elements/MainPortal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Register = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { postData } = useSelector((store) => store.usersReducer);

  useEffect(() => {
    if (postData && postData.success) {
      setModalOpen(true);
    }
  }, [postData]);

  return (
    <section className="register">
      <div className="main-container register__container" id="register-field">
        <h2 className="title-l register__title">Register to get a work</h2>
        <h3 className="title-m register__subtitle">
          Your personal data is stored according to the Privacy Policy
        </h3>
        <RegisterForm />

        <div className="register__bg">
          <img
            src="./img/Footprint.svg"
            alt="background footprints"
            className="register__bg-image"
          />
        </div>
        {isModalOpen && (
          <MainPortal>
            <Modal onClose={() => setModalOpen(false)} />
          </MainPortal>
        )}
      </div>
    </section>
  );
};
