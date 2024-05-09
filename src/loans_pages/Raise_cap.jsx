import React, { useState } from 'react';

const Raise_cap = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanPurpose: '',
    interestRate: '',
    repaymentTerm: '',
    propertyType: '',
    location: '',
    additionalDetails: ''
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
      <h2 className="text-4xl text-center font-semibold mb-4">Loan Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-8 text-xl">
          <label htmlFor="loanAmount" className="block mb-1">Loan Amount ($)</label>
          <input 
            type="number" 
            id="loanAmount" 
            name="loanAmount" 
            value={formData.loanAmount} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter loan amount" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="loanPurpose" className="block mb-1">Loan Purpose</label>
          <input 
            type="text" 
            id="loanPurpose" 
            name="loanPurpose" 
            value={formData.loanPurpose} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter loan purpose" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="interestRate" className="block mb-1">Interest Rate (%)</label>
          <input 
            type="number" 
            id="interestRate" 
            name="interestRate" 
            value={formData.interestRate} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter interest rate" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="repaymentTerm" className="block mb-1">Repayment Term (months)</label>
          <input 
            type="number" 
            id="repaymentTerm" 
            name="repaymentTerm" 
            value={formData.repaymentTerm} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter repayment term" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="propertyType" className="block mb-1">Property Type</label>
          <input 
            type="text" 
            id="propertyType" 
            name="propertyType" 
            value={formData.propertyType} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter property type" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="location" className="block mb-1">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2" 
            placeholder="Enter location" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="additionalDetails" className="block mb-1">Additional Details</label>
          <textarea 
            id="additionalDetails" 
            name="additionalDetails" 
            value={formData.additionalDetails} 
            onChange={handleChange} 
            className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 h-40" 
            placeholder="Enter additional details" 
          />
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2">Submit</button>
        <p>Your loan will be listed for potential investors to review.</p>
      </form>
    </div>
  );
};

export default Raise_cap;
