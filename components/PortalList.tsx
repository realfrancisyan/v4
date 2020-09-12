import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ArrowIcon from '../assets/images/arrow.svg';

type Portal = {
  name: string;
  desc: string;
  url: string;
};

type Props = {
  title: string;
  portalList: Portal[];
};

const PortalList: React.FC<Props> = ({ title = '', portalList }: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.portalContainer}>
        <ul className={styles.portalListContainer}>
          {portalList.map((portal: Portal) => {
            return (
              <li key={portal.name} className={styles.portalList}>
                <h3 className={styles.portalLinkTitle}>
                  <Link
                    href={portal.url}
                    passHref={portal.url.includes('http')}
                  >
                    <a
                      className={styles.portalLink}
                      key={portal.name}
                      target={portal.url.includes('http') ? '_blank' : '_self'}
                    >
                      <span className={styles.portalLinkWrapper}>
                        {portal.name}
                        <img
                          src={ArrowIcon}
                          className={styles.portalLinkIcon}
                        />
                      </span>
                    </a>
                  </Link>
                </h3>
                <p className={styles.portalDesc}>{portal.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PortalList;
