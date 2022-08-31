import React from 'react'
// import './Css/Home.css'
import { Nav } from '../Compenents/Nav'
import { Footer } from '../Compenents/Footer'
import Preview from '../Compenents/Preview'
import About from '../Compenents/About'
import Scrollm from '../Compenents/Scrollm'

function Home() {
    return (
     <>
     {/* //more components to be added */}
     <Nav/>
     
<Scrollm/>
     <About/>

     <Preview/>
     <Footer/>
     </>
    )
}

export default Home