import { Component } from 'react'
import get from 'lodash/get'

class ImageReplace extends Component {
  constructor(props) {
    super(props)

    this.state = { dimensions: null, isClient: false }
    this.onImgLoad = this.onImgLoad.bind(this)
  }

  componentDidMount() {
    this.setState({ isClient: true })
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
    const { children, retina, style, ...props } = this.props
    const { dimensions, isClient } = this.state
    const src = `/static/${this.props.src}`
    const factor = retina ? 2 : 1
    const styles = {
      display: 'block',
      background: `url(${src}) center no-repeat`,
      backgroundSize: 'contain',
      height: get(dimensions, 'height', 0) / factor,
      width: get(dimensions, 'width', 0) / factor,
      overflow: 'hidden',
      textIndent: '-999em',
      ...style,
    }
    return dimensions ? (
      <div {...props} style={styles}>
        {children}
      </div>
    ) : isClient ? (
      <img onLoad={this.onImgLoad} src={src} />
    ) : (
      children
    )
  }
}

export default ImageReplace
