import React from 'react';
import BaaS from 'curve-js-sdk';
import ReactMarkdown from 'react-markdown';
import { NextPage, NextPageContext } from 'next';
import moment from 'moment';
import Layout from '../../components/Layout';
import styles from '../../styles/Posts.module.css';
import CodeBlock from '../../components/CodeBlock';

type Post = {
  id: string;
  description: string;
  title: string;
  body: string;
  type: number;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  post: Post;
};

type ImageProps = {
  src: string;
  title: string;
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

const Page: NextPage<Props> = ({ post }: Props) => {
  return (
    <Layout title={post.title}>
      <section className={styles.container}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.date}>
          {moment(post.createdAt).format('YYYY年M月D日')}
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

  return { post: data };
};

export default Page;
