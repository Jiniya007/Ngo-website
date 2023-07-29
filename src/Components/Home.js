import React from "react";
import { Link } from "react-router-dom";
import DonateRate from "./DonateRate";

function Home() {
  return (
    <>
      <section className="home-section w-full h-screen" id="home">
        <div className="max-w-[1240px]  py-[100px]">
          <div className="text-white px-[10px] md:w-[700px] md:flex flex-col">
            <p className="px-4 text-bold text-center md:text-3xl ">
              we can support
            </p>
            <h1
              className=" text-center md:text-5xl px-4 py-2
                 text-bold"
            >
              Empowering Men: Transforming Lives through Employment
            </h1>
            ,
            <h2 className=" text-center md:text-5xl px-4 py-1  text-bold">
              from Childhood to Livelihood.
            </h2>
            <p className=" text-center md:text-3xl text-dark px-4 text-bold">
              Your Small Constribution Means Lot.
            </p>
            <div className="py-4  px-[20px] md:flex items-center justify-center">
              <button
                className="bg-black text-white py-1 px-2 mt-2
        rounded inline w-[30%] text-2xl text-center hover:bg-[#000066]"
              >
                <Link to="/donatenow"> Donate Now</Link>
                <span>
                  {/* <BiDonateHeart /> */}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DonateRate />
    </>
  );
}

export default Home;
