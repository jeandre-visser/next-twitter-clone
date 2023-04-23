import Image from 'next/image';
import Header from '@/components/Header';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <Header label='Home' />
      <Form placeholder="What's on your mind?" />
    </>
  );
}
