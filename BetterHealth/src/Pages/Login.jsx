import React, { useEffect } from "react";
import doctorImage2 from "../assets/images/Animation-2.gif";
import sideRightImage1 from "../assets/images/doc.jpg";
import sideRightImage2 from "../assets/images/doc-2.avif";
import { NavLink } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaUsersLine } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    TransitionEvent: "ease-in-out",
  };

  return (
    <div className="min-h-screen w-[100vw] flex overflow-hidden bg-[whitesmoke]">
      {/* Left Information */}
      <div className="w-full lg:w-[60%] bg-[#fefbfb] p-4 md:py-1 md:px-24">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-center ml-6">
            <div className="w-36 h-36 rounded-full bg-[#483d8b]">
              <img
                src={doctorImage2}
                data-aos="fade-up"
                alt="Doctor Illustration"
                className="rounded-[360px] w-32 h-32 mx-auto mt-4"
              />
            </div>

            <h1 className="font-[inter]  text-2xl font-semibold pt-2">
              Better Health
            </h1>
          </div>
          <div className="max-w-xl mt-10 md:mt-4 w-full mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl leading-10 font-[inter] font-semibold">
                Hello Again!
              </h2>
              <p className="text-gray-600 font-[inter] text-lg mt-2">
                Welcome back! Please Login according to 👇.
              </p>
            </div>
            <div className="w-full  h-auto space-y-4">
              <div className="flex items-center">
                <div className="w-24 h-auto bg-[#483d8b]">
                  <MdAdminPanelSettings className="w-20 h-20 p-4 text-white mx-auto" />
                </div>
                <NavLink
                  to={"/adminstaff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-16 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl transition-all duration-300 border-[#483d8b]"
                >
                  Admin staff
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-24 h-auto bg-[#483d8b]">
                  <FaUserDoctor className="w-20 h-20 p-4 text-white mx-auto" />
                </div>
                <NavLink
                  to={"/doctor"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-16 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl transition-all duration-300 border-[#483d8b]"
                >
                  Doctor
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-24 h-auto bg-[#483d8b]">
                  <LiaUserNurseSolid className="w-20 h-20 p-4 text-white mx-auto" />
                </div>
                <NavLink
                  to={"/nurse"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-16 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl transition-all duration-300 border-[#483d8b]"
                >
                  Nurse
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-24 h-auto bg-[#483d8b]">
                  <FaUsersLine className="w-20 h-20 p-4 text-white mx-auto" />
                </div>
                <NavLink
                  to={"/staff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-16 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl transition-all duration-300 border-[#483d8b]"
                >
                  Other Staff
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Information */}
      <div className="hidden lg:block h-screen w-[40%]">
        <Slider {...sliderSettings}>
          <div>
            <img
              src={sideRightImage1}
              alt="hospital1"
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img
              src={sideRightImage2}
              alt="hospital2"
              className="w-full h-screen object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Login;
