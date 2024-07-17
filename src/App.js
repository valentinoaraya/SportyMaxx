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
import FormAddProductContainer from './containers/FormAddProductContainer/FormAddProductContainer.jsx';
import EditProductsContainer from './containers/EditProductsContainer/EditProductsContainer.jsx';
import ProductToEditContainer from './containers/ProductToEditContainer/ProductToEditContainer.jsx';
import CheckoutContainer from './containers/CheckoutContainer/CheckoutContainer.jsx';
import EditProfileContainer from './containers/EditProfileContainer/EditProfileContainer.jsx';
import VerifyEmailContainer from './containers/VerifyEmailContainer/VerifyEmailContainer.jsx';
import OrderDetailContainer from './containers/OrdersDetailContainer/OrderDetailContainer.jsx';
import BuyOrdersContainer from './containers/BuyOrdersContainer/BuyOrdersContainer.jsx';
import FinishBuyContainer from './containers/FinishBuyContainer/FinishBuyContainer.jsx';

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
            <Route path='/add-product' element={<FormAddProductContainer /> }></Route>
            <Route path='/edit-product' element={<EditProductsContainer /> }></Route>
            <Route path='/edit-product/:id' element={<ProductToEditContainer/> }></Route>
            <Route path='/checkout' element={<CheckoutContainer /> }></Route>
            <Route path='/edit-profile' element={<EditProfileContainer /> } ></Route>
            <Route path='/verify-email/:email' element={<VerifyEmailContainer /> }></Route>
            <Route path='/order-detail/:id' element={<OrderDetailContainer /> }></Route>
            <Route path='/orders' element={<BuyOrdersContainer />} ></Route>
            <Route path='/finish-buy/:medioDePago' element={<FinishBuyContainer/>} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
