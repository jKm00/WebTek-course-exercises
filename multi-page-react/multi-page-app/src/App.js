import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Pages
import Home from './pages/home'
import Library from './pages/library'
import Book from './pages/book'

// Components
import Nav from './components/nav';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Library />} />
        <Route path='/books/:id' element={<Book />} />
      </Routes>
    </Router>
  )
}