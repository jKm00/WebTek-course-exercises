import Header from './component/header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Header />}/>
      </Routes>
    </Router>
  );
}

export default App;
