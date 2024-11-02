import React from 'react'
import { NavLink } from 'react-router-dom'
const Categorie = [
  {
    name: 'Canned Ice cream'
  },

  {
    name: 'Frozen Youhgt'
  },

  {
    name: 'Ice Cream cake'
  },

  {
    name: 'Juice'
  },
]

export default function ShopSideBar() {
  return (
    <div className='w-[20rem] '>
      <div className="flex flex-col
      space-y-3">
        <div className="">
            <h1>Categorie</h1>
          <div className="space-y-3 my-4">
          {
                Categorie.map((cate) => {
                    return (
                        <>
                        <div key={cate.name} className="
                        ">
                        <NavLink>
                            {
                              cate.name  
                            }
                        </NavLink>
                        </div>
      
                        </>
                    )
                })
            }
          </div>
          
        </div>
        <div className="py-4">
        <h1>Filtrer By</h1>
            <div className="flex gap-4 py-4">
                <p>Range:</p>
                <div className="flex">
                    <p>5</p> -
                    <p>10</p>
                </div>
            </div>
        </div>
        <div className="">
        <h1>Featured by</h1>

        </div>
      </div>
    </div>
  )
}
