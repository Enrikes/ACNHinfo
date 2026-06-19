import styles from './Header.module.css';
export default function Header({}) {
  return (
    <nav>
      <ul>
        <li>
          <h1>ACNHinfo</h1>
        </li>
        <ul className={styles.navigation}>
          <li>
            <a>Creatures</a>
          </li>

          <li>
            <a>Fish</a>
          </li>
          <li>
            <a>Sea Creatures</a>
          </li>
          <li>
            <a>Villagers</a>
          </li>
        </ul>
        <li>
          <p>Profile</p>
        </li>
      </ul>
    </nav>
  );
}
