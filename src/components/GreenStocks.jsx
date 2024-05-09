
import Carousel from "./Carousel";

const GreenStocks = () => {
    const reccommended_projects=[{
        project_name:'Company Name 1',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Mid Cap',
    },
    {
        project_name:'Company Name 2',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Games',
        project_location:'Small Cap',
    },
    {
        project_name:'Company Name 3',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Large Cap',
    },
    {
        project_name:'Company Name 4',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Small Cap',
    },
    {
        project_name:'Company Name 5',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Mid Cap',
    },
    {
        project_name:'Company Name 6',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Agriculture',
        project_location:'Large Cap',
    },
    {
        project_name:'Company Name 7',
        company_name:'$Price',
        project_image:'https://images.pexels.com/photos/8844390/pexels-photo-8844390.jpeg',
        project_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non est nunc. Praesent est nibh, euismod eget justo nec, vehicula fringilla metus. Mauris blandit ligula at nisi lacinia mattis. Aliquam eu aliquet ante. Nulla facilisi. Curabitur id dui sed ante bibendum scelerisque.',
        project_category:'Technology',
        project_location:'Small Cap',
    }
    
];
    return ( 
        <div className="green-projects w-full overflow-visible h-fit mb-16">
            <div className="mt-5 mb-10 overflow-x-clip ">
            <h1 className="text-2xl font-bold mb-4 mx-5">Recommended For You</h1>
            <Carousel data={reccommended_projects} />
            </div>
            <div className="mb-10 overflow-x-clip">
            <h1 className=" mx-5 text-2xl font-bold mb-4 ">Popular Stocks</h1>
            <Carousel data={reccommended_projects} />
            </div>
        
           
        </div>
     );
}
 
export default GreenStocks;