import React from 'react'
import { Nav } from '../Compenents/Nav'
import { Link } from 'react-router-dom'
import image1 from './Css/mh.png'
import { Footer } from '../Compenents/Footer'
const Experience = () => {
  return (
    <>
    <Nav/>
       <h1> The Road to Hire Experience</h1>
    <div className='Wrapper'>
        <Link to='/Contact'>   
               <div className='MyIcon'> 
               <img src={image1} alt='pic'></img>
          {/* Image */}
          </div></Link>

        </div>
 
    
 <Footer/>
    </>
    
  )
}

export default Experience