import React from 'react'
import './Css/scroll.css'
import image from'./Css/mh.png'
const scrollm = () => {
  return (
    <section className='SectionDiv'>
    <div className='divscroll'>
      <div className='glow'>
      <section className="news-message">
      <p>   <div className='MyIcon2'> 
               <img src={image} alt='pic'></img>
          {/* Image */}
          </div>
        </p>
        <p>- Madison</p>
        <p>Hill -</p>
       
        <p>Software</p>
        <p>Developer - </p>
     
        <p>Artist - </p>
      
        <p>Programmer  - </p>
        <p>   <div className='MyIcon2'> 
               <img src={image} alt='pic'></img>
          {/* Image */}
          </div>
        </p>
      
      </section>
 
        </div>
    </div>
      </section>
  )
}

export default scrollm