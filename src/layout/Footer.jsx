import styles from './Footer.module.css';
export default function Footer({}) {
  return (
    <footer>
      <div>
        <h1 className={styles.title}>ACNHinfo</h1>
      </div>
      <div>
        <p className={styles.copyright}>© 2026 Enrique Copyright. All rights reversed.</p>
      </div>
      <div>Support me!</div>
    </footer>
  );
}
