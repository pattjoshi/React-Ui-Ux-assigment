import React from 'react'
import { Link } from 'react-router-dom';
import { OptionsContainer, OptionLink, NavigationBar } from './HeaderStyled';
import logoimg from "../../img/logo.png";
import About from '../../page/About/About';
import Contact from '../../page/Contact/Contact';




const Header = () => {
    return (
        <NavigationBar>
            <img src={logoimg} alt="logo" />
            <OptionsContainer>
                <OptionLink to='/'>Home</OptionLink>
                <OptionLink to='/about' component={About}  >About</OptionLink>
                <OptionLink to='/contact' component={Contact}>Contact</OptionLink>
            </OptionsContainer>
            <button>Get tuch</button>
        </NavigationBar>
    )
}

export default Header