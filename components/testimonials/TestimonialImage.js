import { Suspense } from 'react'
import { Img } from 'the-platform'
import Loading from 'components/Loading'

export default ({ src, path, thumbsPath = 'thumbs' }) => (
  <Suspense
    maxDuration={500}
    fallback={
      <figure className="testimonial-img">
        <Loading size={60} />
        <img src={[path, thumbsPath, src].join('/')} />
      </figure>
    }
  >
    <figure className="testimonial-img">
      <Img src={[path, src].join('/')} />
    </figure>
  </Suspense>
)
