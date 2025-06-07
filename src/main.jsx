import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'
import App from './App.jsx'

import Signup from '../src/lading_page/signup/SignupPage.jsx'
import Products from '../src/lading_page/products/ProductPage.jsx'
import Pricing from '../src/lading_page/pricing/PricingPage.jsx'
import Support from '../src/lading_page/support/SupportPage.jsx'
import About from '../src/lading_page/about/AboutPage.jsx'
import NavBar from './lading_page/NavBar.jsx';
import Footer from './lading_page/Footer.jsx';
import NotFound from './lading_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <NavBar/>
 <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/pricing' element={<Pricing/>}/>
  <Route path='/support' element={<Support/>}/>
<Route path='/about' element={<About/>}/>
<Route path='*' element={<NotFound/>}/>
 </Routes>
<Footer/>
 
 </BrowserRouter>,
)
