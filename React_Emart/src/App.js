
import './App.css';
import {Header} from './components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Login1 from './pages/login/Login1';
import Register1 from './pages/register/Register1';
import SubCategory from './pages/subcategory/SubCategory';
import ProductPage from './pages/productPage/ProductPage';
import CartPage1 from './pages/cartpage/CartPage1';
import { useEffect, useState } from 'react';
import TaxInvoice from './pages/invoice/TaxInvoice';
import RegistrationForm from './pages/register/Register1';
import LoginForm from './pages/login/Login1';
import CategoryPage from './pages/subcategory/categoy';
import AboutUs from './AboutUs';

function App() {

  useEffect(()=> {
    document.title = "E-Mart"
  })

  return (
    <div className="App">
     <Header/>
     
     <Routes>
        <Route index="Home" element={<Home/>}/>
        <Route path="login" element={<LoginForm /> }/>
        <Route path="cart" element={ <CartPage1/> }/>
        <Route path = 'login/register' element = {<RegistrationForm/>}/>
        <Route path="/subcategories/:id" element={<SubCategory />} />
        <Route path="/products/:id" element={<ProductPage/>} />
        <Route path="/invoice/:invoiceID" element={<TaxInvoice/>} />
        <Route path="category" element={<CategoryPage/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>

     <Footer/>
 
     
    </div>
  );
}

export default App;
