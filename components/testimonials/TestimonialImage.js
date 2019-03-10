import compact from 'lodash/compact'

const TestimonialImage = ({ square, src, path, ...props }) => (
  <figure className="testimonial-img">
    <img
      src={compact([path, square ? 'square' : '', src]).join('/')}
      {...props}
    />
  </figure>
)

export default TestimonialImage
