import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
 

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JustinGoodrich.xyz</title>
        <meta name="description" content="Hello, my name is Justin Goodrich, i'm a computer engineering student from North Carolina" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
      </Head>
      <div className="bg-offwhite">
        <div className="hidden md:flex justify-center">
        <Navigation/>
        </div>
      </div>
    </div>
  )
}

export default Home
