import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Footer from './components/NavBar/Footer';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {

    return (
        <>
            <NavBar />
            <HomePage />
            <Footer />
        </>
    )
}

export default App
