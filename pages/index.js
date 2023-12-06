import Head from 'next/head'
// import Image from 'next/image'
import Chart from '../components/chart'
import Card from '../components/card'

export default function Home() {
  return (
    <>
      <Head>
      <title>Mike Freiman - Front-end Web Developer &amp; UX Designer - Madison, WI</title>
        <meta name="description" content="I'm Mike Freiman a front-end web developer &amp; ux designer."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <h1 className="fluid-type font-semibold">I&apos;m a Web Developer</h1>
            <Chart/>
            <Card/>
        </div>
    </>
  )
}
