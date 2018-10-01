import { Component, Fragment } from 'react'
import { Image } from 'react-bulma-components'
import Popover, { ArrowContainer } from 'react-tiny-popover'

import ImageReplace from 'components/ImageReplace'

import 'styles/testimonial.scss'

const nl2Br = content =>
  content.split(/(?:\r\n|\r|\n)/g).map((item, index) =>
    <Fragment key={index}>
      {item}
      <br />
    </Fragment>
  )

class Testimonial extends Component {
  state = { columns: 1, isPopoverOpen: false }
  static defaultProps = { ratio: "square" }

  componentDidMount() {
    this.setDimensions()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      this.setDimensions()
    }
  }

  setDimensions() {
    const { width = window.innerWidth } = this.props
    const columns = Math.min(Math.floor(width / 256), 5)
    this.setState({ columns })
  }

  render() {
    const { content, picture, name, ratio } = this.props
    const { columns, isPopoverOpen } = this.state
    const styles = {
      width: `${100 / columns}%`,
      border: 0,
      padding: 0,
      position: "relative"
    }
    return picture
      ? <Popover
          isOpen={isPopoverOpen}
          onClickOutside={() => this.setState({ isPopoverOpen: false })}
          position="right"
          content={
            <div className="pop-over">
              <ImageReplace src="slogan-black.png">
                <h4>Eu uso cosmética consciente</h4>
              </ImageReplace>
              <p>{nl2Br(content)}</p>
              <em>{name}</em>
            </div>
          }
        >
          <div
            className="testimonial-item"
            style={styles}
            onClick={() => this.setState({ isPopoverOpen: !isPopoverOpen })}
          >
            <Image
              className="testimonial-img"
              src={`/static/testimonials/${picture}`}
              size={ratio}
            />
          </div>
        </Popover>
      : null
  }
}

export default Testimonial
