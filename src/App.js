import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route path="" element={<Products />} />
    </Routes>
    </>
  );
}

export default App;
