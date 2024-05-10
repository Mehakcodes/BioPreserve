import { useLocation } from "react-router-dom";
const Invest = () => {
    const location = useLocation();
    const details =location.state.project;
    return (  
        <div className="w-full h-full px-5">
            <h1 className="mt-2 text-2xl font-bold">{details.project_name}</h1>
            <p className="mb-3">
            {details.company_name}
            </p>
            <img src={details.project_image} alt="" className="w-full h-[25rem] md:h-[35rem] rounded-xl object-cover"/>
            <div className="flex flex-wrap my-4">
        <p className="me-2 border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_category}</p>
        <p className="border-solid border px-2 rounded-xl  hover:bg-green-400/10">{details.project_location}</p>
        </div>
        <p className="my-5"> 
            {details.project_description}
        </p>
        <p>
            Green Score - {details.green_score ?? 10}
            <br/>
            Carbon Offest-{details.carbon_offset ?? 10}
        </p>
        <div className="w-full flex justify-center my-10">
        <div className="form flex flex-col w-fit items-center  justify-center border shadow-md rounded-xl bg-green-400/5 py-5 px-10">
            <h1 className="mb-3 text-lg font-semibold">Invest Now</h1>
            <form action="" method="post" className="flex flex-col">
                <div className="my-2">
                <label htmlFor="amount" className=" me-3">Amount</label>
                <input type="text" name="amount" id="amount" placeholder=" Enter Amount"/>
                </div>
                <div className="my-2">
                <label htmlFor="password" className="me-2">Re-enter Password </label>
                <input type="password" placeholder="Enter Password"/>
                </div>
                <div className="flex justify-center">
                <button type="submit" className="border rounded-md py-2 m-3 px-6 w-fit bg-green-900/50 text-white ">Invest</button>
                </div>
                
            </form>
        </div>
        </div>
        </div>
    );
}
 
export default Invest