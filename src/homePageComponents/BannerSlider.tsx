import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import img1 from '../assets/img_3.jpeg'
import img2 from '../assets/img_26.jpeg'
import img3 from '../assets/img_9.jpeg'
import img4 from '../assets/img_18.jpeg'

const images = [
    img1,
    img2,
    img3,
    img4,
];

const BannerSlider: React.FC = () => {
    return (
        <section>
            <div className="w-full h-[50vh] md:h-[90vh] ">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    effect="fade"
                >
                    {images.map((image, idx) => (
                        <SwiperSlide>
                            <div key={idx} className="w-full  h-[50vh] md:h-[90vh] ">
                                <img
                                    src={image}
                                    alt={`Banner ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BannerSlider;
