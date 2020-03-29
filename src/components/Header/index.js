import React from 'react';
import './styles.css';
import logo from '../../resources/images/badge-header.svg';

function Header(){
    return(
        <div className='BadgeNew__hero'>
            <img className='BadgeNew__image' src={logo} alt='logo' />
        </div>
    )
}

export default Header;