import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link to='/' className='nav__link'>Home</Link></li>
                <li className='nav__item'><Link to='/books' className='nav__link'>Borrow book</Link></li>
            </ul>
        </nav>
    )
}

export default Nav