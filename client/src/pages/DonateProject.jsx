import ProjectCard from "../components/ProjectCard";

const DonateProject = () => {

    const reccommended_projects=[{
        project_name:'Green Fund 1',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_goal:'200000',
        project_min:'1000',
        project_daysleft:'30',
        project_percent:'50',
    },
    {
        project_name:'Green Fund 1',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_goal:'200000',
        project_min:'1000',
        project_daysleft:'30',
        project_percent:'50',
    },
    {
        project_name:'Green Fund 1',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_goal:'200000',
        project_min:'1000',
        project_daysleft:'30',
        project_percent:'50',
    },
    {
        project_name:'Green Fund 1',
        company_name:'Company Name',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_goal:'200000',
        project_min:'1000',
        project_daysleft:'30',
        project_percent:'50',
    },
    
    
];
    
    return ( 
        <div className="bg-black w-full ">
            <h1 className=" text-white text-8xl text-center pt-8 pb-6 ">Projects</h1>
            <h1 className=" text-white font-bold text-2xl text-center pt-4 pb-10 ">
                Explore the projects and donate to preserve biodiversity and cultural heritage
            </h1>
            <div className=" display-grid ">
            {
                reccommended_projects.map((project)=>(
                    <ProjectCard data={project} />
                ))
            }

            </div>
        </div>
     );
}
 
export default DonateProject;