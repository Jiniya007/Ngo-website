import React from 'react'
function DonateNow() {

  return (
    <>
    <section className=" py-[50px]" id="donatenow">
        <div className="max-w-[1240px] mx-auto">
            <div className="text-center">
            <h2 className='text-[#2c3e50] text-4xl'>Donate To Our Ngo</h2>
            <p className='text-2xl'>Help to needed !</p>
            </div>
            <div className="w-[700px] mx-auto py-4  Donate">
            <form action="" className="">
            <div className="px-3 mx-3">
                  <label htmlFor="" className="text-2xl text-[#2c3e50]">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border  w-[100%]  py-2 px-2 rounded text-slate-500"
                    placeholder="Enter Yor Name..."
                    required
                  />
                </div>
           
                <div className="px-3 mx-3">
                  <label htmlFor="" className="text-2xl text-[#2c3e50]">
                    Email Id:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border w-[100%]  py-2 px-2 rounded text-slate-500"
                    placeholder="Enter Yor Email..."
                    required
                  />
                </div>
                <div className="px-3 mx-3">
                  <label htmlFor="" className="text-2xl text-[#2c3e50]">
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="border  w-[100%]  py-2 px-2 rounded text-slate-500"
                    placeholder="Enter Yor Number..."
                    required
                  />
                </div>
                <div className="px-3 mx-3">
                  <label htmlFor="" className="text-2xl text-[#2c3e50]">
                  Donation Amount:
                  </label>
                  <input
                    type="number"
                    name="number"
                    className="border  w-[100%]  py-2 px-2 rounded text-slate-500"
                    placeholder="Enter Yor Amount..."
                    required
                  />
                </div>
                <div className="px-3 mx-3 py-3">
                    <button
                     type="button"  
                        className="border border-black rounded text-2xl 
                     bg-[#1da1f2] text-white w-[150px]"
                      
                     >
                      
                     Donate Now
                        </button>
                </div>

            </form>
            </div>
        </div>

    </section>
    </>
  )
}

export default DonateNow
