import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="header--wrapper">
                <h1 className='header__title'>Book library</h1>
                <p className="header__desc">Feel the freedom of book reading</p>
                <Link to='/books' className="btn btn--header">Borrow book</Link>
            </div>
        </header>
    )
}

export default Header