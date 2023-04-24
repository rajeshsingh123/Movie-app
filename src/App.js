import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import Fav from './components/Fav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<><Banner/><MoviesList/></>}/>
   <Route path="/favourites" element={<Fav/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
