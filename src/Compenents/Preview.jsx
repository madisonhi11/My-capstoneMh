import React from 'react'
import { Link } from 'react-router-dom'
const Preview = () => {
  return (
      <>
      
     
      <div className='wrap'>
                <h2>Tech Portfolio</h2>
      <div className="tech-section">
      <Link to='/Mywork'> <div className='preview ' style={{borderRadius:"10px"}}></div></Link>
     
      
 
      </div>
      </div>
      
      </>
    
  )
}

export default Preview