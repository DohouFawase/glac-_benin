import Absolute from "../../assets/head/absolute.png";
import imageBanner from "../../assets/head/banner-image.png";
import { NavLink } from "react-router-dom";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { motion } from "framer-motion";
function rotation() {
  return {
    initial: {
      opacity: 0,
      rotate: 390,
      x: 100,
    },
    animate: {
      opacity: 1,
      rotate: 2,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
}

function SlideIn() {
  return {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
}

function fadeIn() {
  return {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
}

function fadedown(delay) {
  return {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay:delay
      },
    },
  };
}
export default function Head() {
  return (
    <div className=" overflow-hidden  z-10 bee lg:h-screen w-full bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38%  to-[#EAF8F9] to-[91%]  ">
      <div className=" pt-2">
        <div className="relative mt-12 md:mt-2 ">
          <div className="absolute  ">
            <img src={Absolute} alt="" />
          </div>
        </div>
        <div className=" md:px-24     lg:px-24  flex md:flex-row  flex-col-reverse  gap-8 items-center justify-center ">
          <div className="py-12 md:mt-4 md:px-0 px-12">
            <div className="flex   items-center gap-x-4 mb-2">
              <motion.div
                variants={fadeIn()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-16 h-1 bg-black"
              ></motion.div>
              <motion.h4 
               variants={fadeIn()}
               initial="initial"
               whileInView="animate"
              className="font-bold text-xl">Welcome to the</motion.h4>
            </div>
            <div className="space-y-2 ">
              <motion.h1
                variants={fadedown()}
                initial="initial"
                whileInView="animate"
               className="mb-2 md:text-[2rem] lg:text-[4rem] font-bold ">
                Discover <span className="text-[#f83d8e]">Sweet</span> Delights
                !
              </motion.h1>
              <motion.p
                 variants={fadedown()}
                 initial="initial"
                 whileInView="animate"
                 >
                Relish the timeless taste of handcrafted ice, cream, made with
                passions and the finest ingrediants{" "}
              </motion.p>
              <motion.div
               variants={fadedown(1)}
               initial="initial"
               whileInView="animate"
              className="">
                <NavLink
                  className={
                    "bg-[#683292] justify-center text-white font-bold px-2 flex w-72 items-center gap-x-1 p-2 rounded-full shadow-md "
                  }
                >
                  Browser our classic Flavors <HiMiniArrowSmallRight />{" "}
                </NavLink>
              </motion.div>
            </div>
          </div>
          <div className="flex-grow  z-10 ">
            <div className="relative mb-12">
              <motion.div
                variants={rotation()}
                initial="initial"
                whileInView="animate"
                className="bg-gray-400 lg:h-[30rem] lg:w-[30rem] -z-10  h-[25rem] w-[25rem]  rounded-full overflow-hidden"
              ></motion.div>
              <motion.img
                variants={SlideIn()}
                initial="initial"
                whileInView="animate"
                src={imageBanner}
                alt=""
                className="absolute top-14 left-4 md:w-[530px] overflow-hidden z-10"
              />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
