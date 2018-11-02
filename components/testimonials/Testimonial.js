import { Component } from 'react'
import { Transition } from 'react-spring'
import TestimonialContent from './TestimonialContent'
import TestimonialImage from './TestimonialImage'

export default class extends Component {
  state = { isOpen: false }
  render() {
    const { picture } = this.props
    const { isOpen } = this.state
    const path = '/static/testimonials'
    return process.browser ? (
      <div
        className="testimonial-item"
        onClick={() => this.setState({ isOpen: !this.state.isOpen })}
      >
        <TestimonialImage src={picture} path={path} />
        <Transition
          from={{ height: 0, opacity: 0, top: 300 }}
          enter={{ height: 'auto', opacity: 1, top: 0 }}
          leave={{ height: 0, opacity: 0, top: 300 }}
          config={{ tension: 5, velocity: 10, friction: 6 }}
        >
          {isOpen &&
            (({ height, opacity, top }) =>
              <div className="testimonial-content-wrapper" style={{ height }}>
                <TestimonialContent {...this.props} style={{ opacity, top }} />
              </div>)}
        </Transition>
      </div>
    ) : <TestimonialContent {...this.props} />
  }
}
