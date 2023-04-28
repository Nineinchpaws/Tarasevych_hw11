import React, { Fragment } from "react";
import './Modal.css';

const Modal = ({ onClose }) => {
    return (
        <Fragment>
            <div className="modal-wrapper" onClick={onClose}></div>
            <div className="modal-window">
                <h2>Modal window content</h2>
                <p>
                    <button onClick={onClose}>X</button>
                </p>
            </div>
        </Fragment>
    )
}

export default Modal;
