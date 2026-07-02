import { NavLink } from 'react-router';
import styles from './Header.module.css';
export default function Header({}) {
  return (
    <nav>
      <ul>
        <li>
          <h1 className={styles.title}>ACNHinfo</h1>
        </li>
        <ul className={styles.navigation}>
          <li>
            <NavLink
              to={'/insect'}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              insect
            </NavLink>
          </li>

          <li className={styles.tab}>
            <NavLink
              to={'/fish'}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              Fish
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/sea-creature'}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              Sea Creature
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/villager'}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
            >
              Villager
            </NavLink>
          </li>
        </ul>
        <li>
          <p>Profile</p>
        </li>
      </ul>
    </nav>
  );
}
