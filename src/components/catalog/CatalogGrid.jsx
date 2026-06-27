import { useNavigate } from 'react-router';
import styles from './Catalog.module.css';

export default function CatalogGrid({ item, basePath }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log('I have been clicked');
    navigate(`/${basePath}/${id}`);
  };
  const cards = item.map((item) => {
    return (
      <div
        className={styles.itemContainer}
        onClick={() => {
          handleClick(item.name);
        }}
      >
        <div className={styles.itemCard}>
          <div className={styles.itemIcon}>
            <img src={item.iconImage} />
          </div>
        </div>
        <div className={styles.itemName}>{item.name}</div>
      </div>
    );
  });
  return <div className={styles.container}>{cards}</div>;
}
