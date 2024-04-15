import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Estate = ({ estates }) => {

    const { id, estate_title, segment_name, description, image, price, status, area, location, facilities } = estates;

    return (
        <div data-aos="fade-right" data-aos-duration="1000" className="card card-compact bg-base-100 shadow-xl p-3 border-1 border-[#F94D1D] hover:border-2 hover:border-[#F94D1D]">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <div className="flex gap-2">
                    <span className="font-bold">{id} :</span>
                    <span className="text-blue-500 font-bold ">{segment_name}</span>
                </div>
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <p>Price : {price}</p>
                <p>Status : {status}</p>
                <p>Area : {area}</p>
                <p>Location : {location}</p>
                <h2>Facilities :</h2>
                <ul className="list-disc ml-4">
                    {facilities.map((facility, index) => (
                        <li key={index}>{facility}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end">

                    <button className="btn btn-error w-full ">
                        <Link to={`/estates/${id}`}>View Property</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Estate;