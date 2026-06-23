import styles from './Catalog.module.css';

export default function CatalogGrid({ data }) {
  const cards = data.map((item) => {
    return (
      <div className={styles.itemContainer}>
        <div className={styles.itemCard}>
          <div className={styles.itemIcon}><img src={item.iconImage}/></div>
        </div>
        <div className={styles.itemName}>{item.name}</div>
      </div>
    );
  });
  return <div className={styles.container}>{cards}</div>;
}
