import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import ArrowIcon from '../assets/images/arrow.svg';

const portalList = [
  {
    name: '前端博客',
    desc: '用于总结自己在工作和个人项目遇到的知识点及难题。',
  },
  { name: '玩物体验', desc: '个人对最近购买的产品进行开箱或体验。' },
  {
    name: '游戏试玩',
    desc: '将自己最近常玩的游戏写成几篇文章。有较高的个人偏向性。',
  },
  {
    name: '游戏回放',
    desc: '在这里你可以观看我平时的游戏回放。录像均存放在 YouTube。',
  },
  { name: 'Instagram', desc: '我的个人 Instagram。不定期更新。' },
  {
    name: '旅游档案馆',
    desc: '记录我过往游历过的地方。大部分图片于留学期间拍摄。',
  },
  {
    name: '常用 iPhone Apps',
    desc: '一个展示我经常使用的 iPhone Apps 的列表。会按时间推移不断修改。',
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <section className={styles.portal}>
        <div className={styles.portalContainer}>
          <h2 className={styles.portalTitle}>我的想法</h2>
          <ul className={styles.portalListContainer}>
            {portalList.map((portal) => {
              return (
                <li key={portal.name} className={styles.portalList}>
                  <h3 className={styles.portalLinkTitle}>
                    <a href="/" className={styles.portalLink} key={portal.name}>
                      <span className={styles.portalLinkWrapper}>
                        {portal.name}
                        <img
                          src={ArrowIcon}
                          className={styles.portalLinkIcon}
                        />
                      </span>
                    </a>
                  </h3>
                  <p className={styles.portalDesc}>{portal.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
