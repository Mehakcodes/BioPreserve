import React from "react";
import { FiExternalLink } from "react-icons/fi";
import CardBanking from "../components/CardBanking";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Agri from "../loans_pages/Agri"
import AmericanC from "../loans_pages/AmericanC"
import Assessment from "../loans_pages/Agri"
import RaiseCap from "../loans_pages/Raise_cap"
import Business from "../loans_pages/Business"
import Greenbuild from "../loans_pages/Greenbuild"
import Vehicle from "../loans_pages/Agri"



const CreditHubPage = () => {
  <Routes>
  <Route path="/CreditHub/AmericanC" element={<AmericanC />} />
  <Route path="/CreditHub/agri" element={<Agri />} />
  <Route path="/CreditHub/assessment" element={<Assessment />} />
  <Route path="/CreditHub/business" element={<Business />} />
  <Route path="/CreditHub/green_build" element={<Greenbuild />} />
  <Route path="/CreditHub/raise_cap" element={<RaiseCap />} />
  <Route path="/CreditHub/vehicle" element={<Vehicle />} />
</Routes>

  return (
    <div className=" pb-24 ">
      <div className="relative mb-32">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center imgg"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/9034670/pexels-photo-9034670.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)",
          }}
        />
        <div className="relative z-1 text-white text-center pt-44">
          <h1 className="text-4xl font-bold mb-4">
            Empower Your Financial Journey
          </h1>
          <p className="text-lg mb-8 text-white">
            Accessible, Engaging, and Secure Lending Solutions
          </p>
        </div>
      </div>
      <div className="pt-56 px-12 text-l text-bold text-black pl-44 pr-44 text-center">
        <h1>
          Welcome to our lending platform, where sustainability drives every
          decision. Whether you're an individual, business, or project aiming to
          make a meaningful impact, we're here to support you. Our tailored
          lending solutions ensure that every endeavor receives the necessary
          funding and guidance to thrive sustainably. Let's work together to
          turn your vision into reality.
        </h1>
      </div>

      <div className="pt-20 flex justify-center ">
        <div className="pl-20 pr-11 bg-yellow-200 pt-12  pb-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Who can apply for a loan?
          </h1>
          <ul>
            <li className="mb-2">
              &#10003; Individuals with sustainable initiatives
            </li>
            <li className="mb-2">
              &#10003; Entrepreneurs seeking to implement eco-friendly projects
            </li>
            <li className="mb-2">
              &#10003; Businesses committed to making a positive environmental
              impact
            </li>
            <li className="mb-2">
              &#10003; Community leaders driving sustainability-focused
              initiatives
            </li>
            <li className="mb-2">
              &#10003; Projects dedicated to social or cultural sustainability
            </li>
            <li className="mb-2">
              &#10003; Anyone passionate about creating a better, more
              sustainable future
            </li>
          </ul>
        </div>
        <div
          className=" bg-cover loans2"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/7768204/pexels-photo-7768204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        />
      </div>

      <div>
        <h1 className="pt-20 text-center font-bold text-3xl">
          OUR LENDING PRODUCTS
        </h1>
        <p className="text-center  text-l">
          Lending for a Sustainable Tomorrow
        </p>
      </div>

      <div className="flex flex-wrap gap-6 items-center content-center pl-36 pr-36 py-11 ">
        <div className="loanbox text-center ">
          <h1 className="text-2xl text-green-700 font-bold  ">
            American Express Sustainable Card
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
            Rs. 1000 cashback and 500 bonus points as a Welcome Gift on green
            investment and suatainable products of Rs. 10,000 in the first 90
            days of Cardmembership.
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
            First Year Fee: Rs. 495 plus applicable taxes (Second Year onwards:
            Rs.495 plus applicable taxes)
          </div>
          <Link to="/CreditHub/AmericanC" >
            <div  className="h-11 border-2 mt-8 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
                <p className="text-white">
                  Apply Now
                </p>
              </div>
          </Link>
        </div>
        <div className="loanbox text-center">
          <h1 className="text-2xl text-green-700 font-bold ">
            Green Business Loans
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
            Drive your eco-friendly initiatives forward with our green business
            loans featuring significantly reduced interest rates.{" "}
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
            Accelerate towards sustainability with a generous 500 bonus points
            awarded on every green loan application.{" "}
          </div>
          <Link to= "/CreditHub/business">
          <div className="h-11 border-2 mt-12 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
            <p className="text-white">Apply Now</p>
          </div>

          </Link>
        </div>
        <div className="loanbox text-center">
          <h1 className="text-2xl text-green-700 font-bold ">
            Raise Capital Directly from investors
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-8 text-justify	text-sm">
            Secure capital directly from investors, ensuring your company's
            eco-friendly initiatives resonate with stakeholders.{" "}
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
            After approval, gain visibility and access to funds as your venture
            is listed among our esteemed green investment opportunities..{" "}
          </div>
          <Link to = "/CreditHub/raise_cap" >
          <div className="h-11 border-2 mt-14 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
            <p to="/CreditHub/raise_cap" className="text-white">Apply Now</p>
          </div>
          </Link>
        </div>
        <div className="loanbox text-center ">
          <h1 className="text-2xl text-green-700 font-bold  ">
            Green Building Financing
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
          Get financial assistance for the construction, renovation, or retrofitting of environmentally friendly and energy-efficient buildings.          </div>
          <div className="text-justify	text-sm font-bold mt-5">
          It aims to reduce resource consumption, minimize environmental impact, and promote sustainability in the built environment.
          </div>
          <Link to="/CreditHub/green_build" >
            <div  className="h-11 border-2 mt-8 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
                <p className="text-white">
                  Apply Now
                </p>
              </div>
          </Link>
        </div>
        <div className="loanbox text-center ">
          <h1 className="text-2xl text-green-700 font-bold  ">
            Sustainable Agricultural Loans
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
          Support farmers and agricultural businesses in implementing environmentally friendly and socially responsible farming practices.
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
          Funds for initiatives such as organic farming, conservation agriculture, renewable energy adoption, aiming to enhance agricultural sustainability and resilience.
          </div>
          <Link to="/CreditHub/agri" >
            <div  className="h-11 border-2 mt-8 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
                <p className="text-white">
                  Apply Now
                </p>
              </div>
          </Link>
        </div>
        <div className="loanbox text-center ">
          <h1 className="text-2xl text-green-700 font-bold  ">
            Electronic vehicle Loans
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
          Facilitate the purchase or lease of electric vehicles (EVs) for individuals or businesses.
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
          Get favorable terms, such as low-interest rates or flexible repayment options, for adoption of electric transportation and reduce greenhouse gas emissions from the automotive sector.
          </div>
          <Link to="/CreditHub/vehicle" >
            <div  className="h-11 border-2 mt-8 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
                <p className="text-white">
                  Apply Now
                </p>
              </div>
          </Link>
        </div>
        <div className="loanbox text-center ">
          <h1 className="text-2xl text-green-700 font-bold  ">
          Environmental Impact Assessment Based Loans
          </h1>
          <div className="h-0.5 mt-4  bg-black"></div>

          <div className="mt-5 text-justify	text-sm">
          Get EIA based loans for your projects upon the approval of assessment of the potential environmental impacts.
          </div>
          <div className="text-justify	text-sm font-bold mt-5">
          Ensure that proposed activities adhere to environmental regulations, mitigate negative environmental effects, and promote sustainable development practices.
          </div>
          <Link to="/CreditHub/assessment" >
            <div  className="h-11 border-2 mt-8 py-2 bg-green-700 hover:bg-green-600 cursor-pointer">
                <p className="text-white">
                  Apply Now
                </p>
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditHubPage;
