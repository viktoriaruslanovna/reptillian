import styles from './home.module.scss';
import eublefar from './media/eublefar.jpg';
import Catalog from '../catalog/Catalog';

function Home({ products, searchQuery, setSearchQuery, create, props }) {
  return (
    <div className="home">
      <div className={styles.preview}>
        <div className={styles.preview__768px}>
          <img className={styles.preview__768px__img} src={eublefar} alt="" />
        </div>
        <p className={styles.preview__description__768px}>
          Пятнистые эублефары - сравнительно некрупные ящерицы, 25-30 см. Свое
          название они получили благодаря характерному пятнистому окрасу.
        </p>
        <p className={styles.preview__description}>
          Пятнистые эублефары - сравнительно некрупные ящерицы, длина их тела
          вместе с хвостом достигает 25-30 см. Свое название они получили
          благодаря характерному пятнистому окрасу. Помимо пятен сходство с
          грозным хищником эублефару придают его удивительные глаза: по-кошачьи
          удлиненные и необычайно выразительные для рептилии
        </p>
      </div>
      <Catalog
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        products={products}
        create={create}
        props={props}
      />
    </div>
  );
}
export default Home;
