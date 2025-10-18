import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import element1 from "../Images/element1.png";
import element2 from "../Images/element2.png";
import element3 from "../Images/element3.png";
import element4 from "../Images/element4.png";
import element5 from "../Images/element5.png";
import element6 from "../Images/element6.png";

import about1 from "../Images/about-img1.png";
import about2 from "../Images/about-img2.png";
import user from "../Images/user.png";
import aboutimage from "../Images/about-image.jpg";

import featureicon1 from "../Images/feature-icon1.png";
import featureicon2 from "../Images/feature-icon2.png";
import featureicon3 from "../Images/feature-icon3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import chooseus from "../Images/chooseus.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faUserCircle,
  faCalendar,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import CoursesData from "../CoursesData.json";
import { Link } from "react-router-dom";

import article1 from "../Images/articles-01.jpg";
import article2 from "../Images/articles-02.jpg";
import article3 from "../Images/articles-03.jpg";

export const Index = () => {
  const categories = ["All", ...Object.keys(CoursesData.Courses)];
  const [activeCategory, setActiveCategory] = useState("All");

  const getCourses = () => {
    if (activeCategory === "All") {
      return Object.keys(CoursesData.Courses).flatMap((cat) => {
        if (cat === "Marketing") return CoursesData.Courses[cat].slice(0, 2);
        return CoursesData.Courses[cat].slice(0, 1);
      });
    }
    return CoursesData.Courses[activeCategory] || [];
  };

  const courses = getCourses();

  return (
    <>
      {/* Hero */}
      <div className="hero flex justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] h-screen relative">
        <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
          <span className="text-[#076dcb] font-semibold chakrapetch-font">
            <i className="bi bi-book pe-2"></i>
            Your Future, Achieve Success
          </span>
          <h2 className="text-[#222e48] text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold sora-font py-2 w-full xl:w-[75%]">
            Find Your <span className="text-[#18a54a]">Ideal</span> Course,
            Build <span className="text-[#e58209]">Skills</span>
          </h2>
          <p className="text-[#576070] w-full lg:w-[60%] pb-4 text-sm sm:text-md">
            We are dedicated to nurturing young minds, empowering them with
            knowledge, skills, and confidence to excel.
          </p>
          <div className="flex gap-3 felx-wrap">
            <button
              className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Get Start Today
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>

            <button
              className="btn custom-btn text-[#076dcb] border border-[#076dcb] hover:bg-[#076dcb] hover:text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Find Courses
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shaped1 absolute left-30 top-30 object-contain hidden md:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 w-[25px] hidden lg:flex"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* About */}
      <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        <div className="about-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            About StudIQ
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-13 sora-font font-semibold">
            The Place Where You Can Achieve
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-shadow-md">
            Welcome to StudIQ, where learning knows no bounds. Whether you're a
            student, professional, or lifelong learner..
          </p>
          <ul className="flex flex-col gap-6 pb-10">
            <li className="flex gap-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center items-center p-4">
                <img
                  src={about1}
                  alt="about-image"
                  className="object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl sora-font">
                  Our Mission
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md">
                  Driven by a team of dedicated educators, technologists, and
                  visionaries, we strive to create a supportive
                </p>
              </div>
            </li>
            <li className="flex gap-3 sm:flex-nowrap flex-wrap">
              <div className="bg-[#f3f9ff] rounded-[50%] min-w-[70px] min-h-[60px] flex justify-center items-center p-4">
                <img
                  src={about2}
                  alt="about-image"
                  className="object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="text-[#222e48] font-semibold text-xl sora-font">
                  Our Vison
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md">
                  A professional seeking to upskill, or a lifelong learner
                  exploring new horizons, we're here to accompany you every step
                  of way
                </p>
              </div>
            </li>
          </ul>

          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
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
          <img
            src={aboutimage}
            alt="about-image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </div>
        <img
          src={element1}
          alt="shape-image"
          className="element1 about-shape1 absolute left-10 top-30 object-contain sm:block hidden"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 about-shape7 absolute right-10 bottom-10 object-contain lg:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape5 absolute right-30 top-70 w-[20px] h-[20px] sm:block hidden"
        />
      </div>

      {/* Feactures */}
      <div className="feature flex justify-center items-center flex-col gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[120px] relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold">
            Explore 5,000+ Free Online Courses For Students
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-md">
            Welcome to our diverse and dynamic course catalog. we're dedicated
            to providing you with access to high-quality education
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1399: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2.5,
            },
            767: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="feature-wrapper w-full"
        >
          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img
                  src={featureicon1}
                  alt="feature-icon"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Language Learning
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses teaching languages such as English, Spanish, French,
                  Mandarin etc
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img
                  src={featureicon2}
                  alt="feature-icon"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Creative Arts & Design
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses on graphic design, digital art, photography, video
                  editing...
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img
                  src={featureicon3}
                  alt="feature-icon"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold  group-hover:text-white">
                  Health & Fitness
                </h4>
                <p className="text-[#576070] text-sm  group-hover:text-white">
                  Courses on nutrition, fitness, training, yoga, meditacion,
                  wellness coaching
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-12 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img src={featureicon2} alt="feature-icon" />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold  group-hover:text-white">
                  Creative Arts & Design
                </h4>
                <p className="text-[#576070] text-sm  group-hover:text-white">
                  Courses on graphic design, digital art, photography, video
                  editing...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-70 top-20 hidden lg:flex"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Our Achievements */}
      <div className="our-achievements grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[120px] relative">
        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-people"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font">
              1.4K
            </h2>
            <span className="text-sm lg:text-md">Successfully Trained</span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-camera-video"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              2k
            </h2>
            <span className="text-[#222e48] text-sm lg:text-md">
              Courses Completed
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fdf6f3] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#f37739] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              2.5K
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Satisfaction Rate
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              5k
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Students Community
            </span>
          </div>
        </div>

        <img
          src={element5}
          alt="shape-image"
          className="element-5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element-5 hero-shape6 absolute bottom-50 left-10 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element-5 hero-shape7 absolute right-20 -top-16 hidden lg:flex"
        />
      </div>

      {/* Courses */}
      <div className="courses px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[150px] bg-[#f3f9ff] relative">
        <div className="courses-content z-2 pt-10 lg:pt-0 flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold lg:w-[50%]">
            Explore 4,000+ Free Online Courses For Students
          </h2>
          <div className="lg:w-[50%] w-full">
            <p className="text-[#576070] text-sm pb-2">
              Welcome to our diverse and dynamic course catalog. we're dedicated
              to providing you...
            </p>
            <Link to="/Courses">
              <button
                className="btn font-medium bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
                type="button"
              >
                See All Courses
                <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 my-8 bg-white p-5 rounded-xl shadow-xl">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-3 shadow-md rounded-full text-sm cursor-pointer font-medium transition ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-[#f3f9ff] text-[#404a60]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.title}
                className="course-item bg-white p-3 rounded-xl group hover:shadow-lg transition z-2 relative"
              >
                <div className="course-image h-[230px] rounded-xl overflow-hidden relative bg-gray-200">
                  <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
                  <img
                    src={course.CourseImage}
                    alt={course.title}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 group-hover:scale-110 transition-all duration-500 h-full w-full object-cover"
                    onLoad={(e) => {
                      e.target.previousSibling.style.display = "none";
                    }}
                  />
                </div>

                <div className="course-content p-3">
                  <h4 className="my-3 sora-font font-bold text-md sm:text-xl text-[#222e48] hover:text-[#006dca] transition-colors duration-500">
                    {course.title}
                  </h4>
                  <div className="flex justify-between items-center gap-2 mb-2">
                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-camera-video pe-2 text-lg"></i>
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-bar-chart pe-2 text-lg"></i>
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center gap-2 mb-4">
                    <div className="text-[#222e48] font-medium">
                      <i className="bi bi-star-fill text-yellow-400 pe-2"></i>
                      <span>
                        {course.rating}
                        {""}
                        <span className="text-[#798090] text-sm">
                          ({course.reviews})
                        </span>
                      </span>
                    </div>
                    <div className="text-[#222e48] font-medium flex items-center">
                      <img
                        src={course.InstructorImage}
                        alt={course.Instructor}
                        loading="lazy"
                        decoding="async"
                        className="rounded-[50%] h-[45px] w-[45px] object-cover pe-1"
                      />
                      <span>{course.instructor}</span>
                    </div>
                  </div>
                  <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center justify-between gap-8">
                    <h4 className="text-[#f37739] text-2xl font-semibold">
                      ${course.price}
                    </h4>
                    <button
                      className="btn font-medium text-[#076dcb] hover:text-black rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
                      type="button"
                    >
                      {course.enrollLink}
                      <i className="bi bi-arrow-up-right ps-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No course available
            </p>
          )}
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shaped absolute left-30 top-30 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
          loading="lazy"
          decoding="async"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element3 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 hidden lg:flex"
        />
      </div>

      {/* Why Choose */}
      <div className="why-choose-us flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        <div className="why-choose-us-image group w-full lg:w-1/2 h-[500px] overflow-hidden rounded-lg">
          <img
            src={chooseus}
            alt="why-choose-us-image"
            className="w-full h-full group-hover:scale-110 object-cover transition-all duration-500"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="why-choose-us-content flex flex-col lg:w-1/2 w-full">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            Why Choose Us
          </span>
          <h2 className="text-[#222e48] text-3xl md:leading-10 sora-font font-semibold">
            Our Commitment to Excellence, Learn, Grow & Success.
          </h2>
          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-md">
            We are passionate about transforming lives through education.
            Founded with a vision to make learning accessible to all, we believe
            in the power of knowledge to..
          </p>
          <ul className="flex flex-col gap-2 pb-5">
            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-x1"></i>
              9/10 Average Satisfaction Rate
            </li>
            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-x1"></i>
              96% Complettiation Rate
            </li>
            <li className="text-sm text-[#576070]">
              <i className="bi bi-check-all text-[#006dca] pe-2 text-x1"></i>
              Friendly Enviroment & Expert Teacher
            </li>
          </ul>
          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <button
              className="btn custom-btn bg-[#076dcb] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300"
              type="submit"
            >
              Read More
              <i className="bi bi-arrow-up-right ps-2"></i>
            </button>
          </div>
        </div>
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 hidden lg:flex"
        />
      </div>

      {/* Articles */}
      <div className="articles bg-[#f3f9ff] px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative gap-10 flex flex-col">
        <div className="articles-content flex flex-col lg:w-1/2 w-full mx-auto text-center z-2">
          <span className="text-[#076dcb] font-semibold sora-font pb-1">
            <i className="bi bi-book pe-2"></i>
            Articles
          </span>
          <h2 className="text-[#222e48] text-3xl md:text-3xl md:leading-10 sora-font font-semibold">
            Recent Articles
          </h2>
          <p className="text-[#576070] pt-3 pb-5 text-sm sm:text-md">
            Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut
            labore et dolore magna aliqua enim ad..
          </p>
        </div>

        <div className="articles-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 z-2">
          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img
                src={article1}
                alt="articles-image"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#f37638] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">
                Student life
              </span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222648] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Pradip</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>10 October, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>15</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>
              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to="/blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img
                src={article2}
                alt="articles-image"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#16a34a] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">
                Freedom
              </span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222648] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Megha</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>12 October, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>15</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>
              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to="/blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="articles-item bg-white p-5 pb-3 rounded-xl group shadow-lg">
            <div className="articles-image w-full rounded-xl overflow-hidden">
              <img
                src={article1}
                alt="articles-image"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="articles-content py-5">
              <span className="bg-[#f37638] text-white rounded-sm px-2 chakrapetch-font font-semibold py-1">
                Oneline
              </span>
              <h4 className="my-3 sora-font font-semibold text-md sm:text-xl text-[#222648] hover:text-[#006dca] transition-colors duration-500">
                The Importance of Diversity in Higher Education
              </h4>

              <div className="flex flex-wrap gap-3">
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faUserCircle} className="pe-1" />
                  <span>Mihir</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faCalendar} className="pe-1" />
                  <span>18 October, 25</span>
                </div>
                <div className="text-[#404a60] text-md font-medium">
                  <FontAwesomeIcon icon={faMessage} className="pe-1" />
                  <span>26</span>
                </div>
              </div>
              <p className="text-sm py-2 text-[#404a60] pb-5">
                Unlock the secrets to effective time management in the digital
                learning space...
              </p>
              <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5">
                <Link to="/blog">
                  <button
                    className="btn custom-btn text-[#076dcb] font-medium rounded-full w-fit text-sm cursor-pointer"
                    type="button"
                  >
                    Read More
                    <i className="bi bi-arrow-up-right ps-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden md:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden md:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-1 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-0 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape6 absolute right-50 top-20 hidden lg:flex z-2"
        />
      </div>
    </>
  );
};
