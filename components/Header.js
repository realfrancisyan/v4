import styles from '../styles/Header.module.css';
import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} className={styles.logo} />
    </header>
  );
};

export default Header;
