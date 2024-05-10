/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes';

const Signup = ( {isLogged, setIsLogged}) => {
  const navigate = useNavigate();

  useEffect( () => {
    if(localStorage.getItem("customer")) {
      //if already logged in
      navigate('/');
    }
  } );

  const [formDetails, setFormDetails] = useState({
    email: "",
    phone: "",
    createPassword: "",
    confirmPassword: "",
    name: "",
    dob: "",
    panNo: "",
    adhaarCardNo: "",
    currentAddress: "",
    permanentAddress: "",
    nationality: "",
    accountType: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()) {
      const {email ,
          phone ,
          createPassword ,
          name ,
          dob,
          panNo ,
          adhaarCardNo ,
          currentAddress ,
          permanentAddress ,
          nationality ,
          accountType} = formDetails;
      const {data} = await axios.post(registerRoute, {email ,
          phone ,
          createPassword ,
          name ,
          dob,
          panNo ,
          adhaarCardNo ,
          currentAddress ,
          permanentAddress ,
          nationality ,
          accountType});
      
      if(data.status === false) {
        toast.error(data.msg, toastOptions);
      }

      if(data.status === true) {

        localStorage.setItem('customer', JSON.stringify(data.user.email));
        setIsLogged(true); 
        navigate("/");
      }

    }
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    theme: "dark",
    pauseOnHover: true,
    draggable: true
  };

  const handleValidation = () => {
    const {email ,
      phone ,
      createPassword ,
      confirmPassword,
      name ,
      dob,
      panNo ,
      adhaarCardNo ,
      currentAddress ,
      permanentAddress ,
      nationality ,
      accountType} = formDetails;
    if (createPassword.length < 8) {
      toast.error("Password should be greater than 8 characters.", toastOptions);
      return false;
    } else if(createPassword !== confirmPassword) {
      toast.error("password and confirm password should be same.", toastOptions);
      return false;
    } else if(email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div className=" whole-form-page py-20 w-full">
      <div className="flex w-full justify-center">
        <form onSubmit={handleSubmit} className=" main bg-white">
          <div className="font-bold text-3xl pb-6">Sign Up for your account</div>
          <label htmlFor="name" className="pb-2 text-lg">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter Name"
            value={formDetails.name}
            onChange={changeHandler}
            className=""
          />
          <br></br>

          <label htmlFor="email" className="pb-2 text-lg">Email ID</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter Email"
            value={formDetails.email}
            onChange={changeHandler}
          />
<br/>
          <label htmlFor="phone" className="pb-2 text-lg">Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="Enter Phone Number"
            value={formDetails.phone}
            onChange={changeHandler}
          />
          <br/>

          <label htmlFor="createPassword" className="pb-2 text-lg">Create Password</label>
          <input
            name="createPassword"
            id="createPassword"
            type="password"
            placeholder="Create Password"
            value={formDetails.createPassword}
            onChange={changeHandler}
          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn"/>
          <label htmlFor="confirmPassword" className="pb-2 text-lg">Confirm Password</label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formDetails.confirmPassword}
            onChange={changeHandler}
          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn"/>

          <label htmlFor="dob" className="pb-2 text-lg">Date of Birth</label>
          <input
            name="dob"
            id="dob"
            type="date"
            placeholder="Enter Date of Birth"
            value={formDetails.dob}
            onChange={changeHandler}
          />
          <br/>
          <label htmlFor="panNo" className="pb-2 text-lg">PAN No.</label>
          <input
            name="panNo"
            id="panNo"
            type="text"
            placeholder="Enter PAN Number"
            value={formDetails.panNo}
            onChange={changeHandler}
          />
          <br/>
          <label htmlFor="adhaarCardNo" className="pb-2 text-lg">Aadhaar Card No.</label>
          <input
            name="adhaarCardNo"
            id="adhaarCardNo"
            type="text"
            placeholder="Enter Aadhaar Card Number"
            value={formDetails.adhaarCardNo}
            onChange={changeHandler}
          />
          <br/>
          <label htmlFor="currentAddress" className="pb-2 text-lg">Current Address</label>
          <textarea
            name="currentAddress"
            id="currentAddress"
            placeholder="Enter Current Address"
            value={formDetails.currentAddress}
            onChange={changeHandler}
          ></textarea>
          <br/>
          <label htmlFor="permanentAddress" className="pb-2 text-lg">Permanent Address</label>
          <textarea
            name="permanentAddress"
            id="permanentAddress"
            placeholder="Enter Permanent Address"
            value={formDetails.permanentAddress}
            onChange={changeHandler}
          ></textarea>
          <br/>
          <label htmlFor="nationality" className="pb-2 text-lg">Nationality</label>
          <input
            name="nationality"
            id="nationality"
            type="text"
            placeholder="Enter Nationality"
            value={formDetails.nationality}
            onChange={changeHandler}
          />
          <br/>
          <label htmlFor="accountType" className="pb-2 text-lg">Account Type</label>
          <select
            name="accountType"
            id="accountType"
            value={formDetails.accountType}
            onChange={changeHandler}
          >
            <option value="">Select Account Type</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
          </select>
          <br></br>
          

          <button className="signin pt-3 loginbtnn">Sign Up</button>
          <span className="firsttime pt-1">
            <Link to="/Login" className="">Already have an account? Log in</Link>
          </span>
        
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
