import { useParams, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer";


const EstateDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    const { id } = useParams();
    console.log(id)

    const details = detailsData.find(details => details.id === parseInt(id));

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
                <div>
                    <h3>Estate Image {id}</h3>
                    <h3>{details.estate_title}</h3>
                    <h2>{details.price}</h2>
                </div>
                <div><img src={details.image} alt="" /></div>
            </div>
            <div className="mt-10">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default EstateDetails;



