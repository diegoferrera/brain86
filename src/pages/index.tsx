import  { GetStaticProps } from 'next'; 
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import  styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: String;
    amount: number;
  },
}

export default function Home({product}: HomeProps){
  return (
    <>
    <Head>
      <title>Home | Brain 86</title>
      </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Bem-Vindo</span>
        <h1>Tenha ajuda de outros <span>alunos </span>Entre no Brain 86</h1>
        <p>
          Cadastre-se e tenha acesso a plataforma<br/>
        <span>por {product.amount} mensal</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>

      <img src="/images/avatar.svg" alt="Garota Estudando" />
    </main>
    
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LZdRYCeGulJHQeQrsgUt5cf', {
    expand: ['product']
  })
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  };

  return {
      props: {
        product,
      },
      revalidate: 60 * 60 * 24, // 24 hours
  }
}