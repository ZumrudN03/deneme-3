import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cards from '../../Component/Cards'
import Header from "../../Component/Header"


function Home() {
  return (
    <>
    <Helmet>
        <title>
            Home
        </title>
    </Helmet>
    <div>
      <Header/>
      <Cards/>
    </div>
    </>

  )
}

export default Home