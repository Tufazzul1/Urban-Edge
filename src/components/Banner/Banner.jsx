import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';


const Banner = () => {
    return (
        <div className='mt-10'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center'>
                        <div className='flex-1'>
                            <h4 className=' text-yellow-700 text-4xl'>Discover your dream property with ease222222</h4>
                        </div>
                        <div className='flex-1'>
                            <img className='rounded-lg' src="https://i.ibb.co/pvtxFVQ/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center'>
                        <div className='flex-1'>
                            <h4 className=' text-yellow-700 text-4xl'>Discover your dream property with ease333333333</h4>
                        </div>
                        <div className='flex-1'>
                            <img className='rounded-lg' src="https://i.ibb.co/pvtxFVQ/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center'>
                        <div className='flex-1'>
                            <h4 className=' text-yellow-700 text-4xl'>Discover your dream property with ease</h4>
                        </div>
                        <div className='flex-1'>
                            <img className='rounded-lg' src="https://i.ibb.co/pvtxFVQ/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                

                ...
            </Swiper>
        </div>
    );
};

export default Banner;