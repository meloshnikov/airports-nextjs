import Heading from '../Heading';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.wrapper}>
    <Heading tag="h3" text="Created by meloshnikov" />
  </footer>
);

export default Footer;
