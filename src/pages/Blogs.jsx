import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";
import Loader from "../components/Loader"
const Blogs = () => {
    const [data, setdata] = useState()
    const [loading, setloading] = useState(false)
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)

    useEffect(() => {
        const submit = async () => {
            setloading(true);
            try {
                const response = await fetch("https://mental-health-project.onrender.com/getblogs")
                const data = await response.json()
                console.log(data.articles)
                setdata(data.articles)
                // console.log(data)
                setloading(false)
            } catch (error) {
                console.log(error)
            }
        }
        submit();
    }, [])
    if (loading === true) {
        return (
            <>
                <div className="w-screen h-screen flex justify-center items-center">
                    <Loader />
                </div>
            </>
        )
    }
    return (
        <>
            <Navbar />
            <div className="w-screen mt-28 flex-col h-auto items-center">
                {data?.map((elem, id) => {
                    return (
                        <a key={id} href={elem.url}>
                            <div className="w-[60%] m-auto mt-16 h-auto">
                                <div className="w-[100%]"><img src={elem.urlToImage} /></div>
                                <div className="text-2xl font-bold">{elem.title}</div>
                                <div className="w-[100%] mt-10 text-l font-semibold" >{elem.content}</div>
                                <div className="mt-5">{elem.author}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Blogs;