import { useParams, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer";
import { Helmet } from "react-helmet-async";


const EstateDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    const { id } = useParams();
    console.log(id)

    const details = detailsData.find(details => details.id === parseInt(id));

    return (
        <div>
              <Helmet>
                <title>Estate Details | UrbanEdge</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
                <div>
                    <h3 className="font-bold text-[#F94D1D]">#ID : {id}</h3>
                    <h3 className="text-3xl font-bold">{details.estate_title}</h3>
                    <h5>Segment : {details.segment_name}</h5>
                    <h5>Description : {details.description}</h5>
                    <h2>Price : {details.price}</h2>
                    <h2>Status : {details.status}</h2>
                    <h2>Area : {details.area}</h2>
                    <h2>Location : {details.location}</h2>
                    <h2>Facilities :</h2>
                    <ul className="list-disc ml-4">
                        {details.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
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



