import React, { useState } from 'react';

const FundTransfer = () => {
  const [senderAccountNum, setSenderAccountNum] = useState('');
  const [receiverAccountNum, setReceiverAccountNum] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [otp, setOtp] = useState('');
  const [transferStatus, setTransferStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      senderAccountNum,
      receiverAccountNum,
      confirmPassword,
      mobileNum,
      otp
    });
    
    setTransferStatus('Money transferred successfully!');
  };

  return (
    <div className=' w-1/3  flex  flex-col mx-96 mb-10'>
      <h2 className=' font-bold text-4xl flex justify-center pt-8'>Funds Tranfer </h2>
      <div className=' mt-11  border-2  px-4 rounded-lg pt-7 shadowclass'>
      <form  className=' text-xl ' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2 pb-3 '>
          <label className=''>Sender's Account Number</label>
          <input
          className=' text-left  border-2 border-black py-1 rounded-lg px-4  '
          placeholder='Enter your Account Number'
            type="text"
            value={senderAccountNum}
            onChange={(e) => setSenderAccountNum(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2 pb-3'>
          <label>Receiver's Account Number</label>
          <input
          className=' border-2 border-black py-1 rounded-lg px-4  '
          placeholder='Enter Receivers Account Number'
            type="text"
            value={receiverAccountNum}
            onChange={(e) => setReceiverAccountNum(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2 pb-3'>
          <label>Confirm Password</label>
          <input
          className=' border-2 border-black py-1 rounded-lg px-4  '
          placeholder='Confirm Password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2 pb-3'>
          <label>Mobile Number</label>
          <input
          className=' border-2 border-black py-1 rounded-lg px-4  '
          placeholder='Enter your Mobile Number'
            type="text"
            value={mobileNum}
            onChange={(e) => setMobileNum(e.target.value)}
          />
        </div >
        <div className='flex flex-col gap-2 pb-3'>
          <label>OTP:</label> 
 
          <div className='flex gap-5 pb-8'>
          <input
          className=' border-2 border-black py-1 rounded-lg px-4 w-5 '
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
            <input
          className=' border-2 border-black py-1 rounded-lg px-4 w-5 '
            type="text"
            value={otp}
            // onChange={(e) => setOtp(e.target.value)}
          />
                      <input
          className=' border-2 border-black py-1 rounded-lg px-4 w-5 '
            type="text"
            value={otp}
            // onChange={(e) => setOtp(e.target.value)}
          />
                      <input
          className=' border-2 border-black py-1 rounded-lg px-4  w-5'
            type="text"
            value={otp}
            // onChange={(e) => setOtp(e.target.value)}
          />
                      <input
          className=' border-2 border-black py-1 rounded-lg px-4 w-5 '
            type="text"
            value={otp}
            // onChange={(e) => setOtp(e.target.value)}
          />
                      <input
          className=' border-2 border-black py-1 rounded-lg px-4 w-5 '
            type="text"
            value={otp}
            
            // onChange={(e) => setOtp(e.target.value)}
          />
          </div>

          
        </div>
        <button type="submit" className='mb-8 border-green-700 border-2 w-full py-1 cursor-pointer  bg-green-700 text-white hover:bg-green-500 hover:text-black hover:border-green-500 rounded-lg'>Transfer Money</button>
      </form>
      {transferStatus && <p>{transferStatus}</p>}

      </div>
          </div>
  );
};

export default FundTransfer;
