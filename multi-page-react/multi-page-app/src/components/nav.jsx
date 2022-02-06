import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [cart, setCart] = useState(0)

    const addCartItem = () => {
        setCart(cart + 1)
    }

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link to='/' className='nav__link'>Home</Link></li>
                <li className='nav__item'><Link to='/books' className='nav__link'>Borrow book</Link></li>
            </ul>
            <p onClick={addCartItem}>Cart item: {cart}</p>
        </nav>
    )
}

export default Nav