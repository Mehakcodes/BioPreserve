import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import EBankingPage from "./pages/EBankingPage";
import GreenInvestmentPage from "./pages/GreenInvestmentPage";
import CreditHubPage from "./pages/CreditHubPage";
import ImpactPage from "./pages/ImpactPage";
import CarbonCoinPage from "./pages/CarbonCoinPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import FundTransfer from "./components/ebankingpages/FundTransfer"

// import './pages/Profile';
import PersonalDetails from "./components/PersonalDetails";
import CustomerDetails from "./components/CustomerDetails";
import AccountDetails from "./components/AccountDetails";
import Profile from "./pages/Profile";
import MainNav from "./components/mainnav";
import GreenInvestment from "./pages/GreenInvestment";
import GreenProjects from "./components/GreenProjects";
import RenewableEnergyFunds from "./components/RenewableEnergyFunds";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import Invest from "./pages/Invest";
import AmericanC from "./loans_pages/AmericanC";
import Agri from "./loans_pages/Agri";
import Business from "./loans_pages/Business";
import Greenbuild from "./loans_pages/Greenbuild";
import RaiseCap from "./loans_pages/Raise_cap";
import Vehicle from "./loans_pages/Vehicle"
import Assessment from "./loans_pages/Assesment"
import CarbonTrading from "./pages/CarbonTrading";


import { useState , useEffect} from "react";
import GreenBonds from "./components/GreenBonds";
import GreenStocks from "./components/GreenStocks";
function App() {
const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("customer");
    if (userLoggedIn) {
      setIsLogged(true);
    }
  }, []);
  return (
    <div className="overflow-x-hidden">
      <header>
    
        {isLogged ? <MainNav isLogged={isLogged} setIsLogged={setIsLogged}/> : <Navbar/>}
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreditHub/AmericanC" element={<AmericanC />} />
          <Route path="/CreditHub/agri" element={<Agri />} />
          <Route path="/CreditHub/assessment" element={<Assessment />} />
          <Route path="/CreditHub/business" element={<Business />} />
          <Route path="/CreditHub/green_build" element={<Greenbuild />} />
          <Route path="/CreditHub/raise_cap" element={<RaiseCap />} />
          <Route path="/CreditHub/vehicle" element={<Vehicle />} />

          <Route path="/E-Banking" element={<EBankingPage />} />
          <Route path="/CarbonTrading" element={<CarbonTrading />} />
          <Route path="/Green_Investment" element={<GreenProjects />} />
          <Route path="/CreditHub" element={<CreditHubPage />} />
          <Route path="/Impact" element={<ImpactPage />} />
          <Route path="/CarbonCoin" element={<CarbonCoinPage />} />
          <Route path="/Login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Signup" element={<Signup  isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Green_Investment/fund_transfer" element={<FundTransfer />} />

          <Route exact path="profile" element={<Profile />}>
            <Route
              exact
              path="personal_details"

              element={<PersonalDetails />}
            />
            <Route
              exact
              path="customer_details"
              element={<CustomerDetails />}
            />
            <Route exact path="account_details" element={<AccountDetails />} />
            <Route exact path="" element={<Navigate to="personal_details" />} />
          </Route>
          <Route path="Green_Investment" element={<GreenInvestment />}>
            <Route path="Green_Projects" element={<GreenProjects />} />
            <Route
              path="Renewable_Energy_Funds"
              element={<RenewableEnergyFunds />}
            />
            <Route path="Green_Bonds" element={<GreenBonds/>} />
            <Route path="Green_Stocks" element={<GreenStocks/>} />
            <Route path="" element={<Navigate to="Green_Projects" />} />
          </Route>

          <Route path="Transactions" element={<Transactions />} />
          <Route path="Invest" element={<Invest/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
