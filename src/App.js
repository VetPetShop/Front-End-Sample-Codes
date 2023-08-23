import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      
      <Nav/>
      <HomePage/>
      <Footer/>
      {/* <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Products Listing componenet</h1>}/>
        <Route path='/add' element={<h1>add products</h1>}/>
        <Route path='update' element={<h1>updating the product</h1>}/>
        <Route path='/logout' element={<h1>logging out</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>
        </Route>
        <Route path='/SignUp' element={<SignUP/>}></Route>
      </Routes> */}
      
      
    </div>
  );
}

export default App;
