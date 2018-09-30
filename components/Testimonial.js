import { Component } from 'react'
import { Image } from 'react-bulma-components'

class Testimonial extends Component {
  state = { columns: 1 }
  static defaultProps = { ratio: 'square' }

  componentDidMount() {
    const columns = Math.max(Math.floor(window.innerWidth / 256), 2)
    this.setState({ columns })
  }

  render() {
    const { picture, name, ratio } = this.props
    const { columns } = this.state
    const styles = {
      width: `${100 / columns}%`,
      border: 0,
      padding: 0,
      position: 'relative',
    }
    return picture ? (
      <div className="testimonial-item" style={styles}>
        <h4 style={{ position: 'absolute' }}>{name}</h4>
        <Image className="testimonial-img" src={`/static/testimonials/${picture}`} size={ratio} />
      </div>
    ) : null
  }
}

export default Testimonial
