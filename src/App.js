import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ImpactPage from "./pages/ImpactPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Projects from "./new_pages/Projects"
import Publish from "./new_pages/Publish";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./pages/Profile";
import MainNav from "./components/mainnav";
import GreenInvestment from "./pages/GreenInvestment";
import GreenProjects from "./components/GreenProjects";
import RenewableEnergyFunds from "./components/RenewableEnergyFunds";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import { useState , useEffect} from "react";
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
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Publish" element={<Publish />} />

          <Route path="/Green_Investment" element={<GreenProjects />} />
          <Route path="/Impact" element={<ImpactPage />} />
          <Route path="/Login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Signup" element={<Signup  isLogged={isLogged} setIsLogged={setIsLogged} />} />

          <Route exact path="profile" element={<Profile />}>
            <Route
              exact
              path="personal_details"

              element={<PersonalDetails />}
            />
            <Route exact path="" element={<Navigate to="personal_details" />} />
          </Route>
          <Route path="Green_Investment" element={<GreenInvestment />}>
            <Route path="Green_Projects" element={<GreenProjects />} />
            <Route
              path="Renewable_Energy_Funds"
              element={<RenewableEnergyFunds />}
            />
            <Route path="" element={<Navigate to="Green_Projects" />} />
          </Route>

          <Route path="Transactions" element={<Transactions />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
