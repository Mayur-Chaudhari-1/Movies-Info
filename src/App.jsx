import './css/App.css'
import Favourite from './pages/Favourite';
import NavBar from "./components/NavBar"
// import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {


  return (
    <> 
    <NavBar/>  
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Favourite' element={<Favourite/>}></Route>
      </Routes>
    </main>

    </>
  )
}

export default App
  