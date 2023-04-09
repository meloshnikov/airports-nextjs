import Navbar from '../Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.wrapper}>
    <Navbar />
  </header>
);

export default Header;
