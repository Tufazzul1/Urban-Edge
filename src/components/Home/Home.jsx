import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom"
import Estate from "../Estate/Estate";
import Footer from "../../shared/Footer";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates)
    return (
        <div>
            <Banner></Banner>
            <div>
                <div className="text-center mt-8 p-4">
                    <h2 className="text-3xl font-bold">Commercial Real Estate Listings</h2>
                    <p className="mt-4">Explore our diverse range of commercial properties, including office buildings, retail spaces, warehouses,<br /> industrial facilities, restaurants, and more. Find the perfect space to elevate your business and achieve your goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-4">
                    {
                        estates.map(estate => <Estate
                            key={estate.id}
                            estates={estate}
                        ></Estate>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;