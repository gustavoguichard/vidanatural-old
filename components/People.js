import { useState, lazy, memo, Suspense } from 'react'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import { Columns, Section } from 'react-bulma-components'
import { useMedia, useProcessOnce, useWindowDimensions } from 'utils/hooks'

import Loading from 'components/Loading'
import Slogan from 'components/Slogan'
import testimonials from 'content/testimonials'
import PlusButton from 'components/testimonials/PlusButton'

import 'styles/people.scss'

const Testimonial = lazy(() => import('components/testimonials/Testimonial'))

const People = () => {
  const [isContentOpen, setIsContentOpen] = useState(true)
  const [faceCount, setFaceCount] = useState(8)

  const shuffledTestimonials = useProcessOnce(testimonials, shuffle)
  const testimonialsToShow = take(shuffledTestimonials, faceCount)

  const { width } = useWindowDimensions()
  const isDesktop = useMedia('desktop')
  const wrapperWidth = width * (isDesktop && isContentOpen ? 0.5 : 1)
  const columns = wrapperWidth ? Math.round(wrapperWidth / 320) : 2

  const isShowingAll = faceCount >= testimonials.length
  const hasMoreToShow = !(isShowingAll || isDesktop)

  const toggleContent = (number, isMobile) => event => {
    event.preventDefault()
    setFaceCount(faceCount + number)
    setIsContentOpen(isMobile || !isContentOpen)
  }

  return (
    <>
      <Columns id="eu-uso" gapless>
        {isContentOpen && (
          <Columns.Column className="side-content">
            <Section>
              <div className="content">
                <Slogan />
                <p style={{ margin: '2em 0' }}>
                  Descubra o que motiva as pessoas a usar nossos cosméticos -
                  Vida Natural
                </p>
                {isDesktop && <PlusButton onClick={toggleContent} />}
              </div>
            </Section>
          </Columns.Column>
        )}
        {isContentOpen || <PlusButton onClick={toggleContent} floating />}
        <Columns.Column className="masonry-wrapper">
          <div style={{ columns, columnGap: 1 }}>
            {testimonialsToShow.map((testimonial, index) => (
              <Suspense key={index} fallback={<Loading size={80} />}>
                <Testimonial {...testimonial} />
              </Suspense>
            ))}
          </div>
        </Columns.Column>
      </Columns>
      {hasMoreToShow && (
        <Section
          onClick={toggleContent(faceCount, true)}
          className="more-testimonials"
        >
          <div className="content">
            <p>Ver mais depoimentos</p>
            <PlusButton number={faceCount} isMobile onClick={toggleContent} />
          </div>
        </Section>
      )}
    </>
  )
}

export default People
