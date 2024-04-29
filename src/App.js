import './assets/styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/font.css"
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Common/Header/Header.jsx';
import Footer from './components/Common/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailContainer from './containers/ProductDetailContainer/ProductDetailContainer.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import ProductListContainer from './containers/ProductListContainer/ProductListContainer.jsx';
import UserInfoContainer from './containers/UserInfoContainer/UserInfoContainer.jsx';
import LoginRegisterContainer from './containers/LoginRegisterContainer/LoginRegisterContainer.jsx';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollTop />
          <Header />
          <Routes>
            <Route path='/' element={<ProductListContainer />}></Route>
            <Route path='/category/:categoria' element={<ProductListContainer />}></Route>
            <Route path='/item/:id' element={<ProductDetailContainer />}></Route>
            <Route path='/user-info' element={<UserInfoContainer /> }></Route>
            <Route path='/user/:action' element={<LoginRegisterContainer /> } ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
