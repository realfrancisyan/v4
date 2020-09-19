import React, { useState } from 'react';
import BaaS from 'curve-js-sdk';
import { NextPage } from 'next';
import Link from 'next/link';
import moment from 'moment';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import ArrowIcon from '../assets/images/arrow.svg';

type Post = {
  id: string;
  title: string;
  type: number;
  createdAt: string;
  description: string;
  month?: string;
};

type Tag = {
  name: string;
  type: number;
};

type Props = {
  posts: Post[];
  tags: Tag[];
};

const Page: NextPage<Props> = ({ posts = [], tags = [] }: Props) => {
  const [postsByMonth, setPostsByMonth] = useState(mapMonth(posts));
  const [currentTag, setCurrentTag] = useState(-1);

  const getPostsByTag = (tag: number) => {
    const postsByTag = posts.filter(post => post.type === tag);
    setPostsByMonth(mapMonth(tag === -1 ? posts : postsByTag));
    setCurrentTag(tag);
  };

  return (
    <Layout title="前端博客">
      <section className={styles.container}>
        <div className={styles.posts}>
          {postsByMonth.map(postByMonth => {
            return (
              <div className={styles.category} key={postByMonth.month}>
                <h2 className={styles.categoryTitle}>{postByMonth.month}</h2>
                <div className={styles.postWrapper}>
                  {postByMonth.data.map((post: Post) => {
                    return (
                      <div className={styles.post} key={post.id}>
                        <Link
                          href="/posts/[id]"
                          as={`/posts/${post.id}`}
                        >
                          <div className={styles.titleWrapper}>
                            <span className={styles.title}>
                              <a>{post.title}</a>
                            </span>
                            <img src={ArrowIcon} className={styles.linkIcon} />
                          </div>
                        </Link>
                        <p className={styles.date}>
                          {moment(post.createdAt).format('YYYY年M月D日')} ·{' '}
                          {tags.filter(tag => tag.type === post.type)[0].name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.tags}>
          <div className={styles.tagWrapper}>
            <h3 className={styles.categoryTitle}>分类查询</h3>
            <ul className={styles.tagList}>
              {tags.map((tag: Tag) => {
                return (
                  <p
                    className={`${styles.tag} ${
                      tag.type === currentTag && styles.tagActive
                    }`}
                    key={tag.type}
                    onClick={() => getPostsByTag(tag.type)}
                  >
                    {tag.name}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// 将文章列表按月分类
const mapMonth = (posts: Post[]) => {
  const result = posts.map(post => {
    post.month = moment(post.createdAt).format('YYYY年M月');
    return post;
  });

  const newPosts = [];
  result.forEach(post => {
    let index = -1;
    const alreadyExists = newPosts.some((newPost, j) => {
      if (post.month === newPost.month) {
        index = j;
        return true;
      }
    });
    if (!alreadyExists) {
      newPosts.push({
        month: post.month,
        data: [post],
      });
    } else {
      newPosts[index].data.push(post);
    }
  });
  return newPosts;
};

const getPosts = async () => {
  const dev = new BaaS.Collection('dev');
  const response = await dev.get({
    pageSize: 9999,
    exclude: ['body', 'updatedAt'],
  });

  return response.data.data;
};

const getTags = async () => {
  const tags = new BaaS.Collection('devTags');
  const response = await tags.get({ exclude: ['createdAt'] });
  const { data } = response.data;

  data.unshift({ name: '全部', type: -1 });
  return data;
};

Page.getInitialProps = async () => {
  const posts = await getPosts();
  const tags = await getTags();

  return { posts, tags };
};

export default Page;
