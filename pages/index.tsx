import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="dark overflow-hidden">
      <Head>
        <title>Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar></Sidebar>
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
