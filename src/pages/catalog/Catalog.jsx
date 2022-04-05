import { useState } from 'react';
import styles from './catalog.module.scss';
import { pages } from '../../data/data';
import Products from './Products.jsx';
import H1 from '../../components/elements/H1.jsx';
import SearchInput from '../../components/search-input/SearchInput';

function Catalog() {
  const [searchProducts, setSearchProducts] = useState([]);

  return (
    <div className={styles.catalog}>
      <H1 className="white" props={pages.сatalog.title} />
      <SearchInput setSearchProducts={setSearchProducts} />
      <div className={styles.catalog__products}>
        {searchProducts?.map(searchProduct => (
          <Products product={searchProduct} key={searchProduct.id} />
        ))}
      </div>
    </div>
  );
}
export default Catalog;
