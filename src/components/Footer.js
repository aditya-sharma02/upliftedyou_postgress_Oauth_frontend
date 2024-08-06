import React from "react";

const Footer = () => {
    return (
        <>
            <div className="flex flex-wrap justify-around w-screen truncate bg-black h-72 sm:h-auto md:h-auto">
                <div className="w-[30%] h-auto sm:w-[100%]">
                    <img src="/lb.png" />
                </div>
                <div className="flex-col flex-wrap justify-around w-[50%] h-full sm:w-[100%] sm:h-auto md:w-[100%] md:h-auto" >
                    <div className="flex flex-wrap justify-around w-[100%] h-52 sm:w-[100%] sm:h-auto md:w-[100%] md:h-auto">
                        <div className="w-[40%] pt-5 text-white sm:w-[100%] sm:pt-0 sm:pl-5 sm:pr-5 md:w-[100%] md:pt-0 md:pl-5 md:pr-5">
                            <div className="text-xl pb-2 rounded-lg text-center border-b-2 border-white">Also Check Out</div>
                            <div className="pt-3 tracking-wide ">
                                <a className="hover:text-xl transition-all" href="/blogs">Articles</a><br />
                                <a className="hover:text-xl transition-all" href="/exercises">Exercise</a><br />
                                <a className="hover:text-xl transition-all" href="/test">Test mental health</a>
                            </div>
                        </div>
                        <div className="w-[40%] pl-5 pt-5 text-white sm:w-[100%] sm:pr-5 sm:pb-5 md:w-[100%] md:pr-5 md:pb-5">
                            <div className="text-xl pb-2 rounded-lg text-center border-b-2 border-white">Contact Various Ngo's</div>
                            <div className="pt-3 tracking-wide">
                                <div>+91-9922001122</div>
                                <div>Manas Foundation: +91-80 6909 6909</div>
                                <div>Aasra: +91-22 2754 6669</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] text-xl text-white  text-center mt-auto mb-auto sm:text-sm">
                        Designed and Developed ©2023AdityaSharma
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;