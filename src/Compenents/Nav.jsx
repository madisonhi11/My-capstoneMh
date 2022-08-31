import React from 'react'
import './Css/Nav.css'
// import Contact from '../Pages/Contact'
import {Link} from "react-router-dom";
export const Nav = () => {
  return (
<div className='Container'>

     

       

        <div className='Nav-Header'>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>

                <li>
                <Link to='/Mywork'>My Work</Link>
                </li>

                
                <li>
                <Link to='/Contact'>Contact Info</Link>  
                </li>
            </ul>
        </div>

       

      

    </div>
  )
}
