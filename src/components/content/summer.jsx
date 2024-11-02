import React from 'react'
import Dsicount  from "../../assets/summer/special-image.png"
import Arrow from "../../assets/summer/special-dotedarrow.png"
import { NavLink } from 'react-router-dom'

export default function Summer() {
  return (
    <div>
      <div className="elements ">
        <div className="px-24 pt-12">
        <div className=" grid gap-12 md:grid-cols-2 text-white ">
            <div className="z-10 bee">
              <h1 className='lg:text-[6rem]'> Summer Special !</h1>
              <p className='mb-6 text-3xl'>Bye One sundaye and Get 50% Off!!</p>
              <NavLink className={"bg-[#f83d8e] p-3 px-4 mt-4 rounded-full "}>
                Get this day
              </NavLink>
            </div>
            <div className="relative z-10">
                <div className="bg-white text-center text-black flex justify-center items-center rounded-full h-20 w-20 absolute -left-20 top-20 -z-10">
fff
                </div>
                <img src={Arrow} alt="" className='absolute -left-12 -z-10' />
                <img src={Dsicount} alt="" />
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
