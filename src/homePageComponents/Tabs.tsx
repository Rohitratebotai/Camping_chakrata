import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/img_1.jpeg";
import img2 from "../assets/img_2.jpeg";
import img3 from "../assets/img_3.jpeg";
import img4 from "../assets/img_4.jpeg";
import img5 from "../assets/img_5.jpeg";
import img6 from "../assets/img_6.jpeg";
import img7 from "../assets/img_7.jpeg";
import img8 from "../assets/img_8.jpeg";
import img9 from "../assets/img_9.jpeg";
import img10 from "../assets/img_10.jpeg";
import img11 from "../assets/img_11.jpeg";
import img12 from "../assets/img_12.jpeg";
import img13 from "../assets/img_13.jpeg";
import img14 from "../assets/img_14.jpeg";
import img15 from "../assets/img_15.jpeg";
import img16 from "../assets/img_16.jpeg";
import img17 from "../assets/img_17.jpeg";
import img18 from "../assets/img_18.jpeg";
import img19 from "../assets/img_19.jpeg";
import img20 from "../assets/img_20.jpeg";
import img21 from "../assets/img_21.jpeg";
import img22 from "../assets/img_22.jpeg";
import img23 from "../assets/img_23.jpeg";
import img24 from "../assets/img_24.jpeg";

interface Tab {
    id: string;
    label: string;
}

const PawnaLakeTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const tabNavRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    console.log(setIsSticky);


    const tabs: Tab[] = [
        { id: 'overview', label: 'Overview' },
        { id: 'itinerary', label: 'Itinerary' },
        { id: 'photogallery', label: 'Photogallery' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'advisory', label: 'Advisory' }
    ];

    const photos = [
        { title: "Mountain View Camping", img: img1 },
        { title: "Bonfire Night Experience", img: img2 },
        { title: "Sunrise in Chakrata", img: img3 },
        { title: "Scenic Tent Stay", img: img4 },
        { title: "Cozy Camping Tents", img: img5 },
        { title: "Group Camping Moments", img: img6 },
        { title: "Starry Night Sky", img: img7 },
        { title: "Nature & Peaceful Surroundings", img: img8 },
        { title: "Beautiful Valley Views", img: img9 },
        { title: "Delicious Home-style Food", img: img10 },
        { title: "Bonfire & Music Vibes", img: img11 },
        { title: "Relaxing Evening Ambience", img: img12 },
        { title: "Tent Setup in Mountains", img: img13 },
        { title: "Nearby Nature Walks", img: img14 },
        { title: "Himalayan Views", img: img15 },
        { title: "Peaceful Morning Vibes", img: img16 },
        { title: "Sunset Views", img: img17 },
        { title: "Camp Area Setup", img: img18 },
        { title: "Friends & Fun Moments", img: img19 },
        { title: "Evening Chill Vibes", img: img20 },
        { title: "Mountain Landscape", img: img21 },
        { title: "Camping Life Experience", img: img22 },
        { title: "Nature Escape", img: img23 },
        { title: "Relax & Unwind", img: img24 },
    ];

    useEffect(() => {
        // const handleScroll = () => {
        //     if (!tabNavRef.current) return;

        //     const tabNavRect = tabNavRef.current.getBoundingClientRect();
        //     const shouldBeSticky = tabNavRect.top <= 0;
        //     setIsSticky(shouldBeSticky);

        //     // Update active tab based on scroll position
        //     if (shouldBeSticky) {
        //         const scrollPosition = window.scrollY + 100; // Offset for sticky header

        //         for (let i = tabs.length - 1; i >= 0; i--) {
        //             const section = sectionRefs.current[tabs[i].id];
        //             if (section) {
        //                 const sectionTop = section.offsetTop;
        //                 if (scrollPosition >= sectionTop) {
        //                     setActiveTab(tabs[i].id);
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // };

        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, [tabs]);

    const scrollToSection = (tabId: string) => {
        const section = sectionRefs.current[tabId];
        if (section && tabNavRef.current) {
            const offsetTop = section.offsetTop - (isSticky ? 80 : 0); // Adjust for sticky header height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setActiveTab(tabId);
    };

    const setSectionRef = (tabId: string) => (ref: HTMLDivElement | null) => {
        sectionRefs.current[tabId] = ref;
    };

    return (
        <div className="w-full">
            {/* Sticky tab navigation */}
            <div
                ref={tabNavRef}
                className="sticky z-10 top-[6.5rem] md:top-[6.5rem]"
            >
                <div className="w-full md:max-w-7xl mx-auto">
                    <div className="flex flex-row flex-wrap">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`flex-1 px-0 py-3 md:px-6 md:py-4 text-center font-medium text-[10px] md:text-lg transition-all duration-300 ${index < tabs.length - 1 ? 'border-r-2 border-teal-600' : ''
                                    } md:border-b-0 border-b-2 md:last:border-r-0 last:border-b-0 hover:bg-yellow-600 hover:-translate-y-0.5 ${activeTab === tab.id
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-yellow-500 text-white hover:bg-yellow-600'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab sections */}
            <div className="max-w-7xl mx-auto px-6">
                {/* Overview Section */}
                <section
                    ref={setSectionRef('overview')}
                    id="overview"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Overview</h2>
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            ⭐ <strong>Vishalsurya Camping — Rated 5.0</strong> is one of Chakrata’s most loved camping stays,
                            hosted by the incredibly warm Vishal bhai and Surya bhai.
                        </p>

                        <p>
                            Located near Langapokhri, Shirkota on Chakrata–Mussoorie Road, this campsite offers a peaceful
                            mountain escape with stunning sunrise and sunset views, cozy tent stays, and delicious
                            home-style food.
                        </p>

                        <p>
                            Perfect for couples, friends, and families looking to unwind in nature, away from crowded
                            tourist spots. Enjoy bonfire nights, fresh mountain air, beautiful stargazing under clear skies,
                            and a calm environment surrounded by Himalayan beauty.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg my-6">
                            <p className="font-semibold mb-2">
                                <strong>Address:</strong> Near Langapokhri, Shirkota, Chakrata–Mussoorie Road
                            </p>
                            <p className="font-semibold">
                                <strong>Contact:</strong> +91 89799 99340
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
                            Places To Visit Near Chakrata
                        </h3>

                        <ol className="space-y-3">
                            {[
                                "Tiger Fall ⭐ 4.5 — One of India’s tallest waterfalls (312 ft), about 1 hour away",
                                "Chakrata View Point ⭐ 4.7 — Stunning panoramic Himalayan views",
                                "Sunrise & Sunset Point ⭐ 4.9 — Best golden hour spot in Chakrata",
                                "Moila Top ⭐ 4.6 — Scenic trek with breathtaking views and Budher caves nearby",
                                "Deoban ⭐ 4.8 — Dense forest area with majestic Himalayan views and peaceful surroundings"
                            ].map((place, index) => (
                                <li key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                                    <span className="text-lg">{index + 1}. </span>
                                    <span className="text-blue-800 font-medium text-lg">
                                        {place}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Itinerary Section */}
                <section
                    ref={setSectionRef('itinerary')}
                    id="itinerary"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Itinerary</h2>

                    <div className="space-y-6 text-lg leading-relaxed">

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Day 1: Arrival & Relaxation</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• 1:00 PM - Check-in & tent allocation</li>
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• Relax and explore nearby mountain views</li>
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• Evening - Enjoy sunset views</li>
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• Bonfire session (extra cost)</li>
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• 8:30 PM - Dinner (home-style food)</li>
                                <li className="border-l-4 border-blue-400 px-4 py-2 bg-white/50 rounded-r">• Overnight stay in tents</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="text-xl font-bold text-orange-800 mb-4">Day 2: Sunrise & Departure</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="border-l-4 border-orange-400 px-4 py-2 bg-white/50 rounded-r">• Early morning sunrise view</li>
                                <li className="border-l-4 border-orange-400 px-4 py-2 bg-white/50 rounded-r">• 8:30 AM - Breakfast (MAP Plan)</li>
                                <li className="border-l-4 border-orange-400 px-4 py-2 bg-white/50 rounded-r">• Relax and enjoy peaceful surroundings</li>
                                <li className="border-l-4 border-orange-400 px-4 py-2 bg-white/50 rounded-r">• 11:00 AM - Check-out</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* Photo Gallery Section */}
                <section
                    ref={setSectionRef("photogallery")}
                    id="photogallery"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                        Photo Gallery
                    </h2>

                    <p className="text-center text-lg max-w-2xl mx-auto mb-10">
                        Explore beautiful moments from Vishalsurya Camping — scenic mountain views,
                        cozy tents, bonfire nights, and peaceful nature experiences in Chakrata.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            >
                                <img
                                    src={photo.img}
                                    alt={photo.title}
                                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-end justify-center">
                                    {/* <p className="text-white text-sm md:text-xl font-semibold bg-black  w-full text-center py-2">
                                        {photo.title}
                                    </p> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs Section */}
                <section
                    ref={setSectionRef('faqs')}
                    id="faqs"
                    className="py-12 min-h-screen"
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {
                            [
                                {
                                    question: "What is included in the stay?",
                                    answer: "Tent stay with comfortable bedding, dinner (CP plan), and breakfast + dinner (MAP plan). Bonfire is available at an extra cost."
                                },
                                {
                                    question: "What are the check-in and check-out timings?",
                                    answer: "Check-in is at 1:00 PM and check-out is at 11:00 AM."
                                },
                                {
                                    question: "Is bonfire included in the package?",
                                    answer: "No, bonfire is chargeable at ₹500 for 2 hours. Extra time costs ₹200 per hour."
                                },
                                {
                                    question: "Is the location suitable for families?",
                                    answer: "Yes, it is a peaceful and family-friendly campsite perfect for couples, friends, and families."
                                },
                                {
                                    question: "How can I contact for booking?",
                                    answer: "You can call Vishal (8979999340) or Surya (9557892303) for bookings and queries."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="font-semibold text-lg mb-3 text-blue-800">Q: {faq.question}</p>
                                    <p className="text-gray-700 leading-relaxed">A: {faq.answer}</p>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Advisory Section */}
                <section
                    ref={setSectionRef('advisory')}
                    id="advisory"
                    className="py-12 min-h-screen"
                >
                    <div className="space-y-6 text-lg leading-relaxed">

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-yellow-800 mb-2">Weather Advisory:</p>
                            <p className="text-gray-700">
                                Chakrata has cool weather throughout the year. Carry warm clothes, especially during evenings and winters.
                            </p>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-blue-800 mb-2">Essential Items:</p>
                            <p className="text-gray-700">
                                Carry comfortable clothes, jackets, personal medicines, flashlight, and valid ID proof.
                            </p>
                        </div>

                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-orange-800 mb-2">Rules:</p>
                            <p className="text-gray-700">
                                Please maintain cleanliness, respect nature, and avoid loud noise late at night.
                            </p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                            <p className="font-semibold text-green-800 mb-2">Booking Policy:</p>
                            <p className="text-gray-700">
                                Advance booking is recommended. Prices may vary during peak seasons.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default PawnaLakeTabs;