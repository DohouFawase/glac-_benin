import { motion } from 'framer-motion'
import { useTransition, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaBagShopping, FaBars, FaCarTunnel } from 'react-icons/fa6'
import { HiMiniArrowSmallRight } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
const Nav = [
    {
        title:'Home',
        link:"",
        delay:0.1
    },
    {
        title:'A propos',
        link:"/about",
        delay:0.2

    },
    {
        title:'Product',
        link:"/product",
        delay:0.3
    },
    // {
    //     title:'Events',
    //     link:"event"
    // },
    {
        title:'Faqs',
        link:"",
        delay:0.4
    }
]

function slideIn (delay) {
   return {
    initial:{
        y:"-100%",
        opacity:0
    },

    animate: {
        y:0,
        opacity:1,
        transition: {
            duration:0.6,
            delay:delay
        }
    }
   }
}
export default function Navbar() {
    const [isPending, starTransition] = useTransition()
    const [menu,setMenu] = useState(false)
    function drop () {
        setMenu(!menu)
        console.log('Bonjour')
    }
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between px-24
        p-4  bg-gradient-to-r from-[#EFD7EF] via-[#F5F9FC] via-38% 
         to-[#EAF8F9] to-[91%] z-10 bee text-xl">
            <motion.h1 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.8, delay:0.5}}
            >
            <NavLink> 
                Glacé Bénin
            </NavLink> 
            </motion.h1>
            <div className="">
                <nav className='flex gap-x-12'>
                    <ul className='hidden lg:flex items-center gap-x-8'>
                       
                    {
    Nav.map((nav) => {
        return (
            <motion.li
            variants={slideIn(nav.delay)}
            initial="initial"
            animate="animate"

             key={nav.title}>
                <NavLink 
                    to={nav.link} 
                    className={({ isActive }) => 
                        `text-lg ${isActive ? 'text-[#f8549b] font-bold' : 'hover:text-[#f8549b]'}`
                    }
                >
                    {nav.title}
                </NavLink>
            </motion.li>
        );
    })
}

                        
                    </ul>

                    <motion.div
                    variants={slideIn(1)}
                    initial="initial"
                    animate="animate"
                     className="flex items-center gap-x-3 ">
                        <div className="hidden md:flex gap-4 items-center">
                            <BiSearch size={20}/>
                            <div className="relative">
                            <FaBagShopping  size={20}/>
                           
                            </div>
                            <div className=" md:flex">
                            <NavLink className="hidden  md:flex items-center  bg-[#f83d8e] px-6 md:p-2 md:px-4 text-[0.1rem] md:text-base text-white font-normal shadow-md rounded-full">Contact us  </NavLink>
                            </div>
                        </div>

                        <div className="lg:hidden w-full ">
                        <div onClick={drop} className="relative ">
                        {
                            menu ? (<FaCarTunnel  size={20}/>):(<FaBars  size={20}/>) 
                        }
                       
                       
                       <div className="absolute bg-black text-white -left-0 z-10 w-44  ">
                       {
                            menu && (
                                <>
                                 <ul className=' gap-x-8 flex flex-col  justify-center'>
                       
                       {
       Nav.map((nav) => {
           return (
               <motion.li
               variants={slideIn(nav.delay)}
               initial="initial"
               animate="animate"
   
                key={nav.title}>
                   <NavLink 
                       to={nav.link} 
                       className={({ isActive }) => 
                           `text-lg ${isActive ? 'text-[#f8549b] font-bold' : 'hover:text-[#f8549b]'}`
                       }
                   >
                       {nav.title}
                   </NavLink>
               </motion.li>
           );
       })
   }
   
                           
                       </ul>
                                
                                </>
                            )
                        }
                       </div>
                        </div>
                        </div>

                    </motion.div>
                </nav>
            </div>
        </div>
      </div>
    </div>
  )
}
