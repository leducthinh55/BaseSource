import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import Layout  from '../components/layout';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  isDefaultLayout?: (page: ReactElement) => boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const isDefaultLayout = Component.isDefaultLayout;
  if (isDefaultLayout) {
    return <Component {...pageProps} />
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
