import React from 'react'
import Image1 from "../../../assets/seller/seller-image2.png"
import Image2 from "../../../assets/seller/seller-image3.png"
import Image3 from "../../../assets/seller/seller-image4.png"
import Image4 from "../../../assets/seller/seller-image1.png"
import { BiHeart } from 'react-icons/bi'
import Produt from '../product'


const selle = [
    {
        id:1,
        color: "#fff3eb",
        imag:Image1,
        name:"Chocolate Brownie Sundae",
        icon:<BiHeart />

    },

    {
        id:2,
        color: "#f7eae2",
        imag:Image2,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },

    {
        id:3,
        color: "#fdedd6",
        imag:Image3,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },

    {
        id:4,
        color: "#feeeef",
        imag:Image4,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },

    {
        id:4,
        color: "#feeeef",
        imag:Image4,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },


    {
        id:4,
        color: "#feeeef",
        imag:Image4,
        icon:<BiHeart />,
        name:"Chocolate Brownie Sundae",


    },


   
]

export default function ShopProduct() {
  return (
    <div>
       <div className="">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 ">
                {
                    selle.map((product) => {
                        return (
                            <>
                            <Produt key={product} color={product.color} img={product.imag} name={product.name} icon={product.icon}  />
                            </>
                        )
                    })
                }
            </div>
       </div>
    </div>
  )
}
