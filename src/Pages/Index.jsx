import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import element1 from '/Images/element1.png';
import element2 from '/Images/element2.png';
import element3 from '/Images/element3.png';
import element4 from '/Images/element4.png';
import element5 from '/Images/element5.png';
import element6 from '/Images/element6.png';

import about1 from '/Images/about-img1.png';
import about2 from '/Images/about-img2.png';
import user from '/Images/user.png';
import aboutimage from '/Images/about-image.jpg';

import featureicon1 from '../../public/Images/feature-icon1.png';
import featureicon2 from '../../public/Images/feature-icon2.png';
import featureicon3 from '../../public/Images/feature-icon3.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"



function Index() {
    return (
        <>
            {/* Hero */}
            <div className="hero flex justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] h-screen relative">
                <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
                    <span className="text-[#076dcb] font-semibold chakrapetch-font">
                        <i className="bi bi-book pe-2"></i>
                        Your Future, Achieve Success
                    </span>
                   <h2 class="text-[#222e48] text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold sora-font py-2 w-full xl:w-[75%]">
                    Find Your <span class="text-[#18a54a]">Ideal</span> Course, Build <span class="text-[#e58209]">Skills</span>
                    </h2>
                    <p className="text-[#576070] w-full lg:w-[60%] pb-4 text-sm sm:text-md">
                        We are dedicated to nurturing young minds, empowering them with knowledge, skills, and confidence to excel.
                    </p>
                    <div className="flex gap-3 felx-wrap">
                        <button className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300" type='submit'>
                            Get Start Today
                            <i className="bi bi-arrow-up-right ps-2"></i>
                        </button>


                        <button className="btn custom-btn text-[#076dcb] border border-[#076dcb] hover:bg-[#076dcb] hover:text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300" type='submit'>
                            Find Courses
                            <i className="bi bi-arrow-up-right ps-2"></i>
                        </button>
                    </div>
                </div>

                <img src={element1} alt="shape-image" className="element1 hero-shaped1 absolute left-30 top-30 object-contain hidden md:block" />
                <img src={element2} alt="shape-image" className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block" />
                <img src={element3} alt="shape-image" className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block" />
                <img src={element4} alt="shape-image" className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block" />
                <img src={element5} alt="shape-image" className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex" />
                <img src={element5} alt="shape-image" className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex" />
                <img src={element6} alt="shape-image" className="element5 hero-shape7 absolute right-50 top-20 w-[25px] hidden lg:flex"/>
                
   
            </div>

            {/* About */}
            <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
                <div className="about-content flex flex-col lg:w-1/2 w-full">
                    <span className="text-[#076dcb] font-semibold sora-font pb-1">
                    <i className="bi bi-book pe-2"></i>
                    About StudIQ
                    </span>
                    <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 sora-font font-semibold">The Place Where You Can Achieve</h2>
                    <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
                    Welcome to StudIQ, where learning knows no bounds. Whether you're a student, professional, or lifelong learner..
                    </p>
                    <ul className="flex flex-col gap-6 pb-10">
                        <li className="flex gap-3 sm:flex-nowrap flex-wrap">
                            <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center items-center p-4">
                                <img src={about1} alt="about-image" className="object-contain"/>
                            </div>
                            <div>
                                <h4 className="text-[#222e48] font-semibold text-xl sora-font">Our Mission</h4>
                                <p className="text-neutral-500 text-sm lg:text-md">
                                Driven by a team of dedicated educators, technologists, and visionaries, we strive to create a supportive
                                </p>
                           </div>
                        </li>
                        <li className="flex gap-3 sm:flex-nowrap flex-wrap">
                            <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center items-center p-4">
                            <img src={about2} alt="about-image" className="object-contain"/>
                            </div>
                            <div>
                            <h4 className="text-[#222e48] font-semibold text-xl sora-font">Our Vison</h4>
                            <p className="text-neutral-500 text-sm lg:text-md">
                                A professional seeking to upskill, or a lifelong learner exploring new horizons, we're here to accompany you every step of way
                            </p>
                            </div>
                        </li>
                    </ul>
                
                    <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
                        <button className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300" type="submit">
                        Read More
                        <i className="bi bi-arrow-up-right ps-2"></i>
                        </button>
                        <div className="about-user flex">
                            <img src={user} alt="user-image" className="w-10 h-10" />
                            <div className="ps-2">
                                <span className="sora-font text-sm">Alex Condori</span>
                                <p className="text-[#576070] text-sx">CEO of Company</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-image w-full lg:w-1/2 h-[550px] overflow-hidden group rounded-lg z-2">
                <img src={aboutimage} alt="about-image" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <img src={element1} alt="shape-image" className="element1 about-shape1 absolute left-10 top-30 object-contain sm:block hidden" />
                <img src={element6} alt="shape-image" className="element5 about-shape7 absolute right-10 bottom-10 object-contain lg:block hidden" />
                <img src={element5} alt="shape-image" className="element5 about-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:block hidden" />
                <img src={element5} alt="shape-image" className="element5 about-shape5 absolute right-30 top-70 w-[20px] h-[20px] sm:block hidden" />

            </div>

            {/* Feactures */}
            <div className="feature flex justify-center items-center flex-col gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[120px] relative">
                <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
                    <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold">
                        Explore 5,000+ Free Online Courses For Students
                    </h2>
                    <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-md">
                        Welcome to our diverse and dynamic course catalog. we're dedicated to providing you with access to high-quality education 
                    </p>
                </div>
                <Swiper
                 slidesPerview={3}
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        1399: {
                            slidesPerView: 3
                        },
                        1199: {
                            slidesPerView: 2.5
                        },
                        767: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        },
                    }}
                    className="feature-wrapper w-full"        
                >
                    <SwiperSlide>
                        <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
                            <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                                <img src={featureicon1} alt="feature-icon" />
                            </div>
                            <div className="feature-info pt-8">
                                <h4 className="[text-[#222e48] sora-font pb-2 text-xl font-semibold  group-hover:text-white">
                                    Language Learning
                                </h4>
                                <p className="[text-[#576070] text-sm  group-hover:text-white">
                                    Courses teaching languages such as English, Spanish, French, Mandarin etc
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>  
    )
}


export default Index
