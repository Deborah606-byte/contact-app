import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ fullName, phoneNumber, initials }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center mb-4">
      <div className="flex-shrink-0">
        {/*Initials*/}
        <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-300 text-gray-600">
          <span className="text-lg font-semibold">{initials}</span>
        </div>
      </div>
      <div className="ml-4">
        {/* Full name */}
        <p className="text-lg font-semibold">{fullName}</p>

        {/* Phone number */}
        <p className="text-red-300">{phoneNumber}</p>
      </div>
      <div className="flex-grow" />
      <div className="flex-shrink-0 space-x-2">
        {/* Edit and delete icons */}
        <FontAwesomeIcon
          icon={faEdit}
          className="text-blue-500 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

const ContactList = () => {
  // Structure of contact card
  const contacts = [
    {
      id: 1,
      fullName: "Alice Normad",
      phoneNumber: "+233-54-0986-09876",
      initials: "AN",
    },
    {
      id: 2,
      fullName: "Felix Adjorlolo",
      phoneNumber: "+230-20-0235-12890",
      initials: "FA",
    },
  ];

  return (
    <div>
      {/* Maping through contacts and rendering ContactCard for each */}
      {contacts.map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
