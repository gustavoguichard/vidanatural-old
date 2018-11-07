import { useState, memo } from 'react'
import take from 'lodash/take'
import times from 'lodash/times'
import shuffle from 'lodash/shuffle'
import { Columns, Tile } from 'react-bulma-components'
import { FaPlus } from 'react-icons/fa'

import Testimonial from 'components/testimonials/Testimonial'
import Slogan from 'components/Slogan'
import { useWindowDimensions } from 'utils/hooks'

import testimonials from 'content/testimonials'
import 'styles/people.scss'

const shuffledTestimonials = shuffle(testimonials)

const People = () => {
  const [faceCount, setFaceCount] = useState(8)
  const testimonialsToShow = take(shuffledTestimonials, faceCount)

  const { width } = useWindowDimensions()
  const columns = width ? Math.round(width / 365) : 2

  const isShowingAll = faceCount >= testimonials.length
  const loadMoreFaces = () => setFaceCount(faceCount + 4)

  return (
    <Columns id="eu-uso" gapless>
      <Columns.Column className="masonry-wrapper">
        <div className="testimonial-item no-click">
          <div className="tile-content">
            <div className="inner-content">
              <Slogan responsive />
              <p style={{ margin: '2em 0' }}>
                Descubra o que motiva as pessoas a usarem os nossos cosméticos -
                Vida Natural
              </p>
            </div>
          </div>
        </div>
        <Tile>
          {times(columns, index => (
            <Tile key={`tile-${index}`} vertical>
              {testimonialsToShow
                .filter((testimonial, filterIndex) => {
                  return (filterIndex + index + 3) % columns === 0
                })
                .map((testimonial, index) => (
                  <Testimonial key={index} {...testimonial} />
                ))}
            </Tile>
          ))}
        </Tile>
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
      </Columns.Column>
    </Columns>
  )
}

export default memo(People)
