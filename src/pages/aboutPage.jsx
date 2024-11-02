import React from 'react'
import Head from '../components/content/abouts/head'
import Scop from '../components/content/abouts/scop'
import Mission from '../components/content/abouts/mission'
import Statistique from '../components/content/abouts/statistique'
import Teams from '../components/content/abouts/teams'
import Newsleter from '../components/content/newsleter'
import {Helmet} from "react-helmet";

export default function AboutPage() {
  return (
    <div>
       <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>A propos</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         
        </div>
      <Head/>
      <Scop />
      <Mission/>
      <Statistique />
      <Teams/>
      <Newsleter />

    </div>
  )
}
