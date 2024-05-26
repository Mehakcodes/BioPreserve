import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import Web3 from "web3";
import FundRaisingContract from "../contracts/FundRaising.json";
import ProjectContract from "../contracts/Project.json";

const Invest = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [fundRaisingContract, setFundRaisingContract] = useState(null);
  const [projectContract, setProjectContract] = useState(null);
  const [contributionAmount, setContributionAmount] = useState("");

  // Initialize Web3 and contracts
  const initWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
      const networkId = await web3.eth.net.getId();
      const fundRaisingNetwork = FundRaisingContract.networks;
      const projectNetwork = ProjectContract.networks;
      if (fundRaisingNetwork && projectNetwork) {
        const fundRaisingInstance = new web3.eth.Contract(
          FundRaisingContract.abi,
          fundRaisingNetwork.address
        );
        const projectInstance = new web3.eth.Contract(
          ProjectContract.abi,
          projectNetwork.address
        );
        setFundRaisingContract(fundRaisingInstance);
        setProjectContract(projectInstance);
      } else {
        console.error("Contracts not deployed to this network");
      }
    } else {
      console.error("Web3 not found");
    }
  };

  // Function to contribute funds to a project
  const contributeToProject = async () => {
    try {
      await projectContract.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contributionAmount, "ether"),
      });
      console.log("Contribution successful");
    } catch (error) {
      console.error("Error contributing to project:", error);
    }
  };

  const location = useLocation();
  const details = location.state.project;
  return (
    <div className="w-full h-full px-5 bg-black text-white">
      <h1 className="pt-10 text-6xl ">{details.project_name}</h1>
      <p className="mb-10 mt-3 text-xl">{details.company_name}</p>
      <img
        src={details.project_image}
        alt=""
        className="w-full h-[25rem] md:h-[35rem] rounded-xl object-cover"
      />
      {/* <div className="flex flex-wrap my-4">
        <p className="me-2 border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_category}</p>
        <p className="border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_location}</p>
        </div> */}
      <div className="flex justify-start items-center my-8 gap-1  ">
        <p className=" flex items-center gap-1">
          <IoTimeOutline />
          {details.project_daysleft} days left
        </p>
        <p>|</p>
        <p> {details.project_percent}% funded </p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="min-w-[40rem] max-w-[50rem]">
          <h1 className="text-3xl">Project Description</h1>
          <p className="my-5">{details.project_description}</p>
          <p>
            <p className="">Goal Amount: {details.project_goal} </p>
            <p className="">Minimum Donation: {details.project_min}</p>
          </p>
        </div>

        <div className="w-min-[30rem] flex  grow justify-center py-10">

        {accounts.length > 0 ? (
          <div className="form flex flex-col w-fit items-center  justify-center border shadow-md rounded-xl bg-green-100/50 py-5 px-10">
            <p>Connected Account: {accounts[0]}</p>
            <h1 className="mb-3 text-lg font-semibold">Invest Now</h1>
            <form action="" method="post" className="flex flex-col">
              <div className="my-2">
                <label htmlFor="amount" className=" me-3">
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  className="text-black"
                  id="amount"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  placeholder="Enter contribution amount (ETH)"
                />
              </div>
              <div className="flex justify-center">
                {projectContract && (<button
                  type="submit"
                  onClick={contributeToProject}
                  className="border rounded-md py-2 m-3 px-6 w-fit bg-green-900/50 text-white "
                >
                  Contribute
                </button>)}
              </div>
            </form>
          </div>
        ) : (
          <button className="border rounded-md py-2 m-3 px-6 w-fit bg-green-900/50 text-white "
          onClick={initWeb3}>Connect MetaMask</button>
        )}

        </div>
      </div>
      {/* {accounts.length > 0 ? (
        <p>Connected Account: {accounts[0]}</p>
      ) : (
        <p>Connect to MetaMask</p>
      )}
      <button onClick={initWeb3}>Connect MetaMask</button>
      <input
        type="text"
        value={contributionAmount}
        onChange={(e) => setContributionAmount(e.target.value)}
        placeholder="Enter contribution amount (ETH)"
      />
      {projectContract && (
        <button onClick={contributeToProject}>Contribute to Project</button>
      )} */}
    </div>
  );
};

export default Invest;
