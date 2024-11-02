import { BsInstagram } from "react-icons/bs";
import { FaEnvelopeSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaInstalod,
  FaLocationArrow,
  FaTiktok,
} from "react-icons/fa6";

import { NavLink } from "react-router-dom";
const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "A propos",
    link: "/about",
  },

  {
    title: "Product",
    link: "/product",
  },

  {
    title: "Blog",
    link: "#",
  },

  {
    title: "Contact",
    link: "#",
  },
];
export default function Footer() { 
  const years =  new Date().getFullYear()
  return (
    <div className="bg-[#750093] text-white">
      <div className=" px-2 md:px-24">
        <div className="py-12">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="">
                <p>Glacé Bénin</p>
              </div>
              <div className="space-y-3">
                <p className="font-bold text-3xl">Navigation</p>
                <div className="grid md:grid-cols-2 space-y-1">
                  {nav.map((foot) => {
                    return (
                      <>
                        <NavLink key={foot.title} to={foot.link}>
                          {foot.title}
                        </NavLink>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-x-4">
                  <div className=" rounded-full">
                    <FaLocationArrow className="h-12 w-12  bg-[#83009e] rounded-full p-4" />
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold">Adress</p>
                    <p>
                      Sur les pavés de Haie-Vive en face du Calypso et Domino
                      Express, Cotonou, Bénin
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="">
                    <FaEnvelopeSquare className="h-12 w-12  bg-[#83009e] rounded-full p-4" />
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold">Email</p>
                    <a href="mailto:glacebenin2018@gmail.com">
                      glacebenin2018@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="space-y-4">
                  <div className="">
                    <div className="">
                      <a href="tel:+22962060000" className="text-3xl font-bold">+22962060000</a>
                      <p>Got Questions? Call us</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href="" className="">
                      <FaFacebook />
                    </a>
                    <a href="" className="">
                      <FaTiktok />
                    </a>
                    <a href="" className="">
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center border-t-gray-50 border-t-2 mt-12">
        <p className="text-[0.7rem] mt-2 "> Coding and design by <a href="">Illusionyst.Studio</a> copyrighn all reserve {years} </p>
      </div>
        </div>
      </div>
     
    </div>
  );
}
