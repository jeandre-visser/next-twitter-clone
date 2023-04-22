import Modal from '@/components/Modal';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal isOpen title='Test Modal' actionLabel='Submit' />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
