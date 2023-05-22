import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/NavBar/Footer';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
import NavBar from './components/NavBar/NavBar';


function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/productpage" element={<ProductPage />} />
                    {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
                                       
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
