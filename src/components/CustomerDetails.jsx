const CustomerDetails = () => {
    const cust={
        "Occupation": "Software Engineer",
        "Nature of Business":"Private Sector",
        "Employment Type":"Salaried",
        "Oraganization Name":"ABC Pvt Ltd",
        "Oragnisation Location":"Maharashtra",
        "Type of Industry":"IT",
        "Oragnisation Type":"Private",
        "Sources of Income":"Salary",
        "Annual Income": "10,00,000",
        "Residence Type":"Owned",
    }
    return ( 
        <div>
             <table className="border-separate border-spacing-y-[10px] border-spacing-x-[2px] w-[50dvw]">
                <tr>
                    <th colSpan={2} className="pb-3 text-xl font-normal"> Customer Details</th>
                </tr>

            {
                Object.keys(cust).map((key,index) => (
                    <tr className="bg-green-100  border-solid border-green-950 hover:bg-green-300 "key={index}>
                        <td className="px-5 py-2 border-r-0 rounded-tl-md rounded-bl-md">{key}</td>
                        <td className="px-5 border-l-0 rounded-tr-md rounded-br-md">{cust[key]}</td>
                    </tr>
                ))
            }
            </table>
            
           
        </div>
     );
}
 
export default CustomerDetails;