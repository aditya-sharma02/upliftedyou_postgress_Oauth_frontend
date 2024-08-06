import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";
import { Cdata } from "../data";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";


const Home = () => {
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)
    
    return (
        <>
            <Navbar />
            <div style={{ position: "relative" }} className="w-screen overflow-hidden h-screen " >

                <div className=" flex  justify-center overflow-hidden w-screen h-screen bg-cover bg-[url('homeimg.jpg')]">

                    <div className="w-[40%] sm:w-[70%] sm:mr-10 tracking-widest text-justify text-xl mt-auto mb-auto items-center ">At<span className="font-bold"> UpLiftedYou</span>, we understand that mental health is a vital aspect of our overall well-being. Our mission is to provide a safe and supportive online space where you can find valuable resources, information, and guidance to enhance your mental health journey. Whether you're seeking information for yourself or a loved one, you've come to the right place.</div>
                </div>
                {/* <Footer /> */}
            </div>
            <section className=" m-0 p-0 w-screen overflow-hidden h-screen flex flex-wrap items-center justify-center sm:h-auto md:h-auto ">
                <div className="w-[40%] truncate  h-[60%] bg-black sm:w-[100%] md:w-[100%]">
                    <img className="h-[100%] hover:scale-125 transition-all " src="mission.jpg" />
                </div>
                <div className="w-[40%] h-[80%] sm:w-[100%] sm:h-auto md:w-[100%] md:h-auto">
                    <div className="text-5xl tracking-widest mt-20 text-center  w-[100%]">Our Mission</div>
                    <div className="text-justify text-xl tracking-widest mt-10 pl-10 sm:w-[100%] sm:mt-5 sm:pl-1 sm:pr-1 md:w-[100%] md:mt-5 md:pl-1 md:pr-1">
                        Our mission is to break the stigma surrounding mental health and provide accessible, evidence-based information and resources to individuals seeking support. We aim to empower you to take control of your mental well-being and live a fulfilling life.
                        Our mission is to break the stigma surrounding mental health and provide accessible, evidence-based information and resources to individuals seeking support. We aim to empower you to take control of your mental well-being and live a fulfilling life.
                    </div>
                </div>

            </section>


<br/>

            <section className="w-screen text-widest h-screen sm:h-auto md:h-auto">
                <h1 className="text-5xl pl-10 sm:pl-0 sm:mb-4 sm:text-4xl md:mb-10">What We Offer ...</h1>
                <div className="flex flex-wrap justify-around w-screen h-screen sm:flex-col items-center sm:h-auto  md:h-auto">
                    {
                        Cdata.map((elem, id) => {
                            return (

                                <div key={id} style={{ boxShadow: "-20px 22px 0px black", border: "2px solid grey" }} className="flex-col items-center w-[25%] min-h-[60%] sm:w-[80%] md:w-[80%] md:mb-10 sm:mb-10 flex-wrap">
                                    <div className="text-3xl text-center tracking-widest mt-5">{elem.name}</div>
                                    <div className="text-justify text-l tracking-widest p-5">
                                        {elem.description}
                                    </div>
                                    <div className="text-justify text-l tracking-widest p-5" >{elem.sub}</div>
                                    <a href={elem.link}><button className="m-5 w-[35%] hover:text-xl transition-all h-[10%] text-white bg-black rounded-r-lg">Check Out</button></a>
                                </div>
                            )
                        })
                    }
                </div>

            </section>

            <section className="flex w-screen flex-wrap text-widest h-auto mt-10 pl-20 pr-20 sm:pl-3 sm:pr-3 sm:h-auto md:pl-3 md:pr-3 md:h-auto">
                <div className="text-justify md:text-center sm:text-center text-xl tracking-widest mt-10 w-[50%] sm:w-[100%] md:w-[100%]">
                    <h1 className="text-4xl">Join Us in Breaking the Stigma</h1>
                    <div className="text-justify text-xl tracking-widest mt-10 ">
                        Mental health is a universal concern, and no one should have to face it alone. By accessing our resources and engaging with our community, you are contributing to a world where seeking help for mental health is seen as a sign of strength.
                        {/* <br /><br /> */}
                        Remember, seeking help is a sign of courage, and every step you take towards better mental health is a step towards a brighter future.
                        <br />
                        Thank you for visiting UpLiftedYou. We are here to support you on your journey to improved well-being.
                    </div>
                </div>
                <div className="w-[40%] rounded-full truncate m-auto bg-black h-96 sm:h-auto sm:mt-4 sm:w-[100%] md:h-auto md:mt-4 md:w-[100%]">
                    <div className="sm:w[100%] md:w-[100%]">
                        <img src='/lb.png' />
                    </div>
                </div>
            </section>


            <section className="w-screen text-widest h-auto mt-28 mb-28 pl-20 pr-20 sm:pl-3 sm:pr-7 ">
                <h1 className="text-3xl">Your Privacy Matters</h1>
                <div className="text-justify text-xl tracking-widest mt-10 ">
                    We understand the importance of privacy when seeking mental health support. Your anonymity is a priority, and any information you share with us is kept confidential.
                    <br />
                    Assuring that interactions on the website will be kept confidential and, if applicable, anonymized.
                    <br />
                    Emphasizing that personal information will not be shared without explicit consent, unless required by law.
                    Clearly outlining, data will be collected, stored, and used.
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;