import React from 'react'

export default function Newsleter() {
  return (
    <div>
     <div className="px-24">
        <div className="mt-24">
            <div className="text-center bee">
            <h1 className='text-[3rem] font-bold '> Sign up for <span className='text-[#f83d8e] '>Exclusive Deals </span> <br />  and Upadate </h1>
            <p>Get 10% for your Next order and stay updated with our lasted offerts</p>
             <div className="">
              <div className="flex justify-center items-center py-24 -4">
                <form action="">
                    <div className="flex items-center gap-5">
                    <input type="email" placeholder='Enter your mail' name="" id=""  className='border px-4 border-gray-400 rounded-full p-2 ' />
                  
                  <button className='bg-[#f83d8e] p-3 text-white rounded-full  px-4'>Suscribe</button>
                    </div>
                   
                </form>
              </div>
             </div>
            </div>
        </div>
     </div>
    </div>
  )
}
