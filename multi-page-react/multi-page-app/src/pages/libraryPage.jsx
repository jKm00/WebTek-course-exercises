import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/card'

class Library extends React.Component {

    state = {
        loading:true,
        books: null
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/books';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({books: data, loading: false})
    }

    render() {
        return (
            <div className='shop--wrapper'>
                <h2 className="shop__title">Our books</h2>
                <div className="shop__item-list">
                    {this.state.loading || !this.state.books ? (
                        <p>Loading...</p>
                    ) : (
                        this.state.books.map(book => 
                            <Card key={book.id}
                                bookId={book.id} 
                                title={book.title} 
                                year={book.year} 
                                pages={book.numberOfPages}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Library