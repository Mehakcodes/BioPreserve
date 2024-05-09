import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


const GreenInvestment = () => {
    const sidebar_data = [
        {
            title: "Green Projects",
            path: "/Green_Investment/Green_Projects"
        },
        {
            title: "Renewable Energy Funds",
            path: "/Green_Investment/Renewable_Energy_Funds"
        },
        {
            title: "Green Bonds",
            path: "/Green_Investment/Green_Bonds"
        },
        {
            title: "Green Stocks",
            path: "/Green_Investment/Green_Stocks"
        }
       
    ]
    return (
        <div className="w-full overflow-x-hidden">
        <div className="flex w-screen h-screen justify-stretch">
        <Sidebar data={sidebar_data}/>
       
       
        
        <div className="grow flex justify-center overflow-x-hidden overflow-y-scroll ">
          <Outlet/>     
        </div>
      </div>
      </div>

      );
}
 
export default GreenInvestment;