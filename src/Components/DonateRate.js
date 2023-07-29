import React from 'react'
import {BsEmojiSmile} from 'react-icons/bs'
import {BiDonateHeart} from 'react-icons/bi'
import {ImPower} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'

function DonateRate() {
  return (
    <>
      <div className=" bg-[#EBF5FB] py-[50px] mt-3 mb-3">
       <div className="max-w-[1240px] mx-auto ">
       <div className="row md:flex items-center justify-around text-center">
        <div className="col-2 mx-2 my-2 ">
            <BsEmojiSmile className='text-5xl text-[#1DA1F2] '/>
            <h2 className="text-2xl font-bold">50 K</h2>
            <p className="text-2xl text-[#1DA1F2]">DONORS</p>
        </div>
        <div className="col-2 mx-2 my-2">
            <BiDonateHeart className='text-5xl  text-[#1DA1F2]'/>
            <h2 className="text-2xl font-bold">800 K</h2>
            <p className="text-2xl text-[#1DA1F2]">DONATED</p>
        </div>
        <div className="col-2 mx-2 my-2">
            <ImPower className='text-5xl  text-[#1DA1F2]'/>
            <h2 className="text-2xl font-bold">150 K</h2>
            <p className="text-2xl text-[#1DA1F2]">Jobs</p>
        </div>
        <div className="col-2 mx-2 my-2">
            <FaHandsHelping className='text-5xl  text-[#1DA1F2]'/>
            <h2 className="text-2xl font-bold">250 K</h2>
            <p className="text-2xl text-[#1DA1F2]">VOLUNTEERS</p>
        </div>

       </div>
    
       </div>

      </div>
      
      
    </>
  )
}

export default DonateRate
