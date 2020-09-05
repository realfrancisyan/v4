import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import ArrowIcon from '../assets/images/arrow.svg';
import Background from '../assets/images/background.jpg';
import CurveIcon from '../assets/images/curve.png';


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

      <section className={styles.project}>
        <h2 className={styles.sectionTitle}>近期项目</h2>
        <div className={styles.projectWrapper}>
          <img src={Background} className={styles.projectImage} />
          <div className={styles.projectTitleWrapper}>
            <h2>
              <img src={CurveIcon} className={styles.projectTitle} />
            </h2>
            <p className={styles.projectSubTitle}>简单易用、可自托管的小型 Serverless 服务</p>
            <a href="/" className={styles.projectLink}>
              在 GitHub 查看项目
            </a>
          </div>
        </div>
        <div className={styles.projectDesc}>
          身认称报导别里则面切样，周技好地增过适张平，传劳霸响点抄专候弦。
          持管明但收面代万种间，着义他共参结参速地，消会居我果义府问。
          成史术们重其光次用京存，感上运个小海水选同，常酸屈场别丽伯决赤。
          白那半起北关地位况矿，生非是大阶金以最，族向束志皂来住眼。
        </div>
      </section>

      <section className={styles.portal}>
        <div className={styles.portalContainer}>
          <h2 className={styles.sectionTitle}>我的想法</h2>
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
