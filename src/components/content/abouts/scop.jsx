import React from "react";
import { NavLink } from "react-router-dom";
import Absolute from "../../../assets/head/absolute.png"
import rightas from "../../../assets/about/rightimage.png"
import scop from "../../../assets/about/journey-image.png"

export default function Scop() {
  return (
    <div>
      <div className="relative">
          
        <div className="grid md:grid-cols-2 mt-12 px-24 items-center gap-6">
          <div className="">
                <img src={scop} alt="" />
          </div>
          <div className="space-y-3 bee">
            <h1 className=" lg:text-[3.3rem] font-bold">Our <span className="text-[#f83d8e]">Journey</span> Began with a simple Dreams</h1>
            <p>
              Our goal is to make the best ice cream using only the
              finest,natural ingredient.From rich , creamy classic to
              adventurous new creations, every flavor is miticulurse crafted in
              house-to ensure the highest quality and freshness.
            </p>

            <p>
              We take pride in offering a diverse range of potions, including
              dairy-free, vegan, and gluten-free choices, so everyone can find
              their perfect sccop
            </p>
            <div className="">
            <NavLink className={"bg-[#f83d8e]  p-3 px-6 rounded-full text-white font-bold"}>
                Read More
            </NavLink>
            </div>
          </div>
        </div>
      <img src={rightas} alt="" className="absolute bottom-0 right-0" />

      </div>
    </div>
  );
}
