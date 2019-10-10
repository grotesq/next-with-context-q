import React from 'react'
import Head from 'next/head'
import Viewer from "../components/Viewer";
import Button from "../components/Button";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='hero'>
      <Viewer/>
      <Button/>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
