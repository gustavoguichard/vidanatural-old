import { Component } from "react"
import Helmet from 'react-helmet'

import Layout from "components/Layout"
import ImageReplace from "components/ImageReplace"

import "styles/home.scss"

class Home extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <body class="home-page" />
        </Helmet>
        <div className="home-bg">
          <ImageReplace src="logo-white.png" className="home-logo" retina>
            <h1>Vida Natural</h1>
          </ImageReplace>
        </div>
      </Layout>
    )
  }
}

export default Home
