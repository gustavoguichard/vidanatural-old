import { Image } from 'react-bulma-components'
import { Responsive } from 'utils/responsive'
import TestimonialContent from './TestimonialContent'

export default ({ isOpen, columns, onClick, ...props }) => {
  const styles = {
    display: 'inline-block',
    width: '100%',
    margin: '0 0 -6px',
  }
  return (
    <div
      className="testimonial-item"
      style={styles}
      onClick={onClick}
    >
      <Image
        className="testimonial-img"
        src={`/static/testimonials/${props.picture}`}
        size={props.ratio}
      />
      <Responsive media="tabletDown">
        <TestimonialContent {...props} />
      </Responsive>
    </div>
  )
}