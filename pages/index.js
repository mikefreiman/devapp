import Head from 'next/head'
// import Image from 'next/image'
import Chart from '../components/chart'
import { Libre_Franklin } from '@next/font/google'
import styles from '../styles/Home.module.css' 
const franklin = Libre_Franklin({ subsets: ['latin'] })
const cx = (...classNames) => classNames.join(' ');

export default function Home() {
  return (
    <>
      <Head>
      <title>Mike Freiman - Front-end Web Developer &amp; UX Designer - Madison, WI</title>
        <meta name="description" content="I'm Mike Freiman a front-end web developer &amp; ux designer."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={franklin.className}>
            <h1 className={styles.fluidType}>I build things</h1>
            <Chart/>

        </div>
    </>
  )
}
