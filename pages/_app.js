import App, { Container } from 'next/app'
import { register, unregister } from 'next-offline/runtime'
import Head from 'next/head'
import Router from 'next/router'
import { initGA, logPageView } from 'utils/analytics'

export default class VidaNatural extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    if (process.browser) {
      register()
    }
    initGA()
    logPageView()
    Router.router.events.on('routeChangeComplete', logPageView)
  }

  componentWillMount() {
    if (process.browser) {
      unregister()
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const title = 'Vida Natural | Cosmética Consciente'
    return (
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
