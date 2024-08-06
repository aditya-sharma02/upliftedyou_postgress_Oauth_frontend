import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/slice/LoggingSlice";


const Navbar = () => {
    const nav = useNavigate()
    const disp = useDispatch()
    const state = useSelector((state) => state.logging)
    const logoutuser = () => {
        disp(logout())
        nav("/")
    }


    return (
        <>
            <nav style={{
                position: "fixed",
                top: "0",
                width: "100%"
            }} className="z-[100] flex flex-wrap center w-screen justify-between backdrop-filter backdrop-blur-lg">
                <img src="lw.png" className="w-80 ml-8 mt-3  sm:w-[80%] md:w-[80%]" />
                <div className="flex  w-[50%] text-stone-500 justify-around items-center text-2xl sm:w-[100%]  sm:justify-between sm:text-sm md:w-[100%] md:justify-around md:text-md ">
                    <div className="hover:text-stone-950 ">
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className="hover:text-stone-950">
                        <NavLink to='/exercises'>Excercise</NavLink>
                    </div>
                    <div className="hover:text-stone-950">
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    {state.isloggedin && <div className="hover:text-stone-950">
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>}
                    {state.isloggedin && <div className="hover:text-stone-950">
                        <NavLink to='/test'>Test</NavLink>
                    </div>}
                    {state.isloggedin && <div onClick={logoutuser} className="hover:text-stone-950">Logout</div>}
                    {!state.isloggedin && <div className="hover:text-stone-950 ">
                        <NavLink to='/signup'>Signup</NavLink>
                    </div>}
                    {!state.isloggedin && <div className="hover:text-stone-950">
                        <NavLink to='/login'>Login</NavLink>
                    </div>}
                </div>
            </nav>
        </>
    )
}
export default Navbar;