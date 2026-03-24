import React from "react";
import { FaWhatsapp } from "react-icons/fa";// WhatsApp-like icon

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/918979999340?text=Hello%20Vishalsurya%20Camping%2C%20I%20would%20like%20to%20know%20more%20about%20booking%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default WhatsAppButton;
