import React, { useState, useEffect } from 'react'

const Book = ({ bookId, title, year, pages, authorsId }) => {

    const [loadingAuthors, setLoadingAuthors] = useState(true)
    const [authors, setAuthors] = useState([]);

    const fetchData = () => {
        authorsId?.map(authorId => {
            fetch('http://localhost:8080/authors/' + authorId)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setAuthors(oldAuthors => [...oldAuthors, data])
                    setLoadingAuthors(false)
                })
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('Added to cart')
    }

    return (
        <div className='book'>
            <img className='book__img' src={'https://picsum.photos/500/600?random=' + bookId} alt={'Front page of ' + title} />
            <div className='book__info'>
                <h2 className='book__title'>{title}</h2>
                <ul className='book__info__list'>
                    <li className='book__info__item'><span className='italic'>Release year:</span> {year}</li>
                    <li className='book__info__item'><span className='italic'>Number of pages:</span> {pages}</li>
                </ul>
                <ul className='book__info__author__list'>
                    <h4 className='book__info__author__title italic'>Authors:</h4>
                    {loadingAuthors || !authors ? (
                        <p className='book__info__author__loading-text'>Fetching authors...</p>
                    ) : (
                        authors?.map(author => {
                            return <li key={author.id} className='book__info__author__item'>{author.firstName}</li>
                        })
                    )}
                </ul>
                <form className='book__form' onSubmit={onSubmit}>
                    <label htmlFor='bookCopies' className='book__label'>Numbers of copies:</label>
                    <input type='number' id='bookCopies' className='book__input' />
                    <button className='btn btn--accent btn--big'>Add to cart</button>
                </form>
            </div>
        </div>
    )
}

export default Book