import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import 'animate.css';


const Banner = () => {
    return (
        <div className='mt-6'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className="hero min-h-[550px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/q092RD3/pexels-alain-garcia-19920545.jpg)', borderRadius : '20px'}}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Discover Dynamic Business Environments </h1>
                                <p className="mb-5 animate__animated  animate__rubberBand">Elevate Your Enterprise with Our Diverse Commercial Real Estate Selection.</p>
                                <NavLink to={'/team'} className="btn border bg-[#F94D1D] border-[#F94D1D] hover:bg-none hover:text-black text-white">Our Team</NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[550px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/BChZQ78/pexels-pixabay-258154.jpg)', borderRadius : '20px'}}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Unlock Your Business Potential</h1>
                                <p className="mb-5 animate__animated  animate__rubberBand">Browse Our Range of Office Buildings, Retail Spaces, and Industrial Facilities.</p>
                                <NavLink to={'/team'} className="btn border bg-[#F94D1D] border-[#F94D1D] hover:bg-none hover:text-black text-white">About Us</NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero min-h-[550px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/CQ7312g/pexels-waldemar-2290070.jpg)', borderRadius : '20px'}}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-5 text-4xl font-bold animate__animated  animate__rubberBand">Indulge in Culinary Success </h1>
                                <p className="mb-5 animate__animated  animate__rubberBand"> Explore Restaurant Spaces Designed to Satisfy Appetites and Ignite Success.</p>
                                <NavLink to={'/about'} className="btn border bg-[#F94D1D] border-[#F94D1D] hover:bg-none hover:text-black text-white">About Us</NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                ...
            </Swiper>
        </div>
    );
};

export default Banner;