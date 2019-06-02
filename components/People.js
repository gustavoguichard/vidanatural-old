import { useState, useRef, memo, useEffect } from 'react'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'

import Testimonial from 'components/testimonials/Testimonial'
import Masonry from 'components/Masonry'
import { useWindowDimensions, useProcessOnce } from 'utils/hooks'

import testimonials from 'content/testimonials'
import 'styles/banner.scss'
import 'styles/people.scss'

const People = ({ children, dark, faceCount = Infinity, ...props }) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const shuffledTestimonials = useProcessOnce(shuffle, testimonials)
  const testimonialsToShow = take(shuffledTestimonials, faceCount)

  const { width } = useWindowDimensions()
  const wrapper = useRef(null)
  useEffect(
    () => setWrapperWidth(wrapper.current.getBoundingClientRect().width),
    [width],
  )
  const columns = wrapperWidth ? Math.round(wrapperWidth / 365) : 2

  return (
    <div id="eu-uso" css={{ position: 'relative' }}>
      <div className="tile">
        <div className="tile" ref={wrapper}>
          <Masonry
            css={{ filter: dark ? 'contrast(1.3) brightness(.8)' : undefined }}
            columns={columns}
          >
            {testimonialsToShow.map((testimonial, index) => (
              <Testimonial {...props} key={index} {...testimonial} />
            ))}
          </Masonry>
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(People)
