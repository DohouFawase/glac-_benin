import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Image4 from "../../assets/categories/categories-image4.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const catego = [
  {
    id: 1,
    title: "Sundaes",
    icon: <HiMiniArrowSmallRight size={25} />,
    image: Image4,
    linl: "#",
    delay:0.5
  },

  {
    id: 2,
    title: "Ice cream Cones",
    icon: <HiMiniArrowSmallRight size={25} />,
    image: Image4,
    linl: "#",
    delay:0.6

  },

  {
    id: 3,
    title: "Milkshakes",
    icon: <HiMiniArrowSmallRight size={25} />,
    image: Image4,
    linl: "#",
    delay:0.7

  },

  {
    id: 4,
    title: "Seasonas Flavor",
    icon: <HiMiniArrowSmallRight size={25} />,
    image: Image4,
    linl: "#",
    delay:0.8


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

function downIn(delay) {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
}
export default function Categorie() {
  return (
    <div>
      <div className="py-16">
        <div className="">
          <div className="text-center py-12 bee ">
            <motion.h1
            variants={downIn(0.5)}
            initial="initial"
            whileInView={"animate"}
            className="text-[3rem] font-bold "
            >
              
              Explore Our <span className="text-[#f93e8f]">categories</span>
            </motion.h1>

            <motion.p 
             variants={downIn(0.5)}
             initial="initial"
             whileInView={"animate"}
            className="text-[#646464] font-bold">
              Browse throught our different categories to find favorite ice
              cream treat{" "}
            </motion.p>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-24 overflow-hidden">
            {catego.map((categorie) => {
              return (
                <>
                  <div className="">
                    <motion.div
                    variants={slideIn(categorie.delay)}
                    initial="initial"
                    whileInView={"animate"}
                      key={categorie.id}
                      className="relative flex flex-col justify-center items-center"
                    >
                      <img
                        src={categorie.image}
                        alt=""
                        className="rounded-lg"
                      />
                      <div className="bg-white flex rounded-lg justify-between  items-center px-4 py-3 absolute bottom-4 w-full">
                        <p className="font-bold">{categorie.title}</p>
                        <div className="bg-[#f83d8e] p-2 rounded-full text-white">
                          <NavLink to={categorie.linl}>
                            {" "}
                            {categorie.icon}
                          </NavLink>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
