import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Spinner } from 'reactstrap';
import Home from './pages/Home/Home';
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Cart = lazy(() => import('./pages/Cart/Cart'));

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Suspense fallback={<Spinner color="primary" type="grow"/>}>
        <div className='bodyWrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}
export default App
