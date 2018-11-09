import { Suspense } from 'react'
import { Img } from 'utils/createResource'
import Loading from 'components/Loading'

const TestimonialImage = ({ src, path, thumbsPath = 'thumbs', ...props }) => (
  <figure className="testimonial-img">
    <Suspense
      maxDuration={500}
      fallback={
        <>
          <Loading size={60} />
          <img src={[path, thumbsPath, src].join('/')} {...props} />
        </>
      }
    >
      <Img src={[path, src].join('/')} {...props} />
    </Suspense>
  </figure>
)

export default TestimonialImage
