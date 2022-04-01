import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BasketIcon from './components/basketIcon/BasketIcon.jsx';
import HeaderList from './components/header/HeaderList.jsx';
import AccountPage from './components/pages/account-page/AccountPage';
import BasketPage from './components/pages/basket/BasketPage.jsx';
import Catalog from './components/pages/catalog/Catalog.jsx';
import ComeIn from './components/pages/come--in/ComeIn.jsx';
import Home from './components/pages/home/Home.jsx';
import Information from './components/pages/information/Information.jsx';
import ProductPage from './components/pages/product--page/ProductPage.jsx';
import { menu, pages } from './data/data.js';
import ProtectedRoutes from './router/ProtectedRoutes.jsx';
import './scss/index.scss';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
