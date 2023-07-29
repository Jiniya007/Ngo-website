import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

function Header() {
  const [toggle, setToggle] = useState();
  return (
    <>
      <div className=" py-2 w-full navbar">
        <div
          className="max-w-[1240px] py-[10px] mx-auto flex justify-between
          items-center"
        >
          <div className="text-3xl flex  font-bold">
            <img src={logo} alt="" width={50} />
          </div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-[#000066] text-3xl 
                md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-[#000066] text-3xl
                md:hidden block"
            />
          )}
          <ul
            className=" hidden md:flex text-2xl text-white gap-5 
            ">
            <li className="hover:text-black hover:font-bold">
              <Link to="/"
             >
                Home
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link to="about"
           >
                About
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
              to="volunteer"
             >
                Our Volunteer
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="contact"
                >
                Contact Us
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="donatenow"
                >
                Donate Now
              </Link>
            </li> 
          </ul>

          {/* responsive navbar    */}
           <ul
            className={` duration-300 first-letter:md:hidden  text-2xl text-white
             fixed bg-black
             py-3 px-3 w-full h-screen top-[77px]  
                 ${toggle ? "left-[-0]" : "left-[-100%]"} `}
          >
            <li className="hover:text-black hover:font-bold">
              <Link
                to="home">
                Home
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="about">
                About
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="volunteer">
                Our Volunteer
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="contact">
               Contact Us
              </Link>
            </li>
            <li className="hover:text-black  hover:font-bold">
              <Link
                to="donatenow">  Donate Now
              </Link>
            </li>
          </ul> 
        </div>
      </div>
    </>
  );
}

export default Header;
