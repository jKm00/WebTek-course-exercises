import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '../components/book'

const BookPage = () => {
    // Grab book id from url
    let { id } = useParams()

    const [book, setBook] = useState([])

    const fetchData = () => {
        fetch('http://localhost:8080/books/' + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBook(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Book 
            bookId={book.id} 
            title={book.title} 
            year={book.year} 
            pages={book.numberOfPages}
        />
    )
}

export default BookPage