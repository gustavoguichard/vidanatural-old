import { Component, Fragment } from "react"
import { Image } from "react-bulma-components"
import MediaQuery from "react-responsive"
import ReactMarkdown from "react-markdown"
import Popover, { ArrowContainer } from "react-tiny-popover"
import compact from "lodash/compact"
import ImageReplace from "components/ImageReplace"
import { nl2Br } from "utils/helpers"
import { MEDIA_QUERY } from "utils/responsive"

import "styles/testimonial.scss"

const TestimonialContent = ({ name, location, role, content }) => {
  const title = compact([name, role]).join(" - ")
  return (
    <article className="pop-over">
      <MediaQuery query={MEDIA_QUERY.DESKTOP}>
        <ImageReplace className="testimonial-slogan" src="slogan-black.png">
          <h4>Eu uso cosmética consciente</h4>
        </ImageReplace>
      </MediaQuery>
      <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
        <h3 className="title is-4">{title}</h3>
      </MediaQuery>
      <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
      <MediaQuery query={MEDIA_QUERY.DESKTOP}>
        <em>
          {title}
        </em>
      </MediaQuery>
      <br />
      <em>
        {location}
      </em>
    </article>
  )
}

const PopoverContent = props => args =>
  <ArrowContainer
    {...args}
    disableReposition
    arrowColor="#629f81"
    arrowSize={20}
  >
    <TestimonialContent {...props} />
  </ArrowContainer>

class Testimonial extends Component {
  static defaultProps = { ratio: "square" }
  state = { mounted: false, columns: 1, isContentOpen: false }

  componentDidMount() {
    this.setState({ mounted: true })
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

  get renderContent() {
    const { content, picture, name, ratio } = this.props
    const { columns, isContentOpen } = this.state
    const styles = {
      width: `${100 / columns}%`,
      border: 0,
      padding: 0,
      position: "relative"
    }
    return (
      <div
        className="testimonial-item"
        style={styles}
        onClick={() => this.setState({ isContentOpen: !isContentOpen })}
      >
        <Image
          className="testimonial-img"
          src={`/static/testimonials/${picture}`}
          size={ratio}
        />
        <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
          <TestimonialContent {...this.props} />
        </MediaQuery>
      </div>
    )
  }

  render() {
    const { mounted, isContentOpen } = this.state
    return mounted
      ? <Fragment>
          <MediaQuery query={MEDIA_QUERY.DESKTOP}>
            <Popover
              isOpen={isContentOpen}
              onClickOutside={() => this.setState({ isContentOpen: false })}
              position="right"
              content={PopoverContent(this.props)}
            >
              {this.renderContent}
            </Popover>
          </MediaQuery>
          <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
            {this.renderContent}
          </MediaQuery>
        </Fragment>
      : <TestimonialContent {...this.props} />
  }
}

export default Testimonial
