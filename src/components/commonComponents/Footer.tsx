import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="Pawna Lake Logo"
                            className="h-20 w-40 object-cover"
                        />
                    </div>
                    <p className="text-gray-400 text-center md:text-start text-sm max-w-xs">
                        Escape into nature’s serenity by the lakeside — unwind, relax, and
                        reconnect with peace.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <h3 className="text-white text-lg font-semibold">Contact</h3>
                    {/* Email */}
                    <a
                        href="mailto:joshivishal498@gmail.com"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Send email to Pawna Lake Camp"
                    >
                        <MdEmail className="text-lg" />
                        joshivishal498@gmail.com
                    </a>

                    {/* Phone */}
                    <a
                        href="tel:+918979999340"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Call Pawna Lake"
                    >
                        <FaPhoneAlt className="text-base" />
                        +91 89799 99340
                    </a>
                    <a
                        href="tel:+919557892303"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        aria-label="Call Pawna Lake"
                    >
                        <FaPhoneAlt className="text-base" />
                        +91 95578 92303
                    </a>
                </div>

                {/* Social Links */}

                <div className="flex flex-col items-center md:items-center space-y-4">
                    <h3 className="text-white text-lg font-semibold">Follow Us</h3>

                    <div className="flex space-x-5 text-gray-400">
                        <a
                            href="https://www.instagram.com/vishalsuryacamp?igsh=MWMyNTJ1YmxoZmNjZw=="
                            className="hover:text-pink-500 transition-colors"
                            aria-label="Instagram"
                            target="_blank"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1DzHaPUWdx/"
                            className="hover:text-blue-600 transition-colors"
                            aria-label="Facebook"
                            target="_blank"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        {/* <a
                            href="#"
                            className="hover:text-sky-500 transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={24} />
                        </a> */}
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Pawana Lake. All rights reserved. Designed By <a className="hover:text-white" href="https://ratebotai.com/">Ratebotai.com</a></p>
            </div>
        </footer>
    );
};

export default Footer;
