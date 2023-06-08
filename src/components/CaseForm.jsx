import React, { useState } from "react";

const CaseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    aadharNumber: "",
    lastLocation: "",
    photographs: null,
    gender: "",
    ethnicity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photographs: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      age: "",
      aadharNumber: "",
      lastLocation: "",
      photographs: null,
      gender: "",
      ethnicity: "",
    });
  };

  return (
    <div className="mx-auto max-w-lg">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 text-lg font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="aadharNumber" className="block text-gray-700 text-lg font-medium mb-2">
            Aadhar Number
          </label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastLocation" className="block text-gray-700 text-lg font-medium mb-2">
            Last Location
          </label>
          <input
            type="text"
            id="lastLocation"
            name="lastLocation"
            value={formData.lastLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photographs" className="block text-gray-700 text-lg font-medium mb-2">
            Photographs
          </label>
          <input
            type="file"
            id="photographs"
            name="photographs"
            onChange={handleImageUpload}
            className="w-full"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 text-lg font-medium mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ethnicity" className="block text-gray-700 text-lg font-medium mb-2">
            Ethnicity
          </label>
          <input
            type="text"
            id="ethnicity"
            name="ethnicity"
            value={formData.ethnicity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CaseForm;
