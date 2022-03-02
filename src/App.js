import { useState, useMemo, useEffect } from 'react';
import './App.scss';
import { AuthContext } from './context/index.js';
import { LockContext } from './context/index.js';
import { basketStorage } from './storage/basketStorage.js';
import HeaderList from './components/header/HeaderList.jsx';
import BasketIcon from './components/basketIcon/BasketIcon.jsx';
import Home from './components/pages/home/Home.jsx';
import ComeIn from './components/pages/come--in/ComeIn.jsx';
import Catalog from './components/pages/catalog/Catalog.jsx';
import BasketPage from './components/pages/basket/BasketPage.jsx';
import ProductPage from './components/pages/product--page/ProductPage.jsx';
import Information from './components/pages/information/Information.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import { products, pages, menu } from './data/data.js';

function App() {
  const [auth, setAuth] = useState('');
  const [lock, setLock] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const [lengthBasket, setLengthBasket] = useState(basketStorage.get().length);

  const location = useLocation();
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
    <AuthContext.Provider value={{ auth, setAuth }}>
      <LockContext.Provider value={{ lock, setLock }}>
        <div className="App">
          <HeaderList menu={menu} />
          <BasketIcon length={lengthBasket} />
          <div className="wrapper">
            <Routes>
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
                path="/"
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

              <Route
                path="/productpage/:id"
                element={<ProductPage create={createBasketProduct} />}
              />

              <Route path="/login" element={<ComeIn props={pages.logIn} />} />

              <Route path="/signup" element={<ComeIn props={pages.signUp} />} />

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
      </LockContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
