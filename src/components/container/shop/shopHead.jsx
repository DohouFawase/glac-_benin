import React from "react";
import { useContext } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { HiBars4 } from "react-icons/hi2";
import {GblobalContext}from "../../context/gloabalContext";

export default function ShopHead() {
  const {searchParam,setsearchParam,handleSubmite} = useContext(GblobalContext);
  return (
    <div>
      <div className="">
        <div className="md:flex gap-4 items-center">
          <form  onSubmit={handleSubmite()}>
            <div className=" ">
              <input
                type="text"
                name="search"
                value={searchParam}
                placeholder="Search"
                onChange={(event) => setsearchParam(event.target.value)}
                className="border px-2 border-gray-500 p-2 rounded-full "
              />
              {/* <BiSearch size={15} className="" /> */}
            </div>
          </form>

          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
            <button className="bg-[#f83d8e] p-2 text-white px-2 font-bold rounded-lg">
              <HiBars4 size={25} />
              </button>
              <button className="bg-gray-300 p-2 text-white px-2 font-bold rounded-lg">
              <AiOutlineBars size={25} />
              </button>
             
              <p>Showing 1-8 of 24 results</p>
            </div>
            <div className="">
                <div className="">
                    <p>Default Sorting</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
