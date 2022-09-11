import React from 'react'
import { FooterStyle } from './FooterStyle'
import logofotter from "../../img/Flogo.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <FooterStyle>
                <h4>Let’s work together</h4>

                <Link to="/">  <img src={logofotter} alt="logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>


                <a href="https://webalar.in/" target="blank">
                    <button>Get in touch</button>
                </a>

                <div className='garage-title'>
                    <h5 className='address'>Contact Us</h5>
                    <h5 className='conc'> Address</h5>
                </div>
                <div className='garage-address'>
                    <span> 98723 42023 info@logoipsum.com</span>
                </div>


                <div>
                    <a href="https://www.instagram.com/om_pattjoshi/" target="_blank">

                        <FaInstagram className='insta' />
                    </a>
                    <a href="https://twitter.com/Omprakshp3/" target="_blank">

                        <FaTwitter className='twitter' />
                    </a>

                    <a href='https://www.facebook.com/om.pattjoshi/' target="_blank">

                        <FaFacebook className='facebook' />
                    </a>
                </div>
                <footer>
                    Copyright © Webalar. All Rights Reserved
                </footer>
            </FooterStyle>
        </>
    )
}

export default Footer