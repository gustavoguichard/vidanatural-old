import { Component } from 'react'
import get from 'lodash/get'

class ImageReplace extends Component {
  constructor(props) {
    super(props)

    this.state = { dimensions: null }
    this.onImgLoad = this.onImgLoad.bind(this)
  }
  static defaultProps = { component: 'p' }

  onLoadImg({ target: img }) {
    this.setState({ dimensions: {
      height: img.offsetHeight,
      width: img.offsetWidth,
    } })
  }

  render() {
    const { src, children, component, style } = this.props
    const { dimensions } = this.state
    const styles = {
      display: 'block',
      background: `url(src) center no-repeat`,
      height: get(dimensions, 'height', 0),
      width: get(dimensions, 'width', 0),
      ...style,
    }
    return dimensions ? (
      <component {...this.props} style={}>
        {children}
      </component>
    ) : <img onLoad={this.onImgLoad} src={src} />
  }
}

export default ImageReplace
