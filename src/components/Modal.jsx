import React from "react";

import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button.jsx";
import {
  faArrowsRotate,
  faCircleCheck,
  faCircleXmark,
  faClipboardList,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ModalTemplate = ({ children }) => {
  return (
    <div className="background modal-background">
      <div className="modal-success">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export const ModalImagePreview = ({
  image,
  changeCallback,
  deleteCallback,
  exitCallback,
}) => {
  return (
    <ModalTemplate>
      <Button
        className="modal-close-button"
        onClick={() => exitCallback(false)}
      >
        <FontAwesomeIcon icon={faCircleXmark} color="red" size="xl" />
      </Button>
      <div className="modal-preview">
        <div className="modal-image">
          <img className="modal-image-preview" src={image} alt="" />
        </div>
        <Button
          className="delete-modal-button"
          onClick={() => deleteCallback()}
        >
          <FontAwesomeIcon icon={faTrashCan} />
          delete
        </Button>
        <Button
          className="change-modal-button"
          onClick={() => changeCallback()}
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
          change
        </Button>
      </div>
    </ModalTemplate>
  );
};

export const ModalSuccess = ({ title, message, buttonMessage }) => {
  return (
    <ModalTemplate>
      <FontAwesomeIcon icon={faCircleCheck} color="#16e816" size="6x" />
      <div>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
      </div>
      <Button to="/greetings" className="modal-button">
        <FontAwesomeIcon icon={faClipboardList} color="#fff" size="lg" />
        {buttonMessage}
      </Button>
    </ModalTemplate>
  );
};
export default ModalSuccess;
