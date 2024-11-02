import React from 'react'

export default function Statistique() {
  return (
    <div>
      <div className="">
        <div className="px-24 py-24">
        <div className="">
          <div className="text-center py-12 bee">
            <h1 className='lg:text-[3.3rem] font-bold'>
               Our <span className='text-[#f83d8e]'>Statistique</span>
            </h1>

            <p>
             What makes us special throught our impressive statistics{" "}
            </p>
          </div>
        </div>
        <div className="">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center flex flex-col items-center p-6 items justify-center rounded-lg shadow-md  h-[160px] border">
                    <p className='text-3xl font-bold pb-4 bra'>91 <span>+</span></p>
                    <p className='font-normal'>Awward Winnig</p>
                </div>
                <div className="text-center flex flex-col items-center p-6 items justify-center rounded-lg shadow-md  h-[160px] border">
                <p className='text-3xl font-bold pb-4 bra'>95 <span>%</span></p>
                <p className='font-normal'>Satifsfed clients</p>
                </div>
                <div className="text-center flex flex-col items-center p-6 items justify-center rounded-lg shadow-md  h-[160px] border">
                <p className='text-3xl font-bold pb-4 bra'>45 <span>+</span></p>
                <p className='font-normal'>Years of Experiences</p>
                </div>
                <div className="text-center flex flex-col items-center p-6 items justify-center rounded-lg shadow-md  h-[160px] border">
                <p className='text-3xl font-bold pb-4 bra'>143 <span>+</span></p>
                <p className='font-normal'>Employes workink</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
