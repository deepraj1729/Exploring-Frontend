import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navbar from "./components/Global/Navbar"
import Footer from "./components/Global/Footer"
import NewsAPI from './components/NewsAPI/NewsAPI';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <NewsAPI/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;