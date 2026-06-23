import styles from './Catalog.module.css';
import mockFish from '../../data/mockFish';

export default function CatalogGrid({}) {
  const cards = mockFish.map((item) => {
    return (
      <div className={styles.itemContainer}>
        <div className={styles.itemCard}>
          <div className={styles.itemIcon}>{item.icon}</div>
        </div>
        <div className={styles.itemName}>{item.name}</div>
      </div>
    );
  });
  console.log(mockFish);
  return <div className={styles.container}>{cards}</div>;
}
