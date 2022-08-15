import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className='wrapper'>
      <Head>
        <meta name='description' content="Baran Batur'un kişisel websitesi" />
        <meta
          name='google-site-verification'
          content='l1fhO9meJ2Mp9-ax8hseP7rxtAjZx9RIIk58ya-Dh3k'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Baran Batur</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}
