import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slice/LoggingSlice";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { RiAccountCircleFill } from "react-icons/ri"
import Loader from "../components/Loader";

const Login = () => {
    const [load, setload] = useState(false)
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    /////////////

    const [user, setUser] = useState([]);
    const logintogoogle = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    useEffect(() => {
        const func = async () => {
            if (user.access_token) {
                const data = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                        // 'Cross-Origin-Embedder-Policy': 'unsafe-none'
                    }
                })
                const res = await data.json();
                console.log(res.email);
                if (!res.email) return;
                // ************
                setload(true)
                // let result = await fetch(" https://mental-health-project.onrender.com/login", {
                    let result = await fetch(" http://localhost:5000/login", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: res.email,
                        password: "",
                    })
                })
                const response = await result.json()
                setload(false)
                if (response.status === 200) {
                    localStorage.setItem("userId", user.access_token)
                    localStorage.setItem("userEmail", res.email)
                    dispatch(login());
                    nav("/")
                }
                else if (response.status === 401) {
                    alert("invalid credentials")
                }
                // ************
            }
            // else {
            //     alert("invalid credentials")
            // }
        }
        func();
    },
        [user]
    );

    //////////////////


    const handlechange = (e) => {
        setdata((preval) => {
            return { ...preval, [e.target.name]: e.target.value }
        })
    }

    const submit = async (e) => {
        e.preventDefault();
        if (!data.email) {
            alert("Enter Valid Email")
        }
        if (!data.password) {
            alert("Enter password")
        }
        else {
            setload(true)
            // let res = await fetch(" https://mental-health-project.onrender.com/login", {
            let res = await fetch(" http://localhost:5000/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })
            const response = await res.json()
            setload(false)
            if (response.status === 200) {
                localStorage.setItem("userEmail", response.email)
                dispatch(login());
                nav("/")
                setdata({
                    email: "",
                    password: ""
                })
            }
            else if (response.status === 401) {
                alert("invalid credentials")
            }

        }
    }

    if (load) {
        return (
            <>
                <Loader />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap mt-[4.9%]  w-screen justify-center items-center h-96 sm:h-auto sm:mt-28">

                <div className=" flex justify-center text-[300px] text-gray-900 items-center w-[50%] h-[100%] sm:h-auto" >
                    <RiAccountCircleFill className="" />
                </div>

                <div className="flex sm:justify-center items-end justify-start w-[50%] sm:w-[100%] ">
                    {/* <form>
                        <label htmlFor="html">Email</label><br />
                        <input onChange={handlechange} style={{ border: "1px solid black" }} className="w-72 mt-5 p-1 rounded-lg" type="email" placeholder="email" value={data.email} name="email" required={true} />
                        <br />
                        <label htmlFor="html">Password</label><br />
                        <input onChange={handlechange} style={{ border: "1px solid black" }} className="w-72 mt-5 p-1 rounded-lg" type="password" placeholder="password" value={data.password} name="password" required={true} />
                        <br />
                        <button style={{ border: "2px solid black" }} type="submit" className="mt-5 pl-5 pr-5 pt-3 pb-3 rounded-lg hover:bg-black hover:text-white transition-all sm:mb-5" onClick={submit}>click me</button>
                    </form> */}
                </div>
                <div>
                    <button onClick={logintogoogle}>Sign in with Google 🚀 </button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Login;