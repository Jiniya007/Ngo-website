import React, { useState } from "react";


function Contact() {
  const [name ,setName] = useState('')
  const [userErr ,setUserErr]= useState(false);
  const [subj,setSubj]= useState('')
  const [subjErr ,setSubjErr]= useState(false);



  const hendleOnChange = (e)=>{
    let Name = e.target.value;
    if(Name.length<3){
      setUserErr(true)
   
      console.log('Invalid id')

    }else{
      console.log('valid id')
      setUserErr(false)
    }
    setName(Name)   
  }
  const hendletoChange =(e)=>{
     let sub = e.target.value;
     if(sub.length < 3){
        setSubjErr(true)
      console.log('invalid subj')

     }else{
       setSubjErr(false)
      console.log('valid subj')
     }

    setSubj(sub)

  }
  return (
    <>
      <section className="contact-section py-[50px]" id="contact">
        <div className="max-w-[1240px] mx-auto ">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p>Any Query Contact Now !</p>
          </div>
          <div className="row">
            <div className="col-6 ">
              <form action="" className="form flex  flex-col mx-auto">
                <div className="">
                  <label htmlFor="" className="text-2xl">
                     First Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border border-black w-[100%]  py-2 px-2 rounded text-slate-500"
                    placeholder="Enter Your First Name..."
                    required
                    value={name}
                    onChange={hendleOnChange}
                  />
                  {userErr ? <span>Please Enter Valid Name</span>  : ""}
                </div>
                <div className="">
                  <label htmlFor="" className="text-2xl">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border border-black w-[100%]  py-2 px-2 rounded  text-slate-500"
                    placeholder="Enter Yor Last Name..."
                    required
                    value={subj}
                    onChange={hendletoChange}
                  />
                  {subjErr ? <span>Please Enter Valid Name</span>: ""}
                </div>
                <div className="">
                  <label htmlFor="" className="text-2xl">Message</label>
                  <textarea
                    placeholder="Enter Your Message Here..."
                    className="border border-black w-[100%]  py-2 px-2 rounded  text-slate-500"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="border border-black rounded text-2xl 
                 bg-[#1da1f2] text-white w-[13%]"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
