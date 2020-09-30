import React from 'react';
import BaaS from 'curve-js-sdk';
import ReactMarkdown from 'react-markdown';
import { NextPage, NextPageContext } from 'next';
import moment from 'moment';
import readingTime from 'reading-time';
import Layout from '../../components/Layout';
import styles from '../../styles/Posts.module.css';
import CodeBlock from '../../components/CodeBlock';
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WeiboShareButton,
  EmailIcon,
  TwitterIcon,
  FacebookIcon,
  WeiboIcon,
} from 'react-share';

type Post = {
  id: string;
  description: string;
  title: string;
  body: string;
  type: number;
  createdAt: string;
  updatedAt: string;
};

type Stats = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};

type Props = {
  post: Post;
  stats: Stats;
};

type ImageProps = {
  src: string;
  title: string;
};

const ShareComponent = ({ post }: Post) => {
  const url = `https://jiajunyan.com/post/${post.id}`;
  return (
    <>
      <FacebookShareButton
        url={url}
        quote={post.title}
        className={styles.shareButton}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} className={styles.shareButton}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton url={url} className={styles.shareButton}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <WeiboShareButton url={url} className={styles.shareButton}>
        <WeiboIcon size={32} round />
      </WeiboShareButton>
    </>
  );
};

const ImageComponent = ({ src, title }: ImageProps) => {
  const urlToReplace = 'auracloudapp.oss-cn-shenzhen.aliyuncs.com';
  const url = 'assets.auracloudapp.com';
  const image = { src: src.replace(urlToReplace, url) };

  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      style={{ outline: 'none' }}
    >
      <img className="post-img" src={image.src} alt={title} />
    </a>
  );
};

const LinkComponent = (props: any) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children[0].props.value}
    </a>
  );
};

const Page: NextPage<Props> = ({ post, stats }: Props) => {
  return (
    <Layout title={post.title}>
      <div className={styles.parent}>
        <aside className={styles.aside}>
          <div className={styles.share}>
            <ShareComponent post={post} />
          </div>
        </aside>
        <section className={styles.container}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.date}>
            {moment(post.createdAt).format('YYYY年M月D日')} · {stats.text}
          </p>

          <article className={`${styles.markdown} ${styles.article}`}>
            <ReactMarkdown
              source={post.body}
              renderers={{
                code: CodeBlock,
                image: ImageComponent,
                link: LinkComponent,
              }}
            />
          </article>
        </section>
      </div>
    </Layout>
  );
};

const getPost = async (id: string | string[]) => {
  const dev = new BaaS.Collection('dev');
  const response = await dev.getDocument(id);
  return response.data.data;
};

Page.getInitialProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const data = await getPost(id);
  const stats = readingTime(data.body, { wordsPerMinute: 80 });

  return { post: data, stats };
};

export default Page;
