import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Consciêcia talvez seja a palavra mais importante no nosso vocabulário. E, com o tempo, você vai perceber que ela está presente nas nossas iniciativas e, também, na forma como nos relacionamos com as pessoas, produzimos e distribuímos os nossos cosméticos."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:title"
            content="Vida Natural | Cosmética Consciente"
          />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"
            rel="stylesheet"
          />
          <script src="https://wchat.freshchat.com/js/widget.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
