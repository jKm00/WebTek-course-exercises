import React from 'react'

const Book = (props) => {
    return (
        <div className='book'>
            <img className='book__img' src={'https://picsum.photos/500/600?random=' + props.bookId} alt={'Front page of ' + props.title} />
            <div className='book__info'>
                <h2 className='book__title'>{props.title}</h2>
                <ul className='book__info__list'>
                    <li className='book__info__item'><span className='italic'>Release year:</span> {props.year}</li>
                    <li className='book__info__item'><span className='italic'>Number of pages:</span> {props.pages}</li>
                </ul>
                <form className='book__form'>
                    <label htmlFor='bookCopies' className='book__label'>Numbers of copies:</label>
                    <input type='number' id='bookCopies' className='book__input' />
                    <button className='btn btn--accent btn--big'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default Book