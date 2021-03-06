import React from 'react';
import BaaS from 'curve-js-sdk';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.css';

BaaS.init({ host: 'https://api.curve.to' });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
