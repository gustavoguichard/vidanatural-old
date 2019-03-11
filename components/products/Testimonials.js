import { memo } from 'react'
import Masonry from 'components/Masonry'
import Testimonial from 'components/testimonials/Testimonial'
import { useColumns, useProcessOnce } from 'utils/hooks'
import take from 'lodash/take'
import filter from 'lodash/filter'
import shuffle from 'lodash/shuffle'

import testimonials from 'content/testimonials'

const filterByTag = tag => item => item.tags.includes(tag)

export default memo(({ tag = 'all' }) => {
  const columns = useColumns()
  const shuffled = useProcessOnce(shuffle, testimonials)
  const filteredTestimonials = filter(shuffled, filterByTag(tag))
  const genericTestimonials = filter(shuffled, filterByTag('all'))
  const testimonialsToShow = [...filteredTestimonials, ...genericTestimonials]
  return (
    <div className="tile" key="product-testimonials">
      <Masonry columns={columns}>
        {take(testimonialsToShow, 4).map((testimonial, index) => (
          <Testimonial square key={index} {...testimonial} />
        ))}
      </Masonry>
    </div>
  )
})
