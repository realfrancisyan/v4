import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title} | Jiajun Yan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
