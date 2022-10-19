import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import styles from './styles.module.scss';
interface PostProps{
  post: {
    slug: string
  }
}
export default function Enem() {
  return (
    <>
    <Head>
      <title>Enem | Brain</title>
    </Head>
    <p>teste</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({req})

  if (!session?.activeSubscription){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }
const post ={

}
  return {
    props: {
      post,
    }
   }
}