import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";


function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
          <nav className={`nav w-full flex justify-between items-center px-[2%] lg:px-[12%] sm:px-[8%] h-[90px] fixed top-0 left-0 right-0 z-50 border border-[#045eb014] transition-all duration-500 ${isActive ? "bg-white shadow-lg" : ""}`}>
            <div className="nav-left flex items-center">
                <div className="nav-logo">
                    <Link to='/'>
                    <h1 className="text-3xl font-semibold unbounded-font">
                        Stud<span className="text-[#006dca]">
                            IQ
                        </span>
                    </h1>
                    </Link>
                </div>
                <ul className="hidden xl:flex gap-8 items-center ms-20 nav-menu">
                    <li className="relative px-4 py-1.55 group">
                        <Link to='/home' className="font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300">Home</Link>
                    </li>
                    <li className="relative px-4 py-1.55 group">
                        <Link to='/about' className="font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300">About</Link>
                    </li>
                    <li className="relative px-4 py-1.55 group">
                        <Link to='/courses' className="font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300">Courses</Link>
                    </li>
                    <li className="relative px-4 py-1.55 group">
                        <Link to='/blog' className="font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300">Blog</Link>
                    </li>
                    <li className="relative px-4 py-1.55 group">
                        <Link to='/contact' className="font-semibold text-md relative z-1 group-hover:text-white transition-colors duration-300">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-right flex gap-2-items-center">
                <div className="user text-xl min-h-[40px] bg-white hover:bg-[#006dca] hover:text-white transition-colors duration-300 shadow-xl p-1 flex justify-center items-center rounded-full cursor-pointer">
                    <Link to='/SignIn'>
                    <FontAwesomeIcon icon={faCircleUser} />
                    </Link>
                </div>
                <div className="open-sidebar min-h-[40px] min-w-[40px] text-xl bg-white hover:bg-[#006dca] hover:text-white transition-colors duration-300 shadow-xl p-1 justify-center items-center rounded-full flex xl:hidden" onClick={() => setIsOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
          </nav>
        <div className={`sidebar overflow-y-scroll ${isOpen ? "active" : ""}`}>
            <div className="nav-log">
                <Link to='/'>
                <h1 className="text-3xl font-semibold">
                    Stud <span className="text-[#006dca]">IQ</span>
                </h1>
                </Link>
            </div>
            <ul className="flex gap-6 items-start flex-col pt-10-w-full">
                <li className="realtive w-full">
                    <Link to='/Home' className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapeth-font text-md realtive-uppercase text-5xl border-b border-gray-300 pb-2 w-full block'>HOME</Link>
                </li>
                <li className="realtive w-full">
                    <Link to='/About' className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapeth-font text-md realtive-uppercase text-5xl border-b border-gray-300 pb-2 w-full block'>ABOUT</Link>
                </li>
                <li className="realtive w-full">
                    <Link to='/Courses' className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapeth-font text-md realtive-uppercase text-5xl border-b border-gray-300 pb-2 w-full block'>COURSES</Link>
                </li>
                <li className="realtive w-full">
                    <Link to='/Blog' className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapeth-font text-md realtive-uppercase text-5xl border-b border-gray-300 pb-2 w-full block'>BLOG</Link>
                </li>
                <li className="realtive w-full">
                    <Link to='/Contact' className='font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapeth-font text-md realtive-uppercase text-5xl border-b border-gray-300 pb-2 w-full block'>CONTACT</Link>
                </li>
            </ul>
            <div className="close-btn absolute top-5 right-10 text-2xl xl:text-3xl cursor-pointer" onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
          </div>
        </>
    )
}


export default Nav