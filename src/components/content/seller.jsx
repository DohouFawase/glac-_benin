import React from "react";
import { BiHeart } from "react-icons/bi";
import Image1 from "../../assets/seller/seller-image2.png";
import Image2 from "../../assets/seller/seller-image3.png";
import Image3 from "../../assets/seller/seller-image4.png";
import Image4 from "../../assets/seller/seller-image1.png";
import Produt from "../container/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
const selle = [
  {
    id: 1,
    color: "#fff3eb",
    imag: Image1,
    name: "Chocolate Brownie Sundae",
    icon: <BiHeart />,
    delay: 0.5,
  },

  {
    id: 2,
    color: "#f7eae2",
    imag: Image2,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay: 0.6,
  },

  {
    id: 3,
    color: "#fdedd6",
    imag: Image3,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay: 0.7,
  },

  {
    id: 4,
    color: "#feeeef",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay: 0.8,
  },

  {
    id: 4,
    color: "#feeeef",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay: 0.9,
  },

  {
    id: 4,
    color: "#feeeef",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay: 0.9,
  },
];

function slideIn(delay) {
  return {
    initial: {
      x: "-100%",
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
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
export default function Seller() {
  return (
    <div>
      <div className="">
        <div className="px-24 py-14">
          <div className="text-center py-12 bee ">
            <motion.h1
            variants={downIn(1)}
            initial="initial"
            whileInView={"animate"}
             className="text-[3rem] font-bold ">
              Our <span className="text-[#f93e8f]">Best</span> Seller
            </motion.h1>

            <motion.p
             variants={downIn(1.02)}
             initial="initial"
             whileInView={"animate"}
             className="text-[#646464] font-bold">
              Discover the favorite that keep our custumers come back form more{" "}
            </motion.p>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10} // Ajustez selon vos besoins
            slidesPerView={3} // Ajustez selon vos besoins
            navigation
            autoplay
            pagination={{ clickable: true }}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {selle.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  variants={slideIn(product.delay)}
                  initial="initial"
                  whileInView={"animate"}
                >
                  <Produt
                    color={product.color}
                    img={product.imag}
                    name={product.name}
                    icon={product.icon}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
