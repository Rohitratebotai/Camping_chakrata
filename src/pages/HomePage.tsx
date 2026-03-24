import WhatsAppButton from "../components/commonComponents/WhatsAppButton"
import Amenities from "../homePageComponents/Amenities"
import BannerSlider from "../homePageComponents/BannerSlider"
// import CardSlider from "../homePageComponents/CardSlider"
import Map from "../homePageComponents/Map"
import Tabs from "../homePageComponents/Tabs"
import TentCards from "../homePageComponents/TentCard"
import { IoCall } from "react-icons/io5";

const HomePage = () => {
    return (
        <section className="min-h-screen bg-gray-100">
            <WhatsAppButton />

            <div className="fixed right-8 bottom-28 z-50">
                <a
                    href="tel:+918979999340"
                    className="flex justify-center items-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <IoCall className="text-green-500 text-2xl" />
                </a>
            </div>


            <div>
                <BannerSlider />
            </div>
            <div>
                <TentCards />
            </div>
            {/* <div className="flex justify-center ">
                <a target="_blank" rel="noopener noreferrer" href="" className="px-6 py-3 text-xl rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold">Book Now</a>
            </div> */}

            <div className="py-10">
                <Amenities />
            </div>
            <div>
                <Tabs />
            </div>
            <div>
                <Map />
            </div>
        </section>
    )
}

export default HomePage