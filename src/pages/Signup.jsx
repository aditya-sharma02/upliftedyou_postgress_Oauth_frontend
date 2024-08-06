import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { login, logout } from "../store/slice/LoggingSlice";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const SignUp = () => {


    const [load, setload] = useState(false)

    const nav = useNavigate()
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        cp: "",
    })








    ///////



    const dispatch = useDispatch();
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        picture: "",
    });

    const logintogoogle = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const logOuttogoogle = () => {
        googleLogout();
        setProfile(() => {
            return {
                name: "",
                email: "",
                picture: ""
            }
        });
        dispatch(logout())
        nav("/")
    };

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
                // if (user.access_token) return;
                console.log(res);
                if (!res.email) return;
                setProfile(() => {
                    return {
                        name: res.name,
                        email: res.email,
                        picture: res.picture
                    }
                });
                // *****

                setload(true)
                // let result = await fetch("http://mental-health-project.onrender.com/signup", {
                let result = await fetch("http://localhost:5000/signup", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: res.name,
                        email: res.email,
                        password: "",
                        age: 0,
                        gender: "male"
                    })
                })
                const response = await result.json();
                setload(false);
                if (response.status === 201) {
                    alert("sign up Succesfull ")
                    localStorage.setItem("userId", user.access_token)
                    localStorage.setItem("userEmail", res.email)
                    dispatch(login());
                    nav("/")
                }
                else if (response.status === 409) {
                    alert("User already registered")
                    nav("/login")
                }




                // *****

            }
            // else {
            //     alert("invalid credentials")
            // }
        }
        func();
    },
        [user]
    );


    ///////








    const handlechange = (e) => {
        setdata((preval) => {
            return { ...preval, [e.target.name]: e.target.value }
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.password || !data.gender) {
            alert("Please complete the form before submiting")
        }
        else if (data.cp != data.password) {
            alert("password and Confirm password not matched")
        }
        else {
            setload(true)
            // let res = await fetch(" https://mental-health-project.onrender.com/signup", {
            // ***********
            let res = await fetch(" http://localhost:5000/signup", {
            // ***********
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    // age: data.age,
                    gender: data.gender
                })
            })
            const response = await res.json();
            setload(false);
            if (response.status === 201) {
                alert("sign up Succesfull ")
                setdata({
                    name: "",
                    email: "",
                    password: "",
                    age: "",
                    gender: "",
                })
                console.log(response.email);
                localStorage.setItem("userEmail", response.email)
                dispatch(login());
                nav("/")
            }
            else if (response.status === 409) {
                alert("User already registered")
                nav("/login")
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
            <div className="flex mt-[4.9%] items-center justify-center w-[100%] h-96 sm:mt-16 sm:pl-10">
                {/* <form>
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg text-black"
                        type="text"
                        placeholder="name"
                        value={data.name}
                        name="name" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="email"
                        placeholder="email"
                        value={data.email} name="email" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="password"
                        minLength={10}
                        placeholder="password"
                        value={data.password}
                        name="password" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="password"
                        minLength={10}
                        placeholder="confirm password"
                        value={data.cp}
                        name="cp" />
                    <input
                        onChange={handlechange}
                        style={{ border: "1px solid black" }}
                        className="w-[60%] mt-5 p-1 rounded-lg"
                        type="number"
                        placeholder="age"
                        value={data.age}
                        name="age" />
                    <br />
                    <div className="flex mt-4" >
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16 hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="male"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "male" }
                                })
                            }}>Male</div>
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16  hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="female"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "female" }
                                })
                            }}>female</div>
                        <div
                            style={{ border: "2px solid black", marginRight: "20px" }}
                            className="text-center w-32 rounded-lg sm:w-16  hover:bg-gray-600 hover:text-white transition-all"
                            name="gender"
                            value="other"
                            onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, gender: "other" }
                                })
                            }}>other</div>
                    </div>
                    <button
                        style={{ border: "2px solid black" }}
                        className=" mt-3 hover:bg-black hover:text-white text-center w-32 rounded-lg sm:w-16 transition-all"
                        type="submit"
                        onClick={submit}>Submit</button>
                </form> */}
                <div>
                    {profile.name != "" ? (
                        <div>
                            <img src={profile.picture} alt="user image" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <button onClick={logOuttogoogle}>Log out</button>
                        </div>
                    ) : (
                        <button onClick={logintogoogle}>Sign in with Google 🚀 </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;