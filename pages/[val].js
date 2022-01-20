import Head from 'next/head';

export default function Home({ val }) {
  return (
    <div>
      <Head>

      </Head>
      
      ISR
    </div>
  );
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

export const getStaticProps = async () => {
  const val = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`isr`);
    }, 4000);
  });
  
  console.log(val);
  return {
    props: {
      val,
      fallback: true
    },
    revalidate: 1
  };
};
