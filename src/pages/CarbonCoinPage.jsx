// import React , {useEffect, useRef}from 'react'

// const {tableau} = window;

// const CarbonCoinPage = () => {
//   const ref = useRef(null);
//   const url = "https://public.tableau.com/views/CustomerDashboard_17148130854820/Dashboard2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";
  
//   function initViz()
//   {
//     new tableau.Viz(ref.current, url);
//   }

//   useEffect(()=>{
//     initViz();
//   }, [])
  
//   return (
//     <div>
//       <div ref = {ref}>
//       </div>
//     </div>
//   )
// }

// export default CarbonCoinPage
import React from 'react';

const CarbonCoinPage = () => {
  return (
<div className="w-full h-full flex items-center justify-center">
  <img
    className="max-w-full max-h-full"
        src='https://res.cloudinary.com/debw7vpqa/image/upload/v1714922571/abc/uscragsmdyzzstmxbfox.png'
       
      />
    </div>
  );
};

export default CarbonCoinPage;
