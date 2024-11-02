import React from "react";
import Image1 from "../../assets/medias/Item.png";
import Image2 from "../../assets/medias/Figure(1).png";
import Image3 from "../../assets/medias/Figure(2).png";
import Image4 from "../../assets/medias/Figure.png";
import { motion } from "framer-motion";
const catego = [
  {
    id: 1,
    image: Image1,
    delay:0.5
  },

  {
    id: 2,
    image: Image2,
    delay:0.6
  },

  {
    id: 3,
    image: Image3,
    delay:0.7
  },

  {
    id: 4,
    image: Image4,
    delay:0.8
  },
  {
    id: 5,
    image: Image4,
    delay:0.9
  },
];
function slideIn (delay) {
  return {
   initial:{
       x:"100%",
       opacity:0
   },

   animate: {
       x:0,
       opacity:1,
       transition: {
           duration:0.6,
           delay:delay
       }
   }
  }
}
export default function Social() {
  return (
    <div className="bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38%  to-[#EAF8F9] to-[91%]">
      <div className="">
        <div className="py-24">
          <div className="">
            <div className="text-center py-12  bee">
              <h1 className="text-[3rem] font-bold">
                Follows Us on <span  className='text-[#f83d8e]'>Instagram</span>
              </h1>

              <p>
                Join Our instagram comunity for update, special deal and more{" "}
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-24 justify-center items-center overflow-hidden">
              {catego.map((categorie) => {
                return (
                  <>
                    <div className="">
                      <motion.img

                      variants={slideIn(categorie.delay)}
                      initial='initial'
                      whileInView={"animate"}
                        src={categorie.image}
                        alt=""
                        className="rounded-lg"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
