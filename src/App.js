import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
    </>
  );
}

export default App;
