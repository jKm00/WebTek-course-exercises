import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Book from '../components/book'

const BookPage = () => {
    // Grab book id from url
    let { id } = useParams()

    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState([])

    const fetchData = () => {
        fetch('http://localhost:8080/books/' + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBook(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading || !book ? (
            <p>Loading...</p>
        ) : (
            <Book 
                bookId={book.id} 
                title={book.title} 
                year={book.year} 
                pages={book.numberOfPages}
                authorsId={book.authors}
            />
        )
    )
}

export default BookPage