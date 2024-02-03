import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav style={{
                backgroundColor: '#1e1e1e'
            }} >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-5" style={{ color: 'white' }}>General Championship</span>
                    </li>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link  to = "login" className="text-l text-white hover:underline pr-5 ">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;