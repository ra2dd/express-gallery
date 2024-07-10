import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Art from './components/Art'

function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/art">Art Pieces</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/art" element={<Art />} />
          <Route path="/category" element={<p>Categories</p>} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </Router>

      <footer>
        2024
      </footer>
    </> 
  )
}

export default App
