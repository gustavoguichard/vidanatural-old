import { useState } from 'react'
import { withRouter } from 'next/router'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import { Columns } from 'react-bulma-components'
import { FaPlus } from 'react-icons/fa'

import Testimonial from 'components/testimonials/Testimonial'
import Slogan from 'components/Slogan'
import { useWindowDimensions } from 'utils/hooks'

import testimonials from 'content/testimonials'
import 'styles/people.scss'

const shuffledTestimonials = shuffle(testimonials)

const People = ({ router }) => {
  const [faceCount, setFaceCount] = useState(8)

  const testimonialsToShow = take(shuffledTestimonials, faceCount)

  const { width } = useWindowDimensions()
  const columns = width ? Math.round(width / 365) : 2
  const increaseFactor = router.pathname === '/' ? 4 : 8

  const isShowingAll = faceCount >= testimonials.length

  const loadMoreFaces = () => setFaceCount(faceCount + increaseFactor)

  return (
    <Columns id="eu-uso" gapless>
      <Columns.Column className="masonry-wrapper">
        <div style={{ columns, columnGap: 1 }}>
          <div className="testimonial-item no-click">
            <div className="tile-content">
              <div className="inner-content">
                <Slogan responsive />
                <p style={{ margin: '2em 0' }}>
                  Descubra o que motiva as pessoas a usar nossos cosméticos -
                  Vida Natural
                </p>
              </div>
            </div>
          </div>
          {testimonialsToShow.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
          {isShowingAll || (
            <div className="testimonial-item">
              <div className="tile-content center" onClick={loadMoreFaces}>
                <p>Ver mais depoimentos</p>
                <button
                  title="Mais depoimentos"
                  className="plus-bt"
                  onClick={loadMoreFaces}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          )}
        </div>
      </Columns.Column>
    </Columns>
  )
}

export default withRouter(People)
