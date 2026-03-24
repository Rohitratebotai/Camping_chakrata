import React from "react";
import logo from '../../assets/logo.png'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
            <div className="w-full max-w-7xl mx-auto flex items-center justify-center px-4 py-3">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        src={logo} // <-- update path if needed
                        alt="Pawna Lake Logo"
                        className="h-20 w-40 object-cover"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
