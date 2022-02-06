import React from 'react';
import { Link } from 'react-router-dom';

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
        console.log(data);
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
                            <Link to={'/books/' + book.id} className='card' key={book.id}>
                                <img src={'https://picsum.photos/200/250?random=' + book.id} alt="" />
                                <div className="card__body">
                                    <h3 className="card__body__title">{book.title}</h3>
                                    <p className="card__body__year">Release year: {book.year}</p>
                                    <p className="card__body__number-of-pages">Number of pages: {book.numberOfPages}</p>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Library