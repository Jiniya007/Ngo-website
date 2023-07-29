import React from "react";
import p1 from "../assets/p1.jpg";


function Feedback() {
  const data = [
    {
      name: "Black John",
      ImgUrl: "../src/assets/p1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium iaculis metus, sed ultricies nunc semper vel. Nam auctor malesuada venenatis. Fusce a viverra velit. Mauris massa odio, efficitur in nisi vel, vulputate suscipit velit. Cras magna neque, tempor quis viverra a, viverra at elit.",
    },
    {
      name: "Black John",
      ImgUrl: "http://ansrcoach.infinityfreeapp.com/assets/p2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium iaculis metus, sed ultricies nunc semper vel. Nam auctor malesuada venenatis. Fusce a viverra velit. Mauris massa odio, efficitur in nisi vel, vulputate suscipit velit. Cras magna neque, tempor quis viverra a, viverra at elit.",
    },
    {
      name: "Black John",
      ImgUrl: "http://ansrcoach.infinityfreeapp.com/assets/p3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium iaculis metus, sed ultricies nunc semper vel. Nam auctor malesuada venenatis. Fusce a viverra velit. Mauris massa odio, efficitur in nisi vel, vulputate suscipit velit. Cras magna neque, tempor quis viverra a, viverra at elit.",
    },
    {
      name: "Rohan",
      ImgUrl: "http://ansrcoach.infinityfreeapp.com/assets/p4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium iaculis metus, sed ultricies nunc semper vel. Nam auctor malesuada venenatis. Fusce a viverra velit. Mauris massa odio, efficitur in nisi vel, vulputate suscipit velit. Cras magna neque, tempor quis viverra a, viverra at elit.",
    },
  ];
  return (
    <>
      <section className="py-[40px] feedback mt-3 mb-3" >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center text-3xl mb-3">
            <h2>Donares Feedback</h2>
            <p>What Donares Says ?</p>
          </div>
          <div className="md:flex justify-between items-center">
            {data.map((info) => {
              return (
                <div className="w-[300px] flex flex-col justify-center items-center -[20px] my-0 mx-[5px]">
                  <img src={p1} alt="" className="rounded-full text-center" width={100} />
                  <h1 className="text-center text-2xl">{info.name}</h1>
                  <p className="text-center text-1xl text-[#6a6a6a]">
                  {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Feedback;
