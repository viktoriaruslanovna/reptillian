import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BasketIcon from './components/basket-icon/BasketIcon';
import HeaderList from './components/header/HeaderList.jsx';
import AccountPage from './pages/account-page/AccountPage';
import BasketPage from './pages/basket/BasketPage.jsx';
import Catalog from './pages/catalog/Catalog.jsx';
import ComeIn from './pages/come-in/ComeIn.jsx';
import Home from './pages/home/Home.jsx';
import Information from './pages/information/Information.jsx';
import ProductPage from './pages/product-page/ProductPage.jsx';
import { menu, pages } from './data/data.js';
import ProtectedRoutes from './router/ProtectedRoutes.jsx';
import './scss/index.scss';
import { useSelector } from 'react-redux';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { user } = useSelector(state => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="App">
      <HeaderList menu={menu} />
      <BasketIcon />
      <div className="wrapper">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<AccountPage />} />
          </Route>

          <Route path="/*" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/catalog" element={<Catalog />} />

          <Route path="/login" element={<ComeIn props={pages.logIn} />} />

          <Route path="/signup" element={<ComeIn props={pages.signUp} />} />

          <Route path="/productpage/:id" element={<ProductPage />} />

          <Route path="/basket" element={<BasketPage />} />

          <Route path="/information" element={<Information />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
