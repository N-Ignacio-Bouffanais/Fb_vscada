import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layouts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <Layout>
        <h1>Home</h1>
        </Layout>
      </main>

    </div>
  )
}
