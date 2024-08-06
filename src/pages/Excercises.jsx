import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Exercise } from "../data";

import { useDispatch,useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";
const Exercises = () => {
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)
    
    return (
        <>
            <Navbar />
            <div className="w-screen mt-28 flex-col mb-28  h-auto items-center">
                {Exercise.map((elem, id) => {
                    return (
                        <div key={id} className="w-[60%] m-auto mt-16 h-auto sm:w-[80%]">
                            <div className=" text-4xl">{elem.title}</div>
                            <div className="text-justify text-xl mt-10">{elem.val}</div>
                        </div>
                    )
                })}

            </div>
            <Footer/>
            
        </>
    )
}

export default Exercises;