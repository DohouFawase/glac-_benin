import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Testimonial() {
  return (
    <div className='bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38%  to-[#EAF8F9] to-[91%]'>
      <div className="px-24">
        <div className="">
        <div className="text-center py-12 bee ">
                <h1 className=' text-[1.5rem] md:text-[3rem] font-bold'> Hear from Our <span className='text-[#f83d8e] '>Happy <br /> ice Creame</span> Lovers</h1>
               <div className="flex justify-center items-center mt-24">
                      <div className="space-y-4 text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut eum accusantium molestiae cupiditate voluptatem doloribus porro adipisci delectus ex laborum quo autem laudantium, necessitatibus rerum deleniti obcaecati culpa dolor optio rem. Sapiente suscipit pariatur asperiores unde minima a reprehenderit autem facere, inventore exercitationem.</p>
                        <div className="space-y-1">
                            <p className='text-[#f83d8e] font-bold text-xl'>DOHOU Fawase</p>
                            <p>Happy Custumer</p>
                            <div className="text-center flex justify-center items-center gap-x-1">
                            <FaStar size={15} color='#fcaa2a' /> 
                            <FaStar size={15} color='#fcaa2a' /> 
                            <FaStar size={15} color='#fcaa2a' /> 
                            <FaStar size={15} color='#fcaa2a' /> 
                            </div>
                        </div>
                      </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}
