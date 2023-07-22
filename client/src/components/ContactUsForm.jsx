import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUsForm = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        mobileNumber: '',
        subject: '',
        message: '',
      };

    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to set up your own EmailJS account and template for this to work
    const serviceId = "service_gsdm27f";
    const templateId = "template_3pmflrk";
    const userId = "rcyAo91xkCVPVf7Iw";

    const templateParams = {
        from_name: formData.fullName,
        email_id: formData.email,
        tp_no: formData.mobileNumber,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setSuccessMessage('Successfully sent the message!');
        setErrorMessage('');
        setFormData(initialFormData); // Clear the form after successful submission
        // window.alert('Email sent successfully!'); // Display popup success message
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Error sending the message. Please try again later.');
        setSuccessMessage('');
        // window.alert('Error sending the message. Please try again later.'); // Display popup error message
      });
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-semibold text-sm">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="w-full mt-1 px-4 py-1 border rounded-lg focus:border-gray-700"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold text-sm">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full mt-1 px-4 py-1 border rounded-lg focus:border-gray-700"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block text-gray-700 font-semibold text-sm">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          className="w-full mt-1 px-4 py-1 border rounded-lg focus:border-gray-700"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-semibold text-sm">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full mt-1 px-4 py-1 border rounded-lg focus:border-gray-700"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-semibold text-sm">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full mt-1 px-4 py-5 border rounded-lg focus:border-gray-700"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {successMessage && (
        <div className="text-green-600 font-bold mb-2">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="text-red-600 font-bold mb-2">{errorMessage}</div>
      )}
      <button
        type="submit"
        className="bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded-xl w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
