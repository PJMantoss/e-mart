import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
