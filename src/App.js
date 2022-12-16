import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Menu from './Components/Pages/Menu/Menu'
import Services from './Components/Pages/Services/Services'
import Reviews from './Components/Pages/Review/Reviews'
import Navbar from './Components/Shared/Navbar';
import About from './Components/Pages/About/About';


function App() {
  
  <script>
    AOS.init();
  </script>

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
