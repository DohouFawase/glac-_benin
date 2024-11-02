import React from 'react'
import Head from '../components/content/shop/head'
import Product from '../components/content/shop/product'
import { Helmet } from 'react-helmet'

Helmet
export default function Boutique() {
  return (
    <div>
      <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         
        </div>
     <Head />
     <Product />
    </div>
  )
}
