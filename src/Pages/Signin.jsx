import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import element1 from "../Images/element1.png";
import element2 from "../Images/element2.png";
import element3 from "../Images/element3.png";
import element4 from "../Images/element4.png";
import element5 from "../Images/element5.png";
import { Link } from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import learningImage from "../Images/learning_image.png";

function SignIn() {
    return (
        <>
            <div className='section-banner bg-[#f3f9ff] h-[400px] py-[50px] lg:py-[90px] flex flex-col justify-center items-center relative'>
                <h1 className='chakrapetch-font font-bold text-5xl lg:text-6xl mb-5 text-[#222e48]'>
                    Sign In
                </h1>
                <ul className='flex items-center gap-2'>
                    <li className='cursor-pointer'>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHome} className='pr-1' />
                            <span className='text-sm xl:text-md text-[#404a60]'>Home</span>
                        </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to='/SingIn'>
                            <FontAwesomeIcon icon={faHome} className='pr-1' />
                            <span className='text-sm xl:text-md text-[#f37739]'>Sign In</span>
                        </Link>
                    </li>
                </ul>

                <img src={element1} alt="shape-image" className='element1 shape1 absolute left-30 top-30 object-contain hidden md:block' /> 
                <img src={element2} alt="shape-image" className='element2 shape2 absolute left-20 top-60 object-contain hidden md:block' />
                <img src={element3} alt="shape-image" className='element3 shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block' />
                <img src={element4} alt="shape-image" className='element3 shape4 absolute right-30 bottom-30 z-2 object-contain hidden lg:block' />
                <img src={element5} alt="shape-image" className='element5 shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex' />
                <img src={element5} alt="shape-image" className='element5 shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex' />
            </div>

            <div className='px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[80px] w-full flex flex-col lg:flex-row justify-between items-center gap-10 xl:gap-20 z-10 relative'>
                <div className='lg:w-1/2 w-full'>
                    <form method='post' className='w-full bg-[#f3f9ff] border border-[#ebecef] p-10 rounded-2xl'>
                    <h2 className='text-[#222e48] text-2xl lg:text-4xl font-semibold pb-2'>Welcome Back</h2>
                    <p className='text-[#404a60] text-sm lg:text-md'>
                        Sign in to your account and join us
                    </p>
                    <div className="mt-5 flex flex-col">
                        <label className='text-[#404a60] font-normal pb-1 text-sm lg:text-lg'>Enter Email ID</label>
                        <input type="text" placeholder='Enter Your Email...' required className='h-[45px] border border-[#ebecef] bg-white ps-4 rounded-lg outline-none' />
                    </div>
                    <div className="mt-5 flex flex-col">
                        <label className='text-[#404a60] font-normal pb-1 text-sm lg:text-lg'>Enter Your Password</label>
                        <input type="password" placeholder='Enter Your Password...' required className='h-[45px] border border-[#ebecef] bg-white ps-4 rounded-lg outline-none' />
                    </div>

                    <Link to='' className='text-[#ff9f29] text-end block font-light pt-1 text-sm lg:text-md'>
                        Forget Password
                    </Link>
                    <p className='text-[#404a60] mb-4 text-sm lg:text-md'>Dont't have an account ?</p>

                    <button className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300" type="submit">
                        Sign In
                        <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                    </form>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className='learning-image lg:mx-0 mx-auto bg-[#f3f9ff] rounded-[50%] w-full sm:w-[600px] h-[600px] p-10'>
                        <img src={learningImage} alt="learning-image" className='w-full h-full object-cover' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignIn