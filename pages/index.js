import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import ArrowIcon from '../assets/images/arrow.svg';
import Background from '../assets/images/background.jpg';
import CurveIcon from '../assets/images/curve.png';
import RightArrowIcon from '../assets/images/arrowright.svg';
import Project1 from '../assets/images/project1.jpg';
import Project2 from '../assets/images/project2.jpg';
import Project3 from '../assets/images/project3.jpg';

const portalList = [
  {
    name: '前端博客',
    desc: '用于总结自己在工作和个人项目遇到的知识点及难题。',
  },
  { name: '玩物体验', desc: '个人对最近购买的产品进行开箱或体验。' },
  {
    name: '游戏试玩',
    desc: '按自己最近常玩的游戏体验写成的文章。有较高的个人偏向性。',
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

const usefulLinks = [
  {
    name: 'Net Ninja',
    desc: '我学习前端知识的重要渠道。',
  },
  { name: 'Dribbble Likes', desc: '欣赏创意产品的地方。' },
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
            <p className={styles.projectSubTitle}>
              简单易用、可自托管的小型 Serverless 服务
            </p>
            <a href="/" className={styles.projectLink}>
              在 GitHub 查看该项目
            </a>
          </div>
        </div>
        <div className={styles.projectDesc}>
          Curve 的目标在于简化小型 Web 项目中后端常见的 CRUD
          操作，从而前端不再需要依赖后端新增特定接口才能获取数据。通过自托管
          Curve，再也无须把自己的数据交托给第三方服务商，安全性能更高。配合&nbsp;
          <a href="/" className={styles.curve}>
            Curve JS SDK
          </a>
          ，前端能更方便调用接口数据，大大提供开发效率。
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.hire}>
          <span className={styles.bubble}>Available for Hire</span>
          接受前端微信小程序、PC 端、H5 等短期或长期项目合作。查看更多
          <img src={RightArrowIcon} className={styles.rightArrow} />
        </h2>
      </section>

      <section className={styles.section}>
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

      <section className={styles.section}>
        <div className={styles.capabilities}>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>个人技能</h2>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>微信小程序</li>
              <li>H5 移动端</li>
              <li>Flutter</li>
              <li>Node 后端开发</li>
            </ul>
          </div>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>更多技能标签</h2>
            <p>
              Next.js, Mongodb, Sketch, Koa, Ant Design, Element UI, 自适应布局,
              VSCode, 蓝湖, 语雀, Linux, Git, SCSS, Webpack, DIV + CSS3, HTML5,
              ES6, 微信公众号, Promise, Async Await, NPM
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.portalContainer}>
          <h2 className={styles.sectionTitle}>有用链接</h2>
          <ul className={styles.portalListContainer}>
            {usefulLinks.map((portal) => {
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

      <section className={`${styles.section}`}>
        <h2 className={styles.sectionTitle}>个人项目</h2>
        <div className={styles.sideProjectWrapper}>
          <a href="/" className={styles.sideProject}>
            <img src={Project3} />
            <div>
              <p>Curve Serverless 配套 JS SDK</p>
              <h3>curve-js-sdk</h3>
            </div>
          </a>
          <a href="/" className={styles.sideProject}>
            <img src={Project2} />
            <div>
              <p>个人网站第四版本</p>
              <h3>v4</h3>
            </div>
          </a>
          <a href="/" className={styles.sideProject}>
            <img src={Project1} />
            <div>
              <p>又拍云云存储 Node.js 文件上传工具</p>
              <h3>node-upyun-plugin</h3>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
