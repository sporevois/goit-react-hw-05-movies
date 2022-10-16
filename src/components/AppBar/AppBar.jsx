import { NavLink } from 'react-router-dom';
import styles from '../AppBar/AppBar.module.css';
const AppBar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <NavLink
          className={styles.navItem}
          activeClassName={styles.activeLink}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={styles.navItem}
          activeClassName={styles.activeLink}
          to="movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
