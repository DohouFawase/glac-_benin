import React from 'react'
import ClasicCard from '../container/clasicCard'
import left from "../../assets/classic/leftimage.png"
import right from "../../assets/classic/rightimage.png"
export default function Classic() {
  return (
    <div className='mt-12  overflow-hidden' >
      <div className="overflow-hidden bg-gradient-to-r from-[#EFD7EF]  via-[#F5F9FC] via-38%  to-[#EAF8F9] to-[91%] relative">
        <img src={left} alt="" className='absolute z-10 w-[120px] top-14' />
        <div className="px-24  py-14">
            <div className="text-center py-12 bee overflow-hidden">
                <h1 className='text-[3rem] font-bold '>Our <span className='text-[#f83d8e]'>Classic</span> Favorites</h1>
                <p className='text-[#646464] font-bold'>
                check out top product our Custums Love
                </p>
            </div>
            <div className="overflow-hidden">
            <ClasicCard /> 
            </div>
        </div>
        <img src={right} alt="" className='absolute right-0 z-10 w-[100px] bottom-0' />

      </div>
    </div>
  )
}
