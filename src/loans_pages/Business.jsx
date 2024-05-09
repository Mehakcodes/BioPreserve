import React, { useState } from 'react';

const Business = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    businessType: '',
    environmentalImpact: '',
    location: '',
    carbonEmission: '',
    carbonOffset: '',
    loanAmount: '',
    businessSize: '',
    years_in_operation: '',
    sustainability_initiatives: '',
    renewable_energy_usage: '',
    waste_reduction_practices: ''
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
    <div className="w-3/4 mx-auto p-4 bg-white shadow-lg rounded-lg mt-8 ">
      <h2 className="text-4xl text-center font-semibold mb-4">Green Business Loan Application</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4 mt-8 text-xl">
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Email Address' />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Phone Number' />
        </div>

        <div className="mb-4 text-xl">
          <label htmlFor="businessType" className="block mb-1">Tell about your Business</label>
          <input type="text" id="businessType" name="businessType" value={formData.businessType} onChange={handleChange}
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Tell abour your business'/>
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="environmentalImpact" className="block mb-1">Rate environmental impact of your business (Scale of 1 to 10)</label>
          <input type="number" id="environmentalImpact" name="environmentalImpact" value={formData.environmentalImpact} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Rate environmental impact of your business' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="location" className="block mb-1">Location</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Location' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="carbonEmission" className="block mb-1">Estimated Carbon Emission (tons/year)</label>
          <input type="number" id="carbonEmission" name="carbonEmission" value={formData.carbonEmission} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Estimated carbon emission' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="carbonOffset" className="block mb-1">Planned Carbon Offset (tons/year)</label>
          <input type="number" id="carbonOffset" name="carbonOffset" value={formData.carbonOffset} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Planeed Carbon Offset'/>
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="loanAmount" className="block mb-1">Loan Amount Needed ($)</label>
          <input type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} 
         className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
         placeholder='How much Loan amout do you needed' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="businessSize" className="block mb-1">Business Size (Number of Employees)</label>
          <input type="number" id="businessSize" name="businessSize" 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Number of people' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="yearsInOperation" className="block mb-1">Years in Operation</label>
          <input type="number" id="yearsInOperation" name="yearsInOperation" value={formData.yearsInOperation} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='Number of years' />
        </div>
        <div className="mb-4 text-xl">
        <label htmlFor="sustainabilityInitiatives" className="block mb-1">Sustainability Initiatives</label>
        <textarea 
          id="sustainabilityInitiatives"   
          name="sustainabilityInitiatives" 
          value={formData.sustainabilityInitiatives} 
          onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 h-[150px]" 
          placeholder='Sustainability initiatives taken by you...'>
        </textarea>
      </div>
        <div className="mb-4  text-xl">
          <label htmlFor="renewableEnergyUsage" className="block mb-1">Renewable Energy Usage (%)</label>
          <input type="number" id="renewableEnergyUsage" name="renewableEnergyUsage" value={formData.renewableEnergyUsage} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2 " 
          placeholder='What kind of renewable energy resouces do you use' />
        </div>
        <div className="mb-4  text-xl">
          <label htmlFor="wasteReductionPractices" className="block mb-1">Waste Reduction Practices</label>
          <textarea id="wasteReductionPractices" name="wasteReductionPractices" value={formData.wasteReductionPractices} onChange={handleChange} 
          className="w-full border-gray-300 border-2 rounded-xl px-4 py-2  h-[150px]" 
          placeholder='Is there any waste reduction process...'></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white rounded-md px-4 py-2">Submit</button>
        <p>If you are eligible we will contact you.</p>

      </form>
    </div>
  );
};

export default  Business;
