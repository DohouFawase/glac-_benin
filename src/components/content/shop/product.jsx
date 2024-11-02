import React from 'react'
import ShopHead from '../../container/shop/shopHead'
import ShopSideBar from '../../container/shop/shopSideBar'
import ShopProduct from '../../container/shop/shopProduct'
export default function Product() {
  return (
    <div className='px-24 mt-24'>
      <ShopHead />
      <div className="mt-12">
      <div className="flex justify-center">
         <div className="hidden lg:flex">
         <ShopSideBar />
         </div>
      <ShopProduct/>
      </div>
      </div>
    </div>
  )
}
