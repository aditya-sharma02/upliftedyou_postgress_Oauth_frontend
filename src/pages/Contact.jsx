import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/LoggingSlice";


const Contact = () => {
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        message: ""
    })

    useEffect(() => {
        const fuc = async () => {
            const id = localStorage.getItem("userId");
            const email = localStorage.getItem("userEmail");
            // let response = await fetch(`https://mental-health-project.onrender.com/getuser?id=${id}`)
            let response = await fetch(" http://localhost:5000/getuser", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    id: id,
                })
            })
            const data = await response.json();
            setuserdata({
                name: data.user.name,
                email: data.user.email,
                message: ""
            })

        }
        fuc();
    }, [])

    const handlechange = (e) => {
        setuserdata((preval) => {
            return {
                ...preval,
                [e.target.name]: e.target.value
            }
        })
    }
    const submit = async (e) => {
        e.preventDefault()
        // let res = await fetch("https://mental-health-project.onrender.com/message", {
        let res = await fetch("http://localhost:5000/message", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: userdata.name,
                email: userdata.email,
                message: userdata.message
            })
        })
        res = await res.json();
        console.log(res.status);
        if (res.status === "good") {
            alert("thank You message sent")
            setuserdata((preval) => {
                return {
                    ...preval, message: ""
                }
            })
        }
        else if (res.status === 500) {
            alert("Sorry cannot send message")
        }
    }
    return (
        <>
            <Navbar />
            <div style={{ height: "90vh", marginTop: "10vh" }} className=" flex w-screen flex-wrap">
                <div className="flex justify-center items-center w-[50%] h-[100%] sm:h-[30%] sm:w-[100%]">
                    <div className="w-[80%]">
                        <img src="/lw.png" />
                    </div>
                </div>
                <div className="text-white sm:pb-5 w-[50%] h-[100%] overflow-hidden bg-black sm:w-[100%]">
                    <div className="text-4xl text-center mt-10">... Drop Us Message ...</div>
                    <div className=" w-[100%] h-[60%] flex justify-center items-center">
                        <form className="">
                            <div className="m-5">
                                <input className=" pl-3 pt-2 pb-2 bg-black text-xl border rounded-md border-gray-500 w-96" type="text" placeholder="Name" name="name" onChange={handlechange} value={userdata.name} />
                            </div>
                            <div className="m-5">
                                <input className="pl-3 pt-2 pb-2 bg-black text-xl border border-gray-500 rounded-md w-96" type="email" placeholder="Email" name="email" onChange={handlechange} value={userdata.email} />
                            </div>
                            <div className="m-5">
                                <textarea className="pl-3 pt-2 pb-2 bg-black text-xl border border-gray-500 rounded-md w-96 h-32 " type="text" placeholder="Enter Your Message Here" onChange={handlechange} value={userdata.message} name="message" />
                            </div>
                            <button style={{ border: "2px solid white", }} className="pt-2 text-black pb-2 bg-white w-[30%] ml-5 rounded-lg text-xl" onClick={submit}>Submit</button>
                        </form>
                    </div>

                    <div className="w-[80%] m-auto text-justify tracking-widest">
                        Thank you for choosing UpLiftedYou as part of your mental health journey. Remember, you're never alone here.<br /><br />
                        With warmth and support,
                        <br />
                        The <span className="font-bold tracking-widest"> UpLiftedYou </span> Team
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contact;