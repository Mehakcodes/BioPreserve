import React, { useState } from 'react';

const PublishCampaign = () => {
    const [formData, setFormData] = useState({
        projectTitle: '',
        projectDesc: '',
        projectImageURL: '',
        goalAmount: '',
        minimumContribution: '',
        walletAddress: '',
        deadline: ''
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
    <div className='bg-black'>
    <div className="w-3/4 mx-auto p-4 text-white shadow-lg rounded-lg py-16 bg-black ">
      <h2 className="text-4xl text-center font-semibold mb-14">Campaign Publishing Application</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-4 text-xl">
          <label htmlFor="projectTitle" className="block mb-1">Project Name</label>
          <input 
          
            type="text" 
            id="projectTitle" 
            name="projectTitle" 
            value={formData.projectTitle} 
            onChange={handleChange} 
            className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
            placeholder="Project Name" 
          />
        </div>
        <div className="mb-4 text-xl">
          <label htmlFor="projectDesc" className="block mb-1">Project Description</label>
            <textarea 
                id="projectDesc" 
                name="projectDesc" 
                value={formData.projectDesc} 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2 h-40" 
                placeholder="Project Description"
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="projectImageURL" className="block mb-1">Project Image URL</label>
            <input
                type="text"
                id="projectImageURL"
                name="projectImageURL"
                value={formData.projectImageURL}
                onChange={handleChange}
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2"
                placeholder="Project Image URL"
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="goalAmount" className="block mb-1">Goal Amount</label>
            <input 
                type="number" 
                id="goalAmount" 
                name="goalAmount" 
                value={formData.goalAmount} 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Goal Amount (₹)" 
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="minimumContribution" className="block mb-1">Minimum Contribution</label>
            <input 
                type="number" 
                id="minimumContribution" 
                name="minimumContribution" 
                value={formData.minimumContribution} 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Minimum Contribution (₹)" 
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="walletAddress" className="block mb-1">Wallet Address</label>
            <input 
                type="text" 
                id="walletAddress" 
                name="walletAddress" 
                value={formData.walletAddress} 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Wallet Address" 
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="deadline" className="block mb-1">Deadline</label>
            <input 
                type="date" 
                id="deadline" 
                name="deadline" 
                value={formData.deadline} 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Deadline" 
            />
        </div>
    
        <div className="btn flex w-full justify-center ">
            <button type="submit" className="bg-green-500 text-white rounded-md px-12 py-2 my-4 hover:bg-green-800 ">Submit</button>
        </div>
       
      </form>
    </div>
    </div>

  )
}

export default PublishCampaign;


