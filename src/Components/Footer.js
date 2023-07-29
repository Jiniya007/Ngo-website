import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <div className="bg-[#015245] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="row flex justify-around">
                <div className="flex text-center">
                <h1 className='text-6xl text-[#1da1f2]'>R.K</h1>

                 <span className='text-4xl text-[#1da1f2] font-extrabold'>
                    FOUNDATION</span>
                <ul className='flex justify-center items-center m-2'>
                    <li className="text-2xl text-[#1da1f2]">
                    <Link to="#/"><FaInstagramSquare/></Link>
                    </li>
                    <li className="text-2xl text-[#1da1f2]">
                    <Link to="/"><BsFacebook/></Link>
                    </li>
                    <li className="text-2xl text-[#1da1f2]">
                    <Link to="/"><GrTwitter/></Link>
                    </li>
                </ul>
                </div>
                <div className="text-white ">
                    <h1 className='text-3xl'>Our Pagges</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/volunteer">Our Volunteer</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <a href="donate">Donate Now</a>
                        </li>
                    </ul>
                </div>
                <div className="text-white ">
                    <h1 className='text-3xl'>Contact Now</h1>
                    <ul>
                        <li>
                         <span>Sultanpur Luckonw (U.P.) 228001, India</span>
                        </li>
                        <li>
                          <span>+91 0000 00000</span>
                        </li>
                        <li>
                            <span>example@info.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    </div>
 
    </>
  )
}

export default Footer
