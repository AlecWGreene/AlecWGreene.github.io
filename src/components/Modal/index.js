import React, { useEffect, useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "./style.css"

function ContactModal(props){
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        props.button.current.addEventListener("click", () => {
            setVisibility(true);
        });
    }, []);

    return (
        <Modal show={visible} onHide={() => setVisibility(false)} contentClassName={"contactModal"}>
            {/* Header */}
            <ModalHeader className={"contactModalHeader"}>
                Find me on one of these online profiles or send me a message!
            </ModalHeader>

            {/* Body */}
            <ModalBody className={"contactModalBody"}>
                <ul className="contactModalList">
                    <li className="contactModalListItem"><a className="contactModalListLink" href="https://github.com/AlecWGreene" target="_blank">GitHub</a></li>
                    <li className="contactModalListItem"><a className="contactModalListLink" href="https://www.linkedin.com/in/alec-greene-29a5b41b4/" target="_blank">LinkedIn</a></li>
                </ul>

                <span>Email:</span><span>alecwgreene@gmail.com</span>
            </ModalBody>
        </Modal>
    );
}

export default ContactModal;