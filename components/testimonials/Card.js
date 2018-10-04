import MediaQuery from 'react-responsive'
import { Image } from 'react-bulma-components'
import { MEDIA_QUERY } from 'utils/responsive'
import TestimonialContent from './TestimonialContent'

export default ({ isOpen, columns, onClick, ...props }) => {
  const styles = {
    width: `${100 / columns}%`,
    border: 0,
    padding: 0,
    position: 'relative',
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
      <MediaQuery query={MEDIA_QUERY.TABLET_DOWN}>
        <TestimonialContent {...props} />
      </MediaQuery>
    </div>
  )
}