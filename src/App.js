import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './Components/NavBar';
import ProductsSection from './Components/ProductsSection';



function App() {
  return (
    <div className="App">
      <NavBarApp />    
      <ProductsSection title="Más Vendidos" />
      <ProductsSection title="Nuestros favoritos"/>
    </div>
  );
}

export default App;
