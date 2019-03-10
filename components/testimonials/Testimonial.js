import { memo } from 'react'
import pose from 'react-pose'
import { useToggle } from 'utils/hooks'
import TestimonialContent from './TestimonialContent'
import TestimonialImage from './TestimonialImage'

const Content = pose.div({
  open: { height: 'auto', delayChildren: 100 },
  closed: { height: 0 },
})

const transition = { type: 'spring', stiffness: 40, damping: 10 }
const Children = pose.div({
  open: { opacity: 1, y: 0, transition },
  closed: { opacity: 0, y: 300 },
})

const Testimonial = ({ square, ...props }) => {
  const [isOpen, toggleOpen] = useToggle(false)
  const { name, picture } = props
  const path = '/static/testimonials'
  return process.browser ? (
    <div className="testimonial-item" onClick={toggleOpen}>
      <TestimonialImage
        square={square && !!props.ratio}
        src={picture}
        alt={name}
        path={path}
      />
      <Content
        pose={isOpen ? 'open' : 'closed'}
        className="testimonial-content-wrapper"
      >
        <Children>
          <TestimonialContent {...props} />
        </Children>
      </Content>
    </div>
  ) : (
    <TestimonialContent {...props} />
  )
}

export default memo(Testimonial)
