import { Suspense } from 'react'
import { Img } from 'utils/createResource'
import Loading from 'components/Loading'

const TestimonialImage = ({ src, path, thumbsPath = 'thumbs', ...props }) => (
  <Suspense
    maxDuration={500}
    fallback={
      <figure className="testimonial-img">
        <Loading size={60} />
        <img src={[path, thumbsPath, src].join('/')} {...props} />
      </figure>
    }
  >
    <figure className="testimonial-img">
      <Img src={[path, src].join('/')} {...props} />
    </figure>
  </Suspense>
)

export default TestimonialImage
