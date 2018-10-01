import Head from 'next/head'
import Menu from './Menu'
import 'styles/main.scss'

const Layout = props => (
  <div className="app-wrapper">
    <Head>
      <title>Vida Natural | Cosmética Consciente</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
    </Head>
    <Menu />
    {props.children}
  </div>
)

export default Layout
