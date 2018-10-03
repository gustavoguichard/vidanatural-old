import { Component } from 'react'
import dynamic from 'next/dynamic'
import Masonry from 'react-masonry-component'
import { Columns, Section } from 'react-bulma-components'
import MediaQuery from 'react-responsive'
import { FaPlus } from 'react-icons/fa'
import get from 'lodash/get'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import classnames from 'classnames'

import { MEDIA_QUERY } from 'utils/responsive'
import Home from 'components/Home'
import Layout from 'components/Layout'
import Slogan from 'components/Slogan'
import testimonials from 'content/testimonials'

import 'styles/index.scss'

const Testimonial = dynamic(import('components/Testimonial/index'))

class Index extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()
    this.testimonials = shuffle(testimonials)
    this.state = {
      isContentOpen: true,
      wrapperWidth: null,
      testimonialsNumber: 8,
    }
    this.toggleContent = this.toggleContent.bind(this)
  }

  componentDidMount() {
    this.setWrapperWidth()
  }

  setWrapperWidth() {
    const wrapperWidth = get(this.wrapper, 'current.offsetWidth')
    this.setState({ wrapperWidth })
  }

  toggleContent(number, isMobile) {
    return event => {
      event.preventDefault()
      const testimonialsNumber = this.state.testimonialsNumber + number
      const isContentOpen = isMobile || !this.state.isContentOpen
      this.setState(
        { isContentOpen, testimonialsNumber },
        this.setWrapperWidth,
      )
    }
  }

  renderPlusBt(number = Infinity, isMobile) {
    const { isContentOpen } = this.state
    return (
      <a
        href="#"
        title={"Mais depoimentos"}
        className={classnames({ 'plus-bt': true, floating: !isContentOpen })}
        onClick={this.toggleContent(number, isMobile)}
      >
        <FaPlus />
      </a>
    )
  }

  get isShowingAll() {
    return this.state.testimonialsNumber >= this.testimonials.length
  }

  get renderTestimonials() {
    const { wrapperWidth, testimonialsNumber } = this.state
    const testimonialsArray = take(this.testimonials, testimonialsNumber)
    return testimonialsArray.map((testimonial, index) =>
      <Testimonial key={index} {...testimonial} width={wrapperWidth} />,
    )
  }

  render() {
    const { isContentOpen, testimonialsNumber } = this.state
    return (
      <Layout>
        <Home />
        <Columns gapless>
          {isContentOpen
            ? <Columns.Column className="side-content">
                <Section>
                  <div className="content">
                    <Slogan />
                    <p style={{ margin: '2em 0' }}>
                      Descubra o que motiva as pessoas a usar nossos cosméticos
                      - Vida Natural
                    </p>
                    <MediaQuery query={MEDIA_QUERY.DESKTOP}>
                      {this.renderPlusBt()}
                    </MediaQuery>
                  </div>
                </Section>
              </Columns.Column>
            : this.renderPlusBt()}
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
        {this.isShowingAll ||
          <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
            <Section className="more-testimonials">
              <div className="content">
                <p>Ver mais depoimentos</p>
                {this.renderPlusBt(testimonialsNumber, true)}
              </div>
            </Section>
          </MediaQuery>}
      </Layout>
    )
  }
}

export default Index
