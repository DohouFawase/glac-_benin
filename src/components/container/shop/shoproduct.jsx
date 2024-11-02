import React from 'react'
import Card from '../card'
import Image1 from "../../assets/classic/classic-image2.png"
import Image2 from "../../assets/classic/classic-image3.png"
import Image3 from "../../assets/classic/classic-image4.png"
import Image4 from "../../assets/classic/classic-image1.png"
import { BiHeart } from 'react-icons/bi'

const classic = [
    {
        id:1,
        color: "#f7f2f8",
        imag:Image1,
        name:"Chocolate Brownie Sundae",
        icon:<BiHeart />

    },

    {
        id:2,
        color: "#ffeeee",
        imag:Image2,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },

    {
        id:3,
        color: "#f6f8e2",
        imag:Image3,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },

    {
        id:4,
        color: "#fffaf4",
        imag:Image4,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },
]
export default function Shoproduct() {
  return (
    <div>
       <div>
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
          classic.map((product) => {
            return (
                <>
                <Card color={product.color} img={product.imag} name={product.name} icon={product.icon} />
                
                
                </>
            )
          })
        }
            </div>
        </div>
      
    </div>
    </div>
  )
}
