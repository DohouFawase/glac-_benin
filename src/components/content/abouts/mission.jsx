import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../../assets/about/Image.png"

export default function Mission() {
  return (
    <div>
      <div className="relative  bg-[#683292]">
      
        <div className="grid md:grid-cols-2 gap-8 mt-12 items-center text-white ">
        <div className="space-y-3 pl-24 bee">
            <h1 className="text-[3.3rem] font-bold ">Our Mission is to Create Moments</h1>
            <p className="text-xl">
            We strive to foster a welcoming and joyful environemets where custumers of all ages can gather, celebrate, and make lasting memories.Our commintement expend beyond
            serving greate ice cream.
            </p>

         
            <div className="">
            <NavLink className={"bg-[#f83d8e]  p-3 px-6 rounded-full text-white font-bold"}>
                Read More
            </NavLink>
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={about} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}
