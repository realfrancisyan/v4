import React from 'react';
import Layout from '../components/Layout';
import PortalList from '../components/PortalList';
import styles from '../styles/Home.module.css';
import Background from '../assets/images/background.jpg';
import CurveIcon from '../assets/images/curve.png';
import RightArrowIcon from '../assets/images/arrow-right.svg';
import Project1 from '../assets/images/project1.jpg';
import Project2 from '../assets/images/project2.jpg';
import Project3 from '../assets/images/project3.jpg';
import constants from '../constants';

const Page: React.FC = () => {
  return (
    <Layout title="Home">
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
          Curve 旨在简化小型 Web 项目中后端常见的 CRUD
          操作，从而前端不再需要依赖后端新增特定接口才能获取数据。通过自托管
          Curve，再也无须把自己的数据交托给第三方服务商，安全性更高。配合&nbsp;
          <a href="/" className={styles.curve}>
            Curve JS SDK
          </a>
          ，前端能更方便地调用接口数据，大大提供开发效率。
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.hire}>
          <span className={styles.available}>Available for Hire</span>
          <span className={styles.bubble}>
            接受前端微信小程序、PC 端、H5 等短期或长期项目合作。查看更多
            <img src={RightArrowIcon} className={styles.rightArrow} />
          </span>
        </h2>
      </section>

      <PortalList
        title="我的想法"
        portalList={constants.portalList}
      ></PortalList>

      <section className={styles.section}>
        <div className={styles.capabilities}>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>核心技能</h2>
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

      <PortalList
        title="有用链接"
        portalList={constants.usefulLinks}
      ></PortalList>

      <section className={styles.section}>
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
    </Layout>
  );
};

export default Page;
