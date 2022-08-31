import React from 'react'
import './Css/Footer.css'
import image1 from './Css/mh.png'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <>
            <footer>
            <ul class="footer-menu">
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
            </ul>
            <ul class="footer-menu">
            <img src={image1} alt='pic'></img>
            </ul>
        </footer>
    </>
  )
}
