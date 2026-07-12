import styles from './profile.module.css';
export default function Profile({ name, catchPhrase, price, location, image }) {
  console.log(name);
  return (
    <div className={styles.detailCard}>
      <div className={styles.imageSection}>
        <div className={styles.imageFrame}>
          <img className={styles.image} src={image} />
        </div>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.statusContainer}></div>
        <div className={styles.creatureName}>
          <h1>{name}</h1>
        </div>
        <div className={styles.catchPhrase}>
          <p>{catchPhrase}</p>
        </div>
        <div className={styles.priceSection}></div>
      </div>
    </div>
  );
}
