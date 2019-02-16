const TestimonialImage = ({ src, path, ...props }) => (
  <figure className="testimonial-img">
    <img src={[path, src].join('/')} {...props} />
  </figure>
)

export default TestimonialImage
