import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Display Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Display my activity stats" />
        <p className="description">
          A simple app to work with the Tidbyt Display
        </p>
      </main>

      <Footer />
    </div>
  )
}
