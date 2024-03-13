
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ShoppingBag from './Cart';
import Home from './Home';
import Fav from './Fav';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Cart from './Cart';
import Productdetail from './Productdetail';


function App() {


  return (
    <div className="App">
<Navbar></Navbar>



     


<Routes>
  <Route path='/' element={<Home />} />
  <Route path="Fav" element={<Fav />} />
  <Route path="Cart" element={<Cart />} />
  <Route path="Women" element={<Women />} />
  <Route path="Men" element={<Men />} />
  <Route path="Kids" element={<Kids />} />
  <Route path="Productdetail" element={<Productdetail />} />



</Routes>
{/* 
<Footer></Footer> */}
     
    </div>
  );
}


export default App;
