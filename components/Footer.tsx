import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import Logo from '../assets/images/logo-white.svg';
import GitHubIcon from '../assets/images/github.svg';
import InstagramIcon from '../assets/images/instagram.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <a>
              <img src={Logo} className={styles.logo} />
            </a>
          </Link>
          <p className={styles.coop}>如对我的项目有兴趣，或想与我合作，</p>
          <p className={styles.coop}>
            欢迎随时<a href="/">联系或聘用</a>。
          </p>
        </div>

        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/realfrancisyan"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubIcon} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/realfrancisyan"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstagramIcon} />
            </a>
          </li>
        </ul>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Jiajun Yan. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
