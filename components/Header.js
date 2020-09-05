import styles from '../styles/Header.module.css';
import Logo from '../assets/images/logo.svg';
import GitHubIcon from '../assets/images/github.svg';
import InstagramIcon from '../assets/images/instagram.svg';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} className={styles.logo} />

      <ul className={styles.links}>
        <li>
          <a href="https://github.com/realfrancisyan">
            <img src={GitHubIcon} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/realfrancisyan">
            <img src={InstagramIcon} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
