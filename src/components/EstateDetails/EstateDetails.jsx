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

            <div className="h-[300px] rounded-lg flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://i.ibb.co/HqhQMjd/background.jpg)' }}>

                <div className="w-1/2 text-center">
                    <h1 className="mb-5 text-5xl font-bold">Estate details</h1>
                    <p>
                        The Estate Details section offers a meticulous breakdown of each property, encompassing vital specifics such as dimensions, amenities, and unique features.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6  gap-4">
                <div className="border border-gray-200 p-4 shadow-lg space-y-2">
                    <h3 className="font-bold text-[#F94D1D]">#ID : {id}</h3>
                    <h3 className="text-3xl font-bold">{details.estate_title}</h3>
                    <h5><span className="font-bold text-gray-500">Segment :</span> {details.segment_name}</h5>
                    <h5><span className="font-bold text-gray-500">Description :</span> {details.description}</h5>
                    <h2><span className="font-bold text-gray-500">Price :</span> {details.price}</h2>
                    <h2><span className="font-bold text-gray-500">Status :</span> {details.status}</h2>
                    <h2><span className="font-bold text-gray-500">Area :</span> {details.area}</h2>
                    <h2><span className="font-bold text-gray-500">Location :</span> {details.location}</h2>
                    <h2><span className="font-bold text-gray-500">Facilities :</span></h2>
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



