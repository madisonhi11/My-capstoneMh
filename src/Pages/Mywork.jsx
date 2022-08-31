import React from 'react'
import  './Css/Pages.css'
import image1 from './Css/mh.png'
import Tea from './Css/Tea.png'
import Freedom from './Css/Freedom.png'
import Hope from './Css/Screen Shot 2022-08-31 at 2.52.44 AM.png'
import Bon from './Css/Screen Shot 2022-08-31 at 6.16.11 AM.png'
import Gate from './Css/Gate.png'
import { Nav } from '../Compenents/Nav' 
import { Footer } from '../Compenents/Footer'
import { Link } from 'react-router-dom'
const Mywork = () => {
  return (

    <>
    <Nav/>
               <h1>My Work</h1> 
    <div className='Wrapper'>
        <Link to='/Contact'>   
               <div className='MyIcon'> 
               <img src={image1} alt='pic'></img>
          {/* Image */}
          </div></Link>

        </div>
  


<h2>Tech Assignments</h2>
<div className='AboutMe'>

<section className='mysection'>
  
  <div className='MyIcon'> 
<a href='https://madisonhi11.github.io/BrochurelakeHcity/index.html'>
  <img src={Gate} alt='pic'></img></a><p> Where It All Started</p>
  <br/> <p>Gateway Website</p>
 </div>
    {/* Title
    heading
    desc
     */}
    
</section>
<section className='mysection'>

<div className='MyIcon'> <a href='https://justokes1.github.io/code4Justice/index.html'>
<img src={Freedom} alt='pic'></img></a>
<p>Code For Justice</p>
 </div>
 
    
</section>
<section className='mysection'>
    

<div className='MyIcon'> <a href='https://hopehacks-v1.herokuapp.com/'>
<img src={Hope} alt='pic' className='rePic'></img></a>
<p>Hope Hacks</p>
 </div>
</section>
<section className='mysection'>
    

<div className='MyIcon'> <a href='https://mads-tea-herb-shop.netlify.app/'>
<img src={Tea} alt='pic' className='rePic'></img></a>
<p>Ecommerce Tea Shop</p>
 </div>
</section>
<section className='mysection'>
    

<div className='MyIcon'> <a href='https://precious-tartufo-16043b.netlify.app/'>

<img src={Bon} alt='pic' className='rePic'></img></a>
<p>Redesign Challenge</p>
 </div>
</section>





</div>


   <Footer/>

    </>
  )
}

export default Mywork