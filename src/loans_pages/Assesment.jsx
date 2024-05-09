import React, { useState } from 'react';

const Assesment = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    businessType: '',
    loanAmount: '',
    yearsInOperation: '',
    sustainabilityInitiatives: '',
    renewableEnergyUsage: '',
    wasteReductionPractices: ''
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
      <h2 className="text-4xl text-center font-semibold mb-4">Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-8 text-xl">
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Email Address" 
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
            placeholder="Phone Number" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="businessType" className="block mb-1">Business Type</label>
          <input 
            type="text" 
            id="businessType" 
            name="businessType" 
            value={formData.businessType} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Business Type" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="loanAmount" className="block mb-1">Loan Amount Needed ($)</label>
          <input 
            type="number" 
            id="loanAmount" 
            name="loanAmount" 
            value={formData.loanAmount} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="How much loan amount do you need" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="yearsInOperation" className="block mb-1">Years in Operation</label>
          <input 
            type="number" 
            id="yearsInOperation" 
            name="yearsInOperation" 
            value={formData.yearsInOperation} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Number of years" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="sustainabilityInitiatives" className="block mb-1">Sustainability Initiatives</label>
          <textarea 
            id="sustainabilityInitiatives" 
            name="sustainabilityInitiatives" 
            value={formData.sustainabilityInitiatives} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 h-40" 
            placeholder="Sustainability initiatives taken by you" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="renewableEnergyUsage" className="block mb-1">Renewable Energy Usage (%)</label>
          <input 
            type="number" 
            id="renewableEnergyUsage" 
            name="renewableEnergyUsage" 
            value={formData.renewableEnergyUsage} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="What percentage of renewable energy resources do you use" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="wasteReductionPractices" className="block mb-1">Waste Reduction Practices</label>
          <textarea 
            id="wasteReductionPractices" 
            name="wasteReductionPractices" 
            value={formData.wasteReductionPractices} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 h-40" 
            placeholder="Describe any waste reduction practices" 
          />
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2">Submit</button>
        <p>If you are eligible we will contact you.</p>
      </form>
    </div>
  );
};

export default Assesment;
