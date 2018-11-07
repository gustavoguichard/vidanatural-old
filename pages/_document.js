import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render() {
    const title = 'Vida Natural | Cosmética Consciente'
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="Consciêcia talvez seja a palavra mais importante no nosso vocabulário. E, com o tempo, você vai perceber que ela está presente nas nossas iniciativas e, também, na forma como nos relacionamos com as pessoas, produzimos e distribuímos os nossos cosméticos."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={title} />
          <meta http-equiv="Content-Language" content="pt-br" />
          <title>{title}</title>
          {this.helmetHeadComponents}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
