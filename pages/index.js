import { Component } from "react"
import dynamic from "next/dynamic"
import Masonry from "react-masonry-component"
import { Columns, Section } from "react-bulma-components"
import MediaQuery from "react-responsive"
import { FaPlus } from "react-icons/fa"
import get from "lodash/get"
import shuffle from 'lodash/shuffle'
import classnames from "classnames"

import { MEDIA_QUERY } from "utils/responsive"
import Layout from "components/Layout"
import ImageReplace from "components/ImageReplace"
import testimonials from "content/testimonials"

import "styles/index.scss"

const Testimonial = dynamic(import("components/Testimonial/index"))

class Index extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()
    this.state = { isContentOpen: true, wrapperWidth: null }
    this.toggleContent = this.toggleContent.bind(this)
  }

  componentDidMount() {
    this.setWrapperWidth()
  }

  setWrapperWidth() {
    const wrapperWidth = get(this.wrapper, "current.offsetWidth")
    this.setState({ wrapperWidth })
  }

  toggleContent(event) {
    event.preventDefault()
    const { isContentOpen } = this.state
    this.setState({ isContentOpen: !isContentOpen }, this.setWrapperWidth)
  }

  get renderPlusBt() {
    const { isContentOpen } = this.state
    return (
      <MediaQuery query={MEDIA_QUERY.DESKTOP}>
        <a
          href="#"
          className={classnames({ "plus-bt": true, floating: !isContentOpen })}
          onClick={this.toggleContent}
        >
          <FaPlus />
        </a>
      </MediaQuery>
    )
  }

  get renderTestimonials() {
    const { wrapperWidth } = this.state
    return shuffle(testimonials).map((testimonial, index) =>
      <Testimonial key={index} {...testimonial} width={wrapperWidth} />
    )
  }

  render() {
    const { isContentOpen } = this.state
    return (
      <Layout>
        <Columns gapless>
          {isContentOpen
            ? <Columns.Column className="side-content">
                <Section>
                  <div className="content">
                    <ImageReplace className="slogan" src="slogan.png">
                      <h2>Eu uso</h2>
                      <h3>Cosmética Consciente</h3>
                    </ImageReplace>
                    <p style={{ margin: "2em 0" }}>
                      Descubra o que motiva as pessoas a usar nossos cosméticos
                      - Vida Natural
                    </p>
                    {this.renderPlusBt}
                  </div>
                </Section>
              </Columns.Column>
            : this.renderPlusBt}
          <Columns.Column className="masonry-wrapper">
            <div ref={this.wrapper}>
              <Masonry
                className="testimonials-grid"
                children={this.renderTestimonials}
                options={{ transitionDuration: 500 }}
              />
            </div>
          </Columns.Column>
        </Columns>
      </Layout>
    )
  }
}

export default Index
