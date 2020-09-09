import React from 'react';
import BaaS from 'curve-js-sdk';
import moment from 'moment';
import Layout from '../components/Layout';
import styles from '../styles/Dev.module.css';
import ArrowIcon from '../assets/images/arrow.svg';

type Post = {
  id: string;
  title: string;
  type: number;
  createdAt: string;
  description: string;
};

type PostByMonth = {
  month: string;
  data: Post[];
};

type Tag = {
  name: string;
  type: number;
};

type Tags = {
  [key: string]: string;
};

type Props = {
  posts: PostByMonth[];
  tags: Tags;
};

const Home: React.FC<Props> = ({ posts = [], tags = {} }: Props) => {
  return (
    <Layout title="前端博客">
      <section className={styles.container}>
        <div className={styles.posts}>
          {posts.map((postByMonth) => {
            return (
              <div className={styles.category} key={postByMonth.month}>
                <h2 className={styles.categoryTitle}>{postByMonth.month}</h2>
                <div className={styles.postWrapper}>
                  {postByMonth.data.map((post) => {
                    return (
                      <div className={styles.post} key={post.id}>
                        <div className={styles.titleWrapper}>
                          <h2 className={styles.title}>{post.title}</h2>
                          <img src={ArrowIcon} className={styles.linkIcon} />
                        </div>
                        <p className={styles.date}>
                          {moment(post.createdAt).format('YYYY年M月D日')} ·{' '}
                          {tags[post.type]}
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
              {Object.keys(tags).map((type) => {
                return (
                  <p
                    className={`${styles.tag} ${
                      type === '-1' && styles.tagActive
                    }`}
                    key={type}
                  >
                    {tags[type]}
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
  const result = posts.map((post) => {
    post.month = moment(post.createdAt).format('YYYY年M月');
    return post;
  });

  const newPosts = [];
  result.forEach((post) => {
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

  return mapMonth(response.data.data);
};

const getTags = async () => {
  const tags = new BaaS.Collection('devTags');
  const response = await tags.get({ exclude: ['createdAt'] });
  const { data } = response.data;

  data.push({ name: '全部', type: -1 });
  const result = data.reduce((final: Tags, tag: Tag) => {
    final[tag.type] = tag.name;
    return final;
  }, {});
  return result;
};

Home.getInitialProps = async () => {
  const posts = await getPosts();
  const tags = await getTags();

  return { posts, tags };
};

export default Home;
