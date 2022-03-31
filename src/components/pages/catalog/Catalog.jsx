import styles from './catalog.module.scss';
import Products from './Products.jsx';
import H1 from '../../elements/H1.jsx';
import Input from '../../elements/Input.jsx';

function Catalog({ products, props, create, searchQuery, setSearchQuery }) {
  return (
    <div className={styles.catalog}>
      <H1 className="white" props={props.title} />
      <div className={styles.search}>
        <Input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={styles.search__input}
          placeholder="Поиск"
        />
      </div>
      <div className={styles.catalog__products}>
        {products.map(products => (
          <Products product={products} key={products.id} create={create} />
        ))}
      </div>
    </div>
  );
}
export default Catalog;
