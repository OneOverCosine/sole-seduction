import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/NavBar/Footer';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import NavBar from './components/NavBar/NavBar';
import CategoryPage from './components/CategoryPage/CategoryPage';
import ShopContextProvider from './context/ShopContext';


function App() {

    return (
        <>
            <ShopContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/categories" element={<CategoryPage />} />
                        <Route path="/product/:productId" element={<ProductPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    </Routes>

                    <Footer />
                </BrowserRouter>
            </ShopContextProvider>
        </>
    )
}

export default App
