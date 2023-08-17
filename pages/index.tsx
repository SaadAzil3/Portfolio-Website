
import Navbar from '@/components/Navbar'
import RightSide from '@/components/RightSide'
import LeftSide from '@/components/leftSide'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import {motion} from "framer-motion";
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Exeperience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    
    <link rel="shortcut icon" href="./public/favicon.ico" />
      <title>Saad Azil</title>
    </Head>
    <main>
      <Navbar/>
      <div className="body-container">
        <motion.div 
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{delay: 1.5}}
            className="res-left-side">
         <LeftSide />
        </motion.div>
        <div className="middle-side">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </div>
        <motion.div 
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{delay: 1.5}}
            className="res-right-side">
          <RightSide />
        </motion.div>
      </div>
    </main>
    </>
  )
}
