import React from "react";

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}) => {
  const inputProps = {
    id: name,
    name: name,
    className: "w-full p-2 border border-gray-300 rounded",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-red-300 font-bold mb-2 text-left"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    shortBio: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className="max-w-2xl mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
        />
        <InputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <InputField
          label="Address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your Address"
        />
        <InputField
          label="Short Biography"
          name="shortBio"
          type="textarea"
          value={formData.shortBio}
          onChange={handleChange}
          placeholder="Your Short Biography"
        />
        <InputField
          label="Nationality"
          name="nationality"
          type="text"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="Your Nationality"
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4 block mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
