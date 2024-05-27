const FundRaising = artifacts.require("./contracts/FundRaising.sol");
const Project = artifacts.require("./contracts/Project.sol");
const SafeMath = artifacts.require("./interfaces/OpenZepplin/SafeMath.sol");
const Web3 = require('web3');

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(FundRaising);
  deployer.link(FundRaising, Project);

  await deployer.deploy(SafeMath);
  deployer.link(SafeMath, Project);

  const _deadline = 100;
  const _goal = Web3.utils.toWei('10', 'ether');
  const projectStarter = accounts[0];
  const projectTitle = "Save the Elephants";
  const projectDescription = "The Save Elephants Project is a comprehensive conservation initiative dedicated to protecting elephant populations and their habitats. This project focuses on anti-poaching efforts through patrols, advanced technologies, and community involvement, while also working to preserve and restore habitats by creating protected areas and wildlife corridors. To mitigate human-elephant conflicts, the project installs barriers, sets up early warning systems, and implements compensation schemes for affected farmers. It emphasizes scientific research, public education, and capacity building to enhance conservation strategies. Additionally, the project advocates for stronger legislation and international cooperation to combat the illegal ivory trade and ensure effective protection policies for elephants globally.";
  const projectImgUrl = "https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg";
  const _minimumContribution = Web3.utils.toWei('0', 'ether');

  await deployer.deploy(
    Project,
    _deadline,
    _goal,
    projectStarter,
    projectTitle,
    projectDescription,
    projectImgUrl,
    _minimumContribution
  );
};