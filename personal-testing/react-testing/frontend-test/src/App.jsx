import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            id:'',
            title:'',
            year:'',
            numberOfPages:''
        }
        this.changeBookId = this.changeBookId.bind(this)
        this.changeBookTitle = this.changeBookTitle.bind(this)
        this.changeYear = this.changeYear.bind(this)
        this.changeNumberOfPages = this.changeNumberOfPages.bind(this)
        this.onAddBook = this.onAddBook.bind(this)
    }

    changeBookId(event) {
        this.setState({
            id:event.target.value
        })
    }

    changeBookTitle(event) {
        this.setState({
            title:event.target.value
        })
    }

    changeYear(event) {
        this.setState({
            year:event.target.value
        })
    }

    changeNumberOfPages(event) {
        this.setState({
            numberOfPages:event.target.value
        })
    }

    onAddBook(event) {
        event.preventDefault()

        axios({
            url: 'http://localhost:8080/books',
            method: 'POST',
            data: {
                id: parseInt(this.state.id),
                title: this.state.title,
                year: parseInt(this.state.year),
                numberOfPages: parseInt(this.state.numberOfPages)
            }
        })
        .then (response => console.log(response))
        .catch(error => console.log(error))

        this.setState({
            id:'',
            title:'',
            year:'',
            numberOfPages:''
        })
    }

    getBooks(event) {
        event.preventDefault()

        const bookWrapper = document.querySelector('.books')
        bookWrapper.innerHTML = '';

        axios('http://localhost:8080/books', {
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            const books = response.data
            books.forEach(book => {
                const bookDiv = document.createElement('div')

                const bookTitle = document.createElement('h2')
                bookTitle.innerHTML = book.title

                const bookRelease = document.createElement('p')
                bookRelease.innerHTML = "Release year: " + book.year

                const bookPages = document.createElement('p')
                bookPages.innerHTML = "Number of pages: " + book.numberOfPages

                bookDiv.appendChild(bookTitle)
                bookDiv.appendChild(bookRelease)
                bookDiv.appendChild(bookPages)

                bookWrapper.appendChild(bookDiv)
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddBook}>
                    <h1>Add a book to the library</h1>
                    <input 
                    type='number'
                    placeholder='Book ID'
                    onChange={this.changeBookId}
                    value={this.state.id}
                    />
                    <br />
                    <input 
                    type='text' 
                    placeholder='Book title'
                    onChange={this.changeBookTitle}
                    value={this.state.title}
                    />
                    <br />
                    <input 
                    type='number'
                    placeholder='Release year'
                    onChange={this.changeYear}
                    value={this.state.year}
                    />
                    <br />
                    <input 
                    type='text'
                    placeholder='Number of pages'
                    onChange={this.changeNumberOfPages}
                    value={this.state.numberOfPages}
                    />
                    <br />
                    <input type='submit' value='submit' />
                </form>

                <form onSubmit={this.getBooks}>
                    <h1>Get books</h1>
                    <input type='submit' value='submit' />
                </form>
                <div className='books'>
                </div>
            </div>
        );
    }
}

export default App;