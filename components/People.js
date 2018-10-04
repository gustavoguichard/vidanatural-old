import { Component, Fragment } from 'react'
import dynamic from 'next/dynamic'
import { Columns, Section } from 'react-bulma-components'
import { Responsive } from 'utils/responsive'
import get from 'lodash/get'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'

import Slogan from 'components/Slogan'
import testimonials from 'content/testimonials'
import PlusButton from 'components/testimonials/PlusButton'

import 'styles/people.scss'

const Testimonial = dynamic(import('components/testimonials/Testimonial'))

class Index extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()
    this.testimonials = shuffle(testimonials)
    this.state = { isContentOpen: true, wrapperWidth: null, peopleLength: 8 }
    this.toggleContent = this.toggleContent.bind(this)
    this.setWrapperWidth = this.setWrapperWidth.bind(this)
  }

  componentDidMount() {
    this.setWrapperWidth()
  }

  setWrapperWidth() {
    if (this.wrapper.getBoundingClientRect) {
      const wrapperWidth = this.wrapper.getBoundingClientRect().widt
      this.setState({ wrapperWidth })
    }
  }

  toggleContent(number, isMobile) {
    return event => {
      event.preventDefault()
      const peopleLength = this.state.peopleLength + number
      const isContentOpen = isMobile || !this.state.isContentOpen
      this.setState({ isContentOpen, peopleLength }, this.setWrapperWidth)
    }
  }

  get isShowingAll() {
    return this.state.peopleLength >= this.testimonials.length
  }

  render() {
    const { isContentOpen, peopleLength } = this.state
    const testimonialsToShow = take(this.testimonials, peopleLength)
    return (
      <Fragment>
        <Columns id="eu-uso" gapless>
          {isContentOpen
            ? <Columns.Column className="side-content">
                <Section>
                  <div className="content">
                    <Slogan />
                    <p style={{ margin: '2em 0' }}>
                      Descubra o que motiva as pessoas a usar nossos cosméticos
                      - Vida Natural
                    </p>
                    <Responsive>
                      <PlusButton onClick={this.toggleContent} />
                    </Responsive>
                  </div>
                </Section>
              </Columns.Column>
            : <PlusButton onClick={this.toggleContent} floating />}
          <Columns.Column className="masonry-wrapper">
            <div ref={this.wrapper} style={{ columns: 2, columnGap: 0 }}>
              {testimonialsToShow.map((testimonial, index) =>
                <Testimonial key={index} {...testimonial} />,
              )}
            </div>
          </Columns.Column>
        </Columns>
        {this.isShowingAll ||
          <Responsive media="tabletDown">
            <Section className="more-testimonials">
              <div className="content">
                <p>Ver mais depoimentos</p>
                <PlusButton
                  number={peopleLength}
                  isMobile
                  onClick={this.toggleContent}
                />
              </div>
            </Section>
          </Responsive>}
      </Fragment>
    )
  }
}

export default Index
