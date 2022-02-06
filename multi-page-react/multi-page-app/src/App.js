import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Styles
import './styles/style.css';

// Pages
import HomePage from './pages/homePage'
import LibraryPage from './pages/libraryPage'
import BookPage from './pages/bookPage'

// Components
import Nav from './components/nav';

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/books' element={<LibraryPage />} />
        <Route path='/books/:id' element={<BookPage />} />
      </Routes>
    </Router>
  )
}