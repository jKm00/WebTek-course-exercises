import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <Link to={'/books/' + props.bookId} className='card'>
            <img src={'https://picsum.photos/500/600?random=' + props.bookId} alt="" />
            <div className="card__body">
                <h3 className="card__body__title">{props.title}</h3>
                <p className="card__body__year">Release year: {props.year}</p>
                <p className="card__body__number-of-pages">Number of pages: {props.pages}</p>
            </div>
        </Link>
    )
}

export default Card