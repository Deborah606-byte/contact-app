import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md w-96 relative">
        <div className="absolute top-0 right-0 mt-1 mr-1 cursor-pointer">
          <FontAwesomeIcon icon={faTimes} onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

function Navbar() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const closeModal = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-gray-900 text-4xl">Concreate</h1>
        <h3 className="text-xl text-red-300">Contact List & Details</h3>
        <button
          className="bg-gray-900 text-white rounded-full px-7 py-2"
          onClick={toggleContactForm}
        >
          Add Contact
        </button>
      </div>
      <Modal isOpen={showContactForm} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </>
  );
}

export default Navbar;
