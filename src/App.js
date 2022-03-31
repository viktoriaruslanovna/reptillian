import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { menu, pages, products } from './data/data.js';
import ProtectedRoutes from './router/ProtectedRoutes.jsx';
import './scss/index.scss';
import { basketStorage } from './storage/basketStorage.js';
import { userStorage } from './storage/userStorage';

function App() {
  const { isAuth } = useSelector(state => state.auth);
  const [searchQuery, setSearchQuery] = useState('');
  const [lengthBasket, setLengthBasket] = useState(basketStorage.get().length);
  const location = useLocation();

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const searchProducts = useMemo(() => {
    if (searchQuery) {
      return products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return products;
  }, [searchQuery, products]);

  const createBasketProduct = product => {
    let arr = [];
    basketStorage.get().map(basket => arr.push(basket.id));

    const basketProduct = [
      {
        ...product,
        count: 1,
      },
    ];

    if (arr.includes(basketProduct[0].id)) {
      alert('Это животное имеется лишь в одном экземпляре');
    } else {
      const mergedArray = basketProduct.concat(basketStorage.get());
      basketStorage.set(mergedArray);
      setLengthBasket(basketStorage.get().length);
    }
  };

  return (
    <div className="App">
      <HeaderList menu={menu} />
      <BasketIcon length={lengthBasket} />
      <div className="wrapper">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<AccountPage />} />
          </Route>

          <Route path="/*" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Home
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                products={searchProducts}
                props={pages.сatalog}
                create={createBasketProduct}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <Catalog
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                products={searchProducts}
                props={pages.сatalog}
                create={createBasketProduct}
              />
            }
          />

          <Route path="/login" element={<ComeIn props={pages.logIn} />} />

          <Route path="/signup" element={<ComeIn props={pages.signUp} />} />

          <Route
            path="/productpage/:id"
            element={<ProductPage create={createBasketProduct} />}
          />

          <Route
            path="/basket"
            element={
              <BasketPage
                setLengthBasket={setLengthBasket}
                basketStorage={basketStorage}
              />
            }
          />
          <Route path="/information" element={<Information />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
