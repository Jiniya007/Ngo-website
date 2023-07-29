import React from "react";
import img from "../img/Jobs.webp";
import imgtwo from "../img/Future.jpg";
import { Link } from "react-router-dom";

function OurCard() {
  return (
    <>
      <div className="Card-section py-[50px]">
        <h1 className="text-center text-3xl pb-[15px] mb-4 font-extrabold">
          R.K.I.F
        </h1>
        <div
          className="max-w-[1240px] mx-auto md:flex 
         justify-between items-center"
        >
          <div className="col-2  md:w-[50%] text-center  ">
            <img src={img} alt="" className="rounded inline " />
          </div>
          <div className="col-2  mx-3">
            <h1 className="text-3xl text-center  font-extrabold">
              Our Mission
            </h1>
            <p className=" text-center  w-[700px]  text-[16px] ">
              Our mission is to empower men through a multifaceted approach that
              encompasses education, skill development, job placement, and
              ongoing support. We work collaboratively with individuals,
              organizations, and the wider community to create a conducive
              environment for men's growth and prosperity. By addressing the
              unique challenges faced by men in the workforce, we aim to
              facilitate their personal and professional development
            </p>
            <div className="flex items-center justify-between mt-3 mx-3">
              <button
                className="border border-black rounded-full py-3 px-3
              text-2xl  hover:bg-blue-200"
              >
                <Link to="https://forms.gle/kh62cT5dZhzi3nXCA" target="_blank">
                  Read More...{" "}
                </Link>
              </button>
              <button
                className="border border-black rounded-full py-3 px-3
              text-2xl mx-3 hover:bg-blue-800"
              >
                <Link to="/donatenow"> Donate Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card2 */}

      <div className="Card-section py-[50px]">
        <div className="max-w-[1240px] mx-auto  md:flex  justify-center items-center">
          <div className="col-2  mx-3">
            <h1 className="text-3xl text-center font-extrabold">Our Vision</h1>
            <p className="text-center text-[16px] w-[700px]">
              At R.K International Foundtion, our vision is to build a society
              where every man has access to meaningful employment, enabling them
              to lead fulfilling lives, provide for their families, and become
              active contributors to their communities. We strive to break down
              barriers and challenge stereotypes that hinder men's progress,
              promoting inclusivity and equal opportunities for all.
            </p>
            <div className="flex items-center justify-between mt-3 mx-3">
              <button
                className="border border-black rounded-full py-3 px-3
              text-2xl  hover:bg-blue-200"
              >
                <Link to="https://forms.gle/kh62cT5dZhzi3nXCA" target="_blank">
                  Read More...
                </Link>
              </button>
              <button
                className="border border-black rounded-full py-3 px-3
              text-2xl mx-3 hover:bg-blue-800"
              >
                <Link to="/donatenow">  Donate Now</Link>
               
              </button>
            </div>
          </div>
          <div className="col-2 md:w-[50%] text-center">
            <img src={imgtwo} alt="" className="rounded inline" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCard;
