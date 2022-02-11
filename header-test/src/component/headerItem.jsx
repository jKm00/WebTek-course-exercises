import React from 'react';
import { Link } from 'react-router-dom'

function HeaderItem({title, desc, id, displayGif}) {

    let background
    if (!displayGif) {
        background = "url(https://picsum.photos/1200/600?random" + id + ")"
    }

    let buttonLink
    if (id) {
        buttonLink = '/books/' + id
    } else {
        buttonLink = '/shop'
    }

    return(
        <div className="header-item" style={{backgroundImage: background}}>
            <div className="header-wrapper">
                <div className="header-content">
                    <h1 className="header-item__title">{title}</h1>
                    <p className="header-item__desc">{desc}</p>
                    <Link to={buttonLink} className="btn">Go to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem