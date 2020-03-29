import React from 'react';
import './styles.css';
import logo from '../../resources/images/logo.svg';

function Navbar(){
    return(
        <div className='Navbar'>
            <a className='Navbar__brand' href='/'>
                <img className='Navbar__brand--logo' src={logo} alt='logo' />
                <span className='Span__post--color'>Post</span>
                <span className='Span__badge--color'>Badges</span>
            </a>
        </div>
    )
}

export default Navbar;