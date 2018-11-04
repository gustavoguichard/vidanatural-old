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

  get helmetJsx() {
    const title = 'Vida Natural | Cosmética Consciente'
    return (
      <Helmet
        htmlAttributes={{ lang: 'pt-BR' }}
        title={title}
        meta={[
          {
            name: 'description',
            content: 'Consciêcia talvez seja a palavra mais importante no nosso vocabulário. E, com o tempo, você vai perceber que ela está presente nas nossas iniciativas e, também, na forma como nos relacionamos com as pessoas, produzimos e distribuímos os nossos cosméticos.',
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { property: 'og:title', content: title },
        ]}
      />
    )
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
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
