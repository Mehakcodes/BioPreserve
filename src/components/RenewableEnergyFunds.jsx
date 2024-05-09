import InvCard from "./InvCard";
const RenewableEnergyFunds = () => {

    const reccommended_projects=[{
        project_name:'Green Fund 1',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Delhi',
    },
    {
        project_name:'Green Fund 2',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Games',
        project_location:'Mumbai',
    },
    {
        project_name:'Green Fund 3',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Bangalore',
    },
    {
        project_name:'Green Fund 4',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Chennai',
    },
    {
        project_name:'Green Fund 5',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Hyderabad',
    },
    {
        project_name:'Green Fund 6',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Agriculture',
        project_location:'Pune',
    },
    {
        project_name:'Green Fund 7',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Kolkata',
    }
    
];
    
    return ( 
        <div className="Renerdy-funds w-full">
            <h1 className="text-2xl font-bold m-5">Renewable Energy Funds</h1>
            <div className=" renew ">
            {
                reccommended_projects.map((project)=>(
                    <InvCard data={project} />
                ))
            }

            </div>
        </div>
     );
}
 
export default RenewableEnergyFunds;