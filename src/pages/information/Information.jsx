import styles from './information.module.scss';
import H1 from '../../components/elements/H1.jsx';

function Information() {
  return (
    <div className={styles.information__page}>
      <H1 className="white" props="Информация" />
    </div>
  );
}
export default Information;
