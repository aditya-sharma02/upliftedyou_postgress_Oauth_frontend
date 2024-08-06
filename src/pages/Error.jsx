import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Error = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-28 h-[46.2vh]">
                <div className="text-3xl">
                    404 | Page Not Found</div>
            </div>
            <Footer/>
        </>
    )
}

export default Error;