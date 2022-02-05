import React from 'react';
import { Link } from 'react-router-dom';

class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookId: '',
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(event) {
        this.setState({
            bookId:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to the library</h2>
                <label for='bookSelector'>Choose a book to view:</label>
                <br />
                <input type='number' placeholder='Enter book ID' onChange={this.updateState} id='bookSelector' />
                <br />
                <Link to={this.state.bookId}>View book</Link>
            </div>
        )
    }
}

export default Library