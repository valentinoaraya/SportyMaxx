import './assets/styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/font.css"
import Header from './components/Common/Header/Header.jsx';
import Main from './containers/Home/Main.jsx';
import Footer from './components/Common/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop/>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/item/:id' element={<ProductDetailContainer/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
