import { memo } from 'react'
import pose from 'react-pose'
import TestimonialContent from './TestimonialContent'
import TestimonialImage from './TestimonialImage'
import { useToggle } from 'utils/hooks'

const Content = pose.div({
  open: { height: 'auto', delayChildren: 100 },
  closed: { height: 0 },
})

const Children = pose.div({
  open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 40, damping: 10 } },
  closed: { opacity: 0, y: 300 },
})

const Testimonial = props => {
  const [isOpen, toggleOpen] = useToggle(false)
  const { name, picture } = props
  const path = '/static/testimonials'
  return process.browser ? (
    <div className="testimonial-item" onClick={toggleOpen}>
      <TestimonialImage src={picture} alt={name} path={path} />
      <Content pose={isOpen ? 'open' : 'closed'} className="testimonial-content-wrapper">
        <Children><TestimonialContent {...props} /></Children>
      </Content>
    </div>
  ) : <TestimonialContent {...props} />
}

export default memo(Testimonial)
