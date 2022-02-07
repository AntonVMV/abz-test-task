import { ButtonEl } from "../ButtonEl";
import "./modal.scss";

export const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h3 className="title-m modal__title">Congratulations</h3>
        <p className="text modal__text">
          You have successfully passed the registration
        </p>
        <div className="modal__button">
          <ButtonEl className="button " text={"Great"} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
