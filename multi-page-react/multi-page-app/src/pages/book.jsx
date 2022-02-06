import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Book() {
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
        <div>
            <h3>{book.title}</h3>
        </div>
    )
}

export default Book