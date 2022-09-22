import React from 'react'
import logo from '../../assets/images/logo.png'
import './Footer.css'
const Footer = () => {
  return (
      <footer>
          <div className="footer-container">
              <div className="footer-col" style={{"textAlign": 'center', "width":100, "margin":"auto"}}>
                 <li>About Online Food</li>
                 <li>Read our blog</li>
                 <li>Sign up to deliver</li>
                 <li>Add your restaurant</li>
              </div>
              <div className="footer-col" style={{"textAlign": 'center', "width":100, "margin":"auto"}}>
           <li>Get Help</li>
           <li>Read FAQs</li>
           <li>View All Cities</li>
           <li>Restaurants near me</li>
              </div>
          </div>
    </footer>
  )
}

export default Footer