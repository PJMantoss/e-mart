import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
