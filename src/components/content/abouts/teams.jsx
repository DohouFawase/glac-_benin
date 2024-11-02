import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Teams() {
  return (
    <div className="bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38%  to-[#EAF8F9] to-[91%]">
      <div className="md:px-24 py-24">
        <div className="">
          <div className="">
            <div className="text-center py-12 ben ">
              <h1 className="text-[3rem] font-bold">
                Our <span className="">Teams</span> Members
              </h1>

              <p>
                Get to know the friendly faces behind yours favorites flavors{" "}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:px-0 gap-12 ">
            <div className="flex justify-center flex-col items-center">
              <div className="w-64 rounded-full h-72 bg-gray-200"></div>
              <div className="text-center  mt-2">
                <h1 className="font-bold">Marie-Maxime APKOVO</h1>
                <p className="text-sm">Bakery Worker</p>
                <div className="flex gap-4 mt-2 justify-center ">
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaFacebook color="#fff" />
                    </NavLink>
                  </div>
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaYoutube color="#fff" />
                    </NavLink>
                  </div>

                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaInstagram color="#fff" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center">
              <div className="w-64 rounded-full h-72 bg-gray-200"></div>
              <div className="text-center  mt-2">
                <h1 className="font-bold">Judith Roseline AGBO</h1>
                <p className="text-sm">Staff Worker</p>
                <div className="flex gap-4 mt-2 justify-center ">
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaFacebook color="#fff" />
                    </NavLink>
                  </div>
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaYoutube color="#fff" />
                    </NavLink>
                  </div>

                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaInstagram color="#fff" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-col items-center">
              <div className="w-64 rounded-full h-72 bg-gray-200"></div>
              <div className="text-center  mt-2">
                <h1 className="font-bold">Mouizou Atanda ADJIBI</h1>
                <p className="text-sm">Shop Worker</p>
                <div className="flex gap-4 mt-2 justify-center ">
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaFacebook color="#fff" />
                    </NavLink>
                  </div>
                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaYoutube color="#fff" />
                    </NavLink>
                  </div>

                  <div className="bg-[#f83d8e] p-2 rounded-full">
                    <NavLink>
                      <FaInstagram color="#fff" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
