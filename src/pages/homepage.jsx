import React from 'react'
import Head from '../components/content/head'
import Relieve from '../components/content/relieve'
import Classic from '../components/content/classic'
import Summer from '../components/content/summer'
import Seller from '../components/content/seller'
import Categorie from '../components/content/categorie'
import Testimonial from '../components/content/testimonial'
import Newsleter from '../components/content/newsleter'
import Social from '../components/content/social'
import {Helmet} from "react-helmet";
import Reservation from '../components/content/reservation'
export default function Homepage() {
  return (
    <div>
     <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         
        </div>
    <Head />
    <Relieve />
    <Classic />
    <Categorie />
    <Summer/>
    <Seller/>
    <Testimonial />
    <Newsleter />
    <Social />
    {/* <Reservation /> */}
    </div>
  )
}
