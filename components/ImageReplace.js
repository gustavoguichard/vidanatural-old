import { Component } from 'react'
import get from 'lodash/get'

class ImageReplace extends Component {
  constructor(props) {
    super(props)

    this.state = { dimensions: null }
    this.onImgLoad = this.onImgLoad.bind(this)
  }

  onImgLoad({ target: img }) {
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth,
      },
    })
  }

  render() {
    const { children, style, ...props } = this.props
    const { dimensions } = this.state
    const src = `/static/${this.props.src}`
    const styles = {
      display: 'block',
      background: `url(${src}) center no-repeat`,
      backgroundSize: 'contain',
      height: get(dimensions, 'height', 0),
      width: get(dimensions, 'width', 0),
      overflow: 'hidden',
      textIndent: '-999em',
      ...style,
    }
    return dimensions ? (
      <div {...props} style={styles}>
        {children}
      </div>
    ) : process.browser ? (
      <img onLoad={this.onImgLoad} src={src} />
    ) : (
      children
    )
  }
}

export default ImageReplace
