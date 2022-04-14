import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from './Components/Pages/HomeSection';
import AboutSection from './Components/Pages/AboutSection';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />    
        <Routes>
          <Route exact path='/' element={<HomeSection />} />
          <Route exact path='/about' element={<AboutSection/>} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
