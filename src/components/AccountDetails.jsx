const AccountDetails = () => {
    const account = [
        {
            accountNumber: 123456789,
            accountType: 'Savings',
        },
        {
            accountNumber: 987654321,
            accountType: 'Current',    
        }

    ];
    return (  
        <div className="account-details flex justify-center items-center">
            <table className="border-separate border-spacing-y-[5px] border-spacing-x-[2px] w-[50dvw]">
                <tr>
                    <th colSpan={2} className="pb-3 text-xl font-normal">Account Details    
                    </th>
                </tr>
                <tr className="bg-black text-white ">
                    <th className="px-5 py-2 border-r-0 font-normal">Account Number</th>
                    <th className="px-5 border-l-0 font-normal">Account Type</th>
                </tr>

            {
                account.map((key,index) => (
                    <tr className="bg-green-100  border-solid border-green-950 hover:bg-green-300 "key={index}>
                        <td className="px-5 py-2 ">{key.accountNumber}</td>
                        <td className="px-5 py-2  ">{key.accountType}</td>
                    </tr>
                ))
            }
            </table>
            
           
        </div>
    );
}
 
export default AccountDetails;