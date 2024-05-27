import React, { useState } from 'react';
import Web3 from 'web3';
import FundRaisingContract from "../contracts/FundRaising.json";
import ProjectContract from "../contracts/Project.json";

const PublishCampaign = ({onProjectAdded}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    durationInDays: '',
    imageUrl: '',
    amountToRaise: '',
    minimumContribution: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.requestAccounts();
    const contractAddress = FundRaisingContract.networks.address;
    const contractABI = FundRaisingContract.abi;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    await contract.methods
      .startNewProject(
        formData.title,
        formData.description,
        formData.imageUrl,
        formData.durationInDays,
        web3.utils.toWei(formData.amountToRaise, 'ether'),
        web3.utils.toWei(formData.minimumContribution, 'ether')
      )
      .send({ from: accounts[0] });

    onProjectAdded();
  };
    // const [formData, setFormData] = useState({
    //     projectTitle: '',
    //     projectDesc: '',
    //     projectImageURL: '',
    //     goalAmount: '',
    //     minimumContribution: '',
    //     walletAddress: '',
    //     deadline: ''
    //   });

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
                onChange={handleChange}
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2"
                placeholder="Project Image URL"
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="goalAmount" className="block mb-1">Goal Amount</label>
            <input 
                type="text" 
                id="goalAmount" 
                name="goalAmount" 
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
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Minimum Contribution (₹)" 
            />
        </div>
        <div className="mb-4 text-xl">
            <label htmlFor="deadline" className="block mb-1">Deadline</label>
            <input 
                type="number" 
                id="deadline" 
                name="deadline" 
                onChange={handleChange} 
                className="bg-[#1f201f] w-full border-black border-2 rounded-xl px-4 py-2" 
                placeholder="Number of days" 
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


