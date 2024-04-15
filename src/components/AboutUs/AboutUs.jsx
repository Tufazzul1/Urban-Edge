import { Helmet } from "react-helmet-async";


const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About | UrbanEdge</title>
            </Helmet>
            <div className="h-[250px] rounded-lg flex items-center justify-center text-white" style={{ backgroundImage: 'url(https://i.ibb.co/HqhQMjd/background.jpg)' }}>

                <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            </div>


            <div className="mt-10 text-gray-500">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-[50%] p-4 lg:pt-20">
                        <h2 className="text-3xl font-bold">Welcome to <span className="text-[#F94D1D]">UrbanEdge</span></h2>
                        <p>
                            At UrbanEdge, we believe in more than just buying and selling properties. We are dedicated to helping you find a place to call home, a space to build your dreams, and an investment that secures your future.
                        </p>
                        <h2 className="text-xl font-bold pt-10">Our Mission</h2>
                        <p>
                            Our mission is simple: to provide exceptional service, deliver unmatched expertise, and foster lasting relationships with our clients. Whether you are a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to guide you through every step of the process.
                        </p>
                    </div>
                    <div className="lg:w-[50%] p-4">
                        <img className=" rounded-lg" src="https://i.ibb.co/xfDfTJy/pexels-hach-wang-4238789.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row ">
                    <div className="lg:w-[50%] p-4">
                        <img className="rounded-lg" src="https://i.ibb.co/RH7JhtX/pexels-pixabay-269077.jpg" alt="" />
                    </div>
                    <div className="lg:w-[50%] p-4 ">
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Experience
                            </div>
                            <div className="collapse-content">
                                <p>With years of experience in the real estate industry, our team brings a wealth of knowledge and expertise to every transaction.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Personalized Service
                            </div>
                            <div className="collapse-content">
                                <p>We understand that every client is unique, which is why we tailor our services to meet your specific needs and goals.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Market Insights
                            </div>
                            <div className="collapse-content">
                                <p>Stay ahead of the curve with our in-depth market analysis and insights, helping you make informed decisions in a rapidly changing market.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Transparency
                            </div>
                            <div className="collapse-content">
                                <p>Honesty and transparency are at the core of our business. We believe in open communication and providing you with all the information you need to make confident decisions.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                            Community Focus
                            </div>
                            <div className="collapse-content">
                                <p>We are not just selling properties; we are helping to build communities. From local events to neighborhood resources, we are committed to supporting the communities we serve.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;