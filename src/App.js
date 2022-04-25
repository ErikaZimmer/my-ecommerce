import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSection from './Components/Pages/HomeSection';
import AboutSection from './Components/Pages/AboutSection';
import Cart from './Components/Cart';
import NotFound from './Components/Pages/NotFound';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
//import CartContextProvider from './Components/CartContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />  
        <div className='sectionContainer'>  
          <Routes>
            <Route exact path='/' element={<HomeSection />} />
            <Route exact path='/about' element={<AboutSection/>} />
            <Route exact path='/categoria/:idCategory' element={<ItemListContainer/>} />
            <Route exact path='/producto/:idItem' element={<ItemDetailContainer/>} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
