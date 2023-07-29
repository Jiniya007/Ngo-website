import React from "react";
import pi from "../img/one.jpg";
import p2 from "../img/two.jpg";
import p3 from "../img/thrd.jpg";
import p4 from "../img/r.jpg";

 import Feedback from './Feedback'

function Volunteer() {
  return (
    <>
      <section className="Voulanter-section py-[30px]" id="volunteer">
        <div className="max-w-[1240px] mx-auto ">
          <div className="text-center text-2xl font-bold">
            <h2>Our Volenteress</h2>
            <p>Help to needed !</p>
           
            <div className="md:flex justify-between items-center">
              <div className="w-[300px] flex flex-col justify-center items-center -[20px] my-0 mx-[5px]">
                <img
                  src={pi}
                  alt=""
                  className="rounded-full text-center"
                  width={100}
                />
                <h1 className="text-center text-2xl">Urvsahi</h1>
                <p className="text-center text-[15px] text-[#6a6a6a]">
               WORK With  R.K International Foundaton            
                </p>
              </div>

              <div className="w-[300px] flex flex-col justify-center items-center -[20px] my-0 mx-[5px]">
                <img
                  src={p2}
                  alt=""
                  className="rounded-full text-center"
                  width={100}
                />
                <h1 className="text-center text-2xl">Anurag</h1>
                <p className="text-center text-[15px] text-[#6a6a6a]">
                WORK With  R.K International Foundaton   
                </p>
              </div>
              <div className="w-[300px] flex flex-col justify-center items-center -[20px] my-0 mx-[5px]">
                <img
                  src={p3}
                  alt=""
                  className="rounded-full text-center"
                  width={100}
                />
                <h1 className="text-center text-2xl">Deepali</h1>
                <p className="text-center text-[15px] text-[#6a6a6a]">
                WORK With  R.K International Foundaton   
                </p>
              </div>
              <div className="w-[300px] flex flex-col justify-center items-center -[20px] my-0 mx-[5px]">
                <img
                  src={p4}
                  alt=""
                  className="rounded-full text-center"
                  width={100}
                />
                <h1 className="text-center text-2xl">Yashi</h1>
                <p className="text-center text-[15px] text-[#6a6a6a]">
                WORK With  R.K International Foundaton   
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* invoved */}
      <div className=" py-2">
        <div className="max-w-[1240px] page mx-auto flex items-center flex-col" >
          <div className="heading">
            <h1 className="text-3xl text-bold ">Get Involved:</h1>
          </div>
          <p className="para">
            We believe that everyone has a role to play in empowering men and
            creating a more equitable society.
          </p>
          <p className="para"> 
          There are several ways you can get involved:</p>
        </div>
      </div>
      <Feedback/>
    </>
  );
}

export default Volunteer;
