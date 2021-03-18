import Head from 'next/head'
import nike from '~/assets/nike.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <img src={nike} alt="aaaa" />
      <h1>Hello World</h1>
    </>
  )
}
