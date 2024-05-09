import {useNavigate} from "react-router-dom";
const GreenBonds = () => {
    const navigate = useNavigate();
    function MouseOver(event) {
        event.currentTarget.classList.add('border');
        event.currentTarget.classList.add('shadow-md');

       
       
      }
      function MouseOut(event){
        event.currentTarget.classList.remove('border');
        event.currentTarget.classList.remove('shadow-md');
      }


    const reccommended_projects=[{
        project_name:'Green Bonds',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        
    },
    {
        project_name:'Blue Bonds',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg'
    },
    {
        project_name:'Climate Bonds',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
       
    },
];
    
    return ( 
        <div className=" w-full">
            <h1 className="text-2xl font-bold m-5"></h1>
            <div className=" renew ">
            {
                reccommended_projects.map((details)=>(
                    <div className="w-[25rem] h-[27rem] mx-1">
                    <div className="card rounded-xl p-4 w-[25rem] min-h-[27rem] max-h-fit flex flex-col transition-all ease-in-out bg-white " onMouseOver={MouseOver} onMouseOut={MouseOut}>
            
                    <img src={details.project_image} alt="placeholder" className="w-full h-[14.5rem] mb-2 rounded-xl"/>
            
                    <h1 className="text-xl font-bold " >{details.project_name }</h1>
                    <div className=" grow flex justify-center items-end mt-3">
                        <button className="bg-green-500/50 py-1 px-3 rounded-md hover:bg-green-500/80" onClick={
                            ()=>{
                              
                              navigate("/Invest", {state: {project: details}, replace: true});
                            }
                        } >Invest</button>
                    </div>
                    </div>
                    </div>
                ))
            }

            </div>
        </div>
     );
}
 
export default GreenBonds;