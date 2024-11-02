import React from "react";
import Card from "./card";
import Image1 from "../../assets/classic/classic-image2.png";
import Image2 from "../../assets/classic/classic-image3.png";
import Image3 from "../../assets/classic/classic-image4.png";
import Image4 from "../../assets/classic/classic-image1.png";
import { BiHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {motion} from 'framer-motion'

const classic = [
  {
    id: 1,
    color: "#f7f2f8",
    imag: Image1,
    name: "Chocolate Brownie Sundae",
    icon: <BiHeart />,
    delay:0.4
  },
  {
    id: 2,
    color: "#ffeeee",
    imag: Image2,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay:0.5
  },
  {
    id: 3,
    color: "#f6f8e2",
    imag: Image3,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay:0.6
  },
  {
    id: 4,
    color: "#fffaf4",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay:0.7
  },
  {
    id: 4,
    color: "#fffaf4",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay:0.8
  },

   {
    id: 4,
    color: "#fffaf4",
    imag: Image4,
    icon: <BiHeart />,
    name: "Chocolate Brownie Sundae",
    delay:0.9
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
export default function ClasicCard() {
  return (
    <div>
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
        {classic.map((product) => (
          <SwiperSlide key={product.id}>
            <motion.div
            variants={slideIn(product.delay)}
            initial="initial"
            whileInView={"animate"}
             className="">
            <Card color={product.color} img={product.imag} name={product.name} icon={product.icon} />

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
