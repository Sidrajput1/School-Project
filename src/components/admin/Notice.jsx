import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import HomeLayout from '../../layout/HomeLayout';

function CreateNoticeForm() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    title: '',
    details: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/v1/admin/noticecreate', formData);
      console.log(response.data); // Log the response from the API
      // Reset form after successful submission
      setFormData({ title: '', details: '' });
      alert('Notice created successfully!');
    } catch (error) {
      console.error('Error creating notice:', error.response.data.message);
      alert('Failed to create notice. Please try again.');
    }
  };

  return (
    <HomeLayout>
    {/* <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="details">Details:</label>
      <textarea
        id="details"
        name="details"
        value={formData.details}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Create Notice</button>
    </form> */}
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create Notice</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Details:</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Notice</button>
      </form>
    </div>
    </HomeLayout>
  );
}

export default CreateNoticeForm;
