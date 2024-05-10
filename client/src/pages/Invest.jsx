import { useLocation } from "react-router-dom";
import React, { useState } from "react";
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
      const fundRaisingNetwork = FundRaisingContract.networks[networkId];
      const projectNetwork = ProjectContract.networks[networkId];
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
    <div className="w-full h-full px-5">
      {/* <h1 className="mt-2 text-2xl font-bold">{details.project_name}</h1>
            <p className="mb-3">
            {details.company_name}
            </p>
            <img src={details.project_image} alt="" className="w-full h-[25rem] md:h-[35rem] rounded-xl object-cover"/>
            <div className="flex flex-wrap my-4">
        <p className="me-2 border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_category}</p>
        <p className="border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_location}</p>
        </div>
        <p className="my-5"> 
            {details.project_description}
        </p>
        <p>
            Green Score - {details.green_score ?? 10}
            <br/>
            Carbon Offest-{details.carbon_offset ?? 10}
        </p>
        <div className="w-full flex justify-center my-10">
        <div className="form flex flex-col w-fit items-center  justify-center border shadow-md rounded-xl bg-green-400/5 py-5 px-10">
            <h1 className="mb-3 text-lg font-semibold">Invest Now</h1>
            <form action="" method="post" className="flex flex-col">
                <div className="my-2">
                <label htmlFor="amount" className=" me-3">Amount</label>
                <input type="text" name="amount" id="amount" placeholder=" Enter Amount"/>
                </div>
                <div className="my-2">
                <label htmlFor="password" className="me-2">Re-enter Password </label>
                <input type="password" placeholder="Enter Password"/>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="border rounded-md py-2 m-3 px-6 w-fit bg-green-900/50 text-white ">Invest</button>
                </div>
                
            </form>
        </div>
        </div> */}
      {accounts.length > 0 ? (
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
      )}
    </div>
  );
};

export default Invest;
