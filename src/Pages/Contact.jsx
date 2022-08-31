import React from 'react'
import { Footer } from '../Compenents/Footer'
import { Nav } from '../Compenents/Nav'
import { Link } from 'react-router-dom'
import image1 from './Css/mh.png'
const Contact = () => {
  return (
    <>
    <Nav/> 
    <h1>Contact Information</h1>
    
    <div className='Wrapper'>
        <Link to='/Contact'>   
               <div className='MyIcon'> 
               <img src={image1} alt='pic'></img>
          {/* Image */}
          </div></Link>

        </div>


    <div className="ContactMe">

       
<div className='CMwrapper'>
      <section className='mysection2'>
      <a href="https://www.linkedin.com/in/madisonhill1/">
      <p>Linkedin</p></a>
    </section>
    
    <section className='mysection2'>
      <p> Email : Rikkia731@gmail.com</p>
    </section>

    <section className='mysection2'>
    <a href="https://github.com/madisonhi11"> 
     <p> Github </p></a>
    </section>
</div>




    </div>
   
    <Footer/>
    
   
    </>
  )
}

export default Contact