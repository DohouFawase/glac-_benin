import React from 'react'
import RelieImage from "../../assets/head/relive-image.png"
import { NavLink } from 'react-router-dom'
import { HiMiniArrowSmallRight } from 'react-icons/hi2'

export default function Relieve() {
  return (
    <div>
      <div className="  ">
        <div className=" pl-6 ben md:px-24 mx-auto   ">
            <div className="grid md:grid-cols-2  gap-x-8 justify-between items-center">
                <div className="relative ">
                    <div className="bg-gray-400 h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] rounded-full"></div>
                <img src={RelieImage} alt="" className='absolute -top-14 -left-[7%] max-w-[23rem] md:max-w-[25rem] lg:max-w-[430px]' />
                
                </div>
                <div className="space-y-3 pt-16">  
                  <h1 className='lg:text-[3.5rem] text-[2.5rem]   font-bold break-words'>Relive the Sweet Memories of Classic <span className='text-[#f83d8e]'>Ice Cream</span></h1>
                  <p className='py-2'>From rich Chocolate fudge to creamy vanilla sundeas, discover our menu ice cream creation</p>
                  <NavLink className={"flex  items-center gap-x-2 bg-[#f83d8e] w-64 text-center text-white justify-center p-3 rounded-full shadow-sm "}>Explore our menu <HiMiniArrowSmallRight /></NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
