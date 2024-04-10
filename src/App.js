import './assets/styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Common/Header/Header.jsx';
import Main from './containers/Home/Main.jsx';
import Footer from './components/Common/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
