
import "./styles.css"
import {Link, Route, Routes} from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'

// import {Cards} from './cards';

export default function App() {
  return( 
    <>
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">search</Link>
          </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </>
  )
}