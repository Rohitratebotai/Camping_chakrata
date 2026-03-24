import React, { useState } from "react";
import { GiCampingTent } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import img1 from '../assets/img_15.jpeg'
import img2 from '../assets/img_26.jpeg'

type Tent = {
    title: string;
    couponText: string;
    originalPrice: number;
    discountedPrice: number;
    lockPrice: number;
    details: string;
    pricing: { age: string; price: string; advance: string }[];
    image: string;
};

const tents: Tent[] = [
    {
        title: "Camping Tents",
        couponText: "⭐ Rated 5.0 | Peaceful Mountain Stay in Chakrata",
        originalPrice: 1400,
        discountedPrice: 1200,
        lockPrice: 500,
        details:
            "Stay in comfortable camping tents at Vishalsurya Camping, located near Langapokhri, Shirkota on Chakrata–Mussoorie Road. Enjoy a peaceful mountain escape with stunning sunrise & sunset views, cozy bedding (foam sheets, pillows, blankets) and access to clean common western washrooms. Perfect for those looking for solitude away from crowded tourist spots.",
        pricing: [
            { age: "Per Person (CP Plan - Dinner)", price: "₹1200", advance: "₹500" },
            { age: "Per Person (MAP Plan - Breakfast + Dinner)", price: "₹1400", advance: "₹500" },
        ],
        image: img1,
    },
    {
        title: "Triangle Tents",
        couponText: "🔥 Bonfire Available | Best Mountain Experience",
        originalPrice: 1500,
        discountedPrice: 1400,
        lockPrice: 500,
        details:
            "Triangle tents offer a more spacious and aesthetic stay experience with cozy interiors and beautiful mountain surroundings. Ideal for couples and small groups looking for a scenic camping vibe with bonfire nights, delicious home-style food, and breathtaking Himalayan views.",
        pricing: [
            { age: "Per Person (CP Plan - Dinner)", price: "₹1200", advance: "₹500" },
            { age: "Per Person (MAP Plan - Breakfast + Dinner)", price: "₹1400", advance: "₹500" },
        ],
        image: img2,
    },
];

const TentCards: React.FC = () => {
    const [selectedTent, setSelectedTent] = useState<Tent | null>(null);

    return (
        <section className="h-fit flex items-center justify-center bg-gray-100 p-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
                {tents.map((tent, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        {/* Header */}
                        <div className="bg-teal-600 text-white px-4 py-2 flex items-center justify-between">
                            <h2 className="font-semibold">{tent.title}</h2>
                            <button
                                onClick={() => setSelectedTent(tent)}
                                className="text-lg hover:text-gray-200 transition"
                                aria-label={`More info about ${tent.title}`}
                            >
                                ℹ️
                            </button>
                        </div>

                        {/* Coupon */}
                        <div className="bg-cyan-400 text-xs text-center text-white py-1">
                            {tent.couponText}
                        </div>

                        {/* Body */}
                        <div className="p-4 flex gap-2 items-center justify-around">
                            <div className="text-7xl text-teal-700">
                                <GiCampingTent />
                            </div>
                            <div>
                                <div className="text-gray-500 line-through">
                                    ₹{tent.originalPrice}
                                </div>
                                <div className="text-2xl font-bold text-gray-800">
                                    ₹{tent.discountedPrice}{" "}
                                    <span className="text-base font-normal">Per Adult</span>
                                </div>
                                <div className="text-sm">
                                    Pay{" "}
                                    <span className="font-semibold text-red-600">
                                        ₹{tent.lockPrice}
                                    </span>{" "}
                                    & lock this price
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedTent && (
                <div className="fixed inset-0  bg-opacity-10 flex justify-center items-center z-50 px-4">
                    <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                            onClick={() => setSelectedTent(null)}
                        >
                            <IoMdClose size={28} />
                        </button>

                        {/* Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">
                                {selectedTent.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{selectedTent.details}</p>

                            <h3 className="font-semibold mb-2">Pricing Category:</h3>
                            <table className="w-full border border-gray-300 mb-6">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-2 border">Age</th>
                                        <th className="py-2 border">Price</th>
                                        <th className="py-2 border">Advance Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedTent.pricing.map((p, i) => (
                                        <tr key={i} className="text-center">
                                            <td className="py-2 border">{p.age}</td>
                                            <td className="py-2 border">{p.price}</td>
                                            <td className="py-2 border">{p.advance}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <img
                                src={selectedTent.image}
                                alt={selectedTent.title}
                                className="rounded-lg shadow-md w-full"
                            />

                            <button
                                className="my-3 py-2 px-4  rounded-md text-white bg-red-500 hover:bg-red-600"
                                onClick={() => setSelectedTent(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TentCards;
