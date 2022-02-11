import React from 'react';
import { Link } from 'react-router-dom'

function HeaderItem({title, year, id}) {
    return(
        <div className="header-item">
            <div className="header-wrapper">
                <div className="header-content">
                    <h1 className="header-item__title">{title}</h1>
                    <p className="header-item__desc">Release year: {year}</p>
                    <Link to={'/books/' + id} className="btn">Go to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem