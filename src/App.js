import './App.css';
import Nav from './components/Nav.js';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import OrderPage from './components/OrderPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductPage from './components/ProductPage';
import PetPage from "./components/PetPage";



function App() {
  return (
    <div>
      
      <Nav/>
      <div>
  <Routes>
    <Route path="/" exact element={<HomePage/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path='/Orders' element={<OrderPage/>} />
    <Route path='/Cart' element={<CartPage/>} />
    <Route path='/pet/:categoryName' element={<ProductPage/>} />
    
    <Route path='/PetPage' element={<PetPage/>}/>
  </Routes>
</div>

    
      
      
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
