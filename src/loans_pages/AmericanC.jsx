import React, { useState } from 'react';

const AmericanC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="w-3/4 mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-4xl text-center font-semibold mb-4">Sustainable Credit Card</h2>
      <div className="mb-8">
        <p className="text-xl">Features:</p>
        <ul className="list-disc pl-8">
          <li>Rs. 1000 cashback as Welcome Gift on green investment</li>
          <li>500 bonus points on sustainable products purchase of Rs. 10,000 in the first 90 days of Cardmembership</li>
          <li>First Year Fee: Rs. 495 plus applicable taxes (Second Year onwards: Rs. 495 plus applicable taxes)</li>
          {/* Add more features here */}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl mb-4">Apply for Sustainable Credit Card</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4 text-xl">
              <label htmlFor="fullName" className="block mb-1">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter full name" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="email" className="block mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter email address" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter phone number" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="address" className="block mb-1">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter address" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="city" className="block mb-1">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter city" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="state" className="block mb-1">State</label>
              <input 
                type="text" 
                id="state" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter state" 
              />
            </div>
            <div className="mb-4 text-xl">
              <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
              <input 
                type="text" 
                id="zipCode" 
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleChange} 
                className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
                placeholder="Enter zip code" 
              />
            </div>
          </div>
          <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2 mt-4">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default AmericanC;
