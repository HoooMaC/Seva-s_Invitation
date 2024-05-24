import ReactDOM from "react-dom";

import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div id="modal">{children}</div>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
