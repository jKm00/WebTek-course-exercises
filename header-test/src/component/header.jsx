import React, { useState, useEffect, useRef } from 'react';
import HeaderItem from './headerItem'

function Header() {

    const brandTitle = "XXS - Because the size doesnt matter"
    const brandDesc = "Outdoors activity equipment, especially for hiking"

    const [loading, setLoading] = useState(true)
    const [books, setBooks] = useState([])
    const [headerItems, setHeaderItems] = useState([])

    let currentIndex = 0;

    function fetchBooks() {
        fetch('http://localhost:8080/books')
            .then(respone => {
                return respone.json()
            })
            .then(data => {
                setBooks(data)
                setLoading(false)
                setHeaderItems(document.querySelectorAll('.header-item'))
            })
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    function moveRight() {
        currentIndex++
        if (currentIndex > books.length) {
            currentIndex = 0
        }
        updateItems()
    }

    function moveLeft() {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = books.length
        }
        updateItems()
    }

    function updateItems() {
        headerItems.forEach(headerItem => {
            let offset = 100 * currentIndex
            headerItem.style.transform = 'translateX(-' + offset + '%)'
        })
    }

    return(
        loading || !books ? (
            <div>Loading...</div>
        ) : (
            <header className="header">
                <HeaderItem title={brandTitle} desc={brandDesc} displayGif={true} />
                {books.map(book => 
                    <HeaderItem className="headerItem" key={book.id} title={book.title} desc={book.year} id={book.id} />
                )}
                <button className="header__arrow header__arrow--left" onClick={moveLeft}>&#x3c;</button>
                <button className="header__arrow header__arrow--right" onClick={moveRight}>&#x3e;</button>
            </header>
        )
    )
}

export default Header;