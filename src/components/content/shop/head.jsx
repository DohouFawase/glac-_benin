import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Head() {
  return (
    <div>
      <div className="h-[50vh] flex justify-center items-center bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38% 
         to-[#EAF8F9] to-[91%] ">
        <div className="flex flex-col items-center justify-center my-12 bee">
            <h1 className='text-[4rem]'>Product</h1>
            <div className="">
                <div className="bg-white p-3 px-6 flex gap-2 rounded-full w-44 justify-center">
                <NavLink to={"/"} className={"text-[#fa549c]"}> Home</NavLink>/
                <NavLink  to={"#"} className={"hover:text-[#fa549c]"}>Product</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
