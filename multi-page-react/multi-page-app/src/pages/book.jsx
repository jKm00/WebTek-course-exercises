import React from 'react';
import { useParams } from 'react-router-dom';

function Book() {

    let { id } = useParams();

    return (
        <div>
            <h2>Book with id: {id}</h2>
        </div>
    )
}

export default Book