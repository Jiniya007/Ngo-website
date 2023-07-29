import React from 'react'
import pic from '../img/skils.jpg'
import emp from '../img/emp.jpeg'
import sport from '../img/sport.jpeg'
import pers from '../img/pers.jpeg'
 import { Link } from 'react-router-dom'
function Joincard() {
  return (
    <>
      <div className="py-[30px]">
      <h1 className="text-center text-3xl pb-[15px] mb-4 font-extrabold">
          What We Do ?
        </h1>
        <div className="max-w-[1240px] mx-auto py-2 md:flex ">
        <div className="card">
      <img src={pic} alt="Card" />
      <div className="card-content">
        <h2>Skill Development Programs:
</h2>
        <p>We offer comprehensive skills training programs designed to enhance men's employability and equip them with the necessary tools to succeed in their chosen fields. Our courses cover a wide range of industries, including technology, construction, hospitality, manufacturing, and more. We provide both theoretical knowledge and hands-on practical training to ensure our participants are job-ready</p>
      </div>
    </div>
    <div className="card">
      <img src={emp} alt="Card" />
      <div className="card-content">
        <h2>Employment Placement Services:
</h2>
        <p>We bridge the gap between job seekers and employers by connecting trained men with suitable employment opportunities. Our dedicated team works closely with partner companies, organizations, and recruitment agencies to identify openings and match qualified candidates. We strive to secure sustainable employment that aligns with the skills and aspirations of the men we support.
</p>
      </div>
    </div>
    <div className="card">
      <img src={sport} alt="Card" />
      <div className="card-content">
        <h2>Entrepreneurship Support:
</h2>
        <p>We recognize the importance of entrepreneurial endeavors in creating economic opportunities. Through our entrepreneurship support programs, we provide aspiring male entrepreneurs with the guidance, mentorship, and resources they need to establish and grow their businesses. We encourage innovation, creativity, and sustainable practices, empowering men to become successful business owners and drivers of economic growth.</p>
      </div>
    </div>
    <div className="card">
      <img src={pers} alt="Card" />
      <div className="card-content">
        <h2>Personal Development Workshops:
</h2>
        <p> Building resilience, self-confidence, and emotional well-being are crucial for success in the workplace and personal life. We conduct regular workshops and training sessions on topics such as communication skills, leadership development, financial literacy, and stress management. By nurturing holistic growth, we empower men to overcome challenges, make informed decisions, and build fulfilling lives.</p>
      </div>
    </div>
        </div>
        <div className="flex items-center justify-center btn">
         <button className="border border-black rounded py-2 px-2
              text-2xl mx-1 bg-[#000066] text-white">
                <Link to="/donatenow"> Donate Now</Link>
              
                </button>
                <button className="border border-black rounded py-2 px-2
              text-2xl mx-1 bg-[#1da1f2] text-white">
                <Link to="https://forms.gle/kh62cT5dZhzi3nXCA"target='_blank'>
                  Add Membership</Link>
            
                </button>
         </div>

      </div>
    </>
  )
}

export default Joincard
