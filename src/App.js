import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './Components/NavBar/NavBar';
import ProductsSectionContainer from './Components/ProductsSection/ProductsSectionContainer';


function App() {



  return (
    <div className="App">
      <NavBarApp />    
      <ProductsSectionContainer />

    </div>
  );
}

export default App;
