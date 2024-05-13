import React from "react";

import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button.jsx";
import {
  faArrowsRotate,
  faCircleXmark, faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const ModalTemplate = ({ children }) => {
  return (
    (<div className="background modal-background">
      <div className="modal-success">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>)
  );
};

export const ModalImagePreview = ({
                                    image,
                                    changeCallback,
                                    deleteCallback,
                                    exitCallback
                                  }) => {

  return (
    <ModalTemplate>
      <Button className="modal-close-button"
              onClick={() => exitCallback(false)}>
        <FontAwesomeIcon
          icon={faCircleXmark} color="red" size="xl" /></Button>
      <div className="modal-preview">
        <div className="modal-image">
          <img className="modal-image-preview"
               src={image} alt="" />
        </div>
        <Button className="delete-modal-button"
                onClick={() => deleteCallback(false)}><FontAwesomeIcon
          icon={faTrashCan} />delete</Button>
        <Button className="change-modal-button"
                onClick={() => changeCallback()}><FontAwesomeIcon
          icon={faArrowsRotate} />change</Button>
      </div>
    </ModalTemplate>
  );
};

export const ModalSuccess = ({
                               icon,
                               title,
                               message,
                               buttonIcon,
                               buttonMessage
                             }) => {
  return (
    <ModalTemplate>
      <img className="modal-icon" src={icon} alt="succes" />
      <div>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
      </div>
      <Button to="/greetings" className="modal-button">
        {buttonIcon &&
          <FontAwesomeIcon icon={buttonIcon} color="#fff" size="lg" />}
        {buttonMessage}
      </Button>
    </ModalTemplate>
  );
};
export default ModalSuccess;
