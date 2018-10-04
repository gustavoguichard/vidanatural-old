import { Component, Fragment } from 'react'
import MediaQuery from 'react-responsive'
import { MEDIA_QUERY } from 'utils/responsive'
import Card from './Card'
import PopOver from './PopOver'
import TestimonialContent from './TestimonialContent'

import 'styles/testimonial.scss'

export default class extends Component {
  static defaultProps = { ratio: 'square' }
  state = { mounted: false, columns: 1, isOpen: false }

  componentDidMount() {
    this.setState({ mounted: true })
    this.setDimensions()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      this.setDimensions()
    }
  }

  closeContent() {
    this.setState({ isOpen: false })
  }

  toggleContent() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  setDimensions() {
    const { width = window.innerWidth } = this.props
    const columns = Math.min(Math.floor(width / 256), 5)
    this.setState({ columns })
  }

  render() {
    const { mounted, isOpen } = this.state
    const renderedCard = (
      <Card
        {...this.state}
        {...this.props}
        onClick={this.toggleContent.bind(this)}
      />
    )
    return mounted
      ? <Fragment>
          <MediaQuery query={MEDIA_QUERY.DESKTOP}>
            <PopOver
              {...this.props}
              isOpen={isOpen}
              onClickOutside={this.closeContent.bind(this)}
            >
              {renderedCard}
            </PopOver>
          </MediaQuery>
          <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
            {renderedCard}
          </MediaQuery>
        </Fragment>
      : <TestimonialContent {...this.props} />
  }
}
