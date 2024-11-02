import React from 'react'

export default function Card({name, desc, price, devise,button,icon,rate,img, color}) {
  return (
    <div>
      <div className="bg-white rounded-md p-4">
        <div className="">
            <div style={{ backgroundColor: color }} className='flex h-[300px] flex-col justify-center items-center relative'>
                <div className="absolute left-3 bg-white p-2 rounded-full top-4 ">
                {icon}
                </div>
                <img src={img} alt="" className='p-4' />
            </div>
            <div className="">
                <div className="">
                    <h1>{name}</h1>
                    <p>{rate} 4.9/5</p>
                </div>
                <p>{desc}</p>
                <div className="">
                    <p>{devise}{price}</p>
                    <button>{button}</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
