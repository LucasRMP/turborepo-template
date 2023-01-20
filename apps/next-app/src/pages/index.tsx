import Head from 'next/head'
import { Button } from 'ui'

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Monorepo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Button>Hello World</Button>
    </main>
  </div>
)

export default Home
