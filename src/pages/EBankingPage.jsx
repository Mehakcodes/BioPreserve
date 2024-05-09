import React from "react";
import { Link } from "react-router-dom"; // Import Link component from React Router
import CardBanking from "../components/CardBanking";

const EBankingPage = () => {
  return (
    <div className="mb-12">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center imgg"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)",
          }}
        />
        <div className="relative z-1 text-white text-center pt-44">
          <h1 className="text-4xl font-bold mb-4">
          Navigate Your Finances Digitally
          </h1>
          <p className="text-lg text-white mb-8">
          Explore Our E-Banking Platform
          </p>
        </div>
        <div className="pt-80 px-44 text-center">
        Experience banking convenience like never before with our E-Banking platform. Seamlessly manage your accounts, transfer funds, pay bills, and track your transactions—all from the comfort of your home or on-the-go. Enjoy secure and efficient banking at your fingertips.
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-12 mx-20">
      <CardBanking to="/Transactions">Transaction Details</CardBanking>
        <CardBanking to="/Green_Investment/fund_transfer">Fund Transfer</CardBanking>
        <CardBanking to="/bill-payment">Bill Payment</CardBanking>
        <CardBanking to="/recharge">Recharge</CardBanking>
        <CardBanking to="/cards">Cards</CardBanking>
        <CardBanking to="/demat-account">Demat Account</CardBanking>
        <CardBanking to="/mutual-funds">Mutual Funds</CardBanking>
        <CardBanking to="/insurance">Insurance</CardBanking>
        <CardBanking to="/cashbacks-rewards">CashBacks & Rewards</CardBanking>
      </div>

      <div>
      <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg)",
            filter: "blur(0px) brightness(0.7) contrast(1.2)",
          }}
        />
        <div>
          <div></div>
        </div>

      </div>
    </div>
  );
};

export default EBankingPage;
