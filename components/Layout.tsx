import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = '' }: Props) => {
  return (
    <>
      <Head>
        {title ? (
          <title>{title} | Jiajun Yan</title>
        ) : (
          <title>Jiajun Yan</title>
        )}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
