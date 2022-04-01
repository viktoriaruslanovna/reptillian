import { useEffect, useState } from 'react';
import styles from './search-input.module.scss';
import Input from '../elements/Input';
import { products } from '../../data/data';

function SearchInput({ setSearchProducts }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      setSearchProducts(
        products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setSearchProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <div className={styles.search}>
      <Input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={styles.search__input}
        placeholder="Поиск"
      />
    </div>
  );
}

export default SearchInput;
