import React from 'react'
import './Css/Comp.css'
import image from'./Css/mh.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        
        <div className='Wrapper'>
        <Link to='/Contact'>   
               <div className='MyIcon'> 
               <img src={image} alt='pic'></img>
          {/* Image */}
          </div></Link>
        </div>
    
      
      
      <div className='AboutMe'>

        <section className='mysection'>
            <h3>
                ABOUT ME SECTION
                
            </h3>
            <hr></hr>
            <p>          My name is Madison Rikkia Hill, I'm 19 years old, and I've worked as a coding apprentice at Road To Hire. My interests include puzzles, art, and technology. I enjoy finding solutions and making new things. My interest in technology began in high school when I enrolled in a class for website building and a game development course that used Scratch to create mini games. In addition to coding, I like doing traditional and digital art, watching movies, and partaking in way too many hobbies.</p>
            
        </section>

      
       
            


      </div>
      
    

    </>
    
  )
}

export default About