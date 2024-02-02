import React from 'react';
// import '../path-to-your/dist/output.css'; // Adjust the path to your output.css file

const YourComponent = () => {
    return (
        <>
            <nav style={{
                backgroundColor: '#1e1e1e'
            }} >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-5" style={{ color: 'white' }}>General Championship</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a className="text-l text-white hover:underline pr-5 ">Login</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default YourComponent;
