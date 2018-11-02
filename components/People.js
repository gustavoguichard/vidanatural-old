import { useState, useRef, useEffect, lazy, memo, Suspense } from 'react'
import get from 'lodash/get'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import { Columns, Section } from 'react-bulma-components'
import { Responsive } from 'utils/responsive'
import { useProcessOnce, useWindowDimensions } from 'utils/hooks'

import Loading from 'components/Loading'
import Slogan from 'components/Slogan'
import testimonials from 'content/testimonials'
import PlusButton from 'components/testimonials/PlusButton'

import 'styles/people.scss'

const Testimonial = lazy(() => import('components/testimonials/Testimonial'))

export default memo(() => {
  const [isContentOpen, setIsContentOpen] = useState(true)
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [peopleLength, setPeopleLength] = useState(8)
  const { width } = useWindowDimensions()

  const wrapper = useRef()
  useEffect(() => {
    setWrapperWidth(wrapper.current.getBoundingClientRect().width)
  }, [isContentOpen, width])

  const shuffledTestimonials = useProcessOnce(testimonials, shuffle)
  const testimonialsToShow = take(shuffledTestimonials, peopleLength)

  const columns = wrapperWidth ? Math.round(wrapperWidth / 320) : 2
  const isShowingAll = peopleLength >= testimonials.length

  const toggleContent = (number, isMobile) => {
    return event => {
      event.preventDefault()
      setPeopleLength(peopleLength + number)
      setIsContentOpen(isMobile || !isContentOpen)
    }
  }
  return (
    <>
      <Columns id="eu-uso" gapless>
        {isContentOpen
          ? <Columns.Column className="side-content">
              <Section>
                <div className="content">
                  <Slogan />
                  <p style={{ margin: '2em 0' }}>
                    Descubra o que motiva as pessoas a usar nossos cosméticos -
                    Vida Natural
                  </p>
                  <Responsive>
                    <PlusButton onClick={toggleContent} />
                  </Responsive>
                </div>
              </Section>
            </Columns.Column>
          : <PlusButton onClick={toggleContent} floating />}
        <Columns.Column className="masonry-wrapper">
          <div ref={wrapper} style={{ columns, columnGap: 1 }}>
            {testimonialsToShow.map((testimonial, index) =>
              <Suspense key={index} fallback={<Loading size={80} />}>
                <Testimonial {...testimonial} />
              </Suspense>
            )}
          </div>
        </Columns.Column>
      </Columns>
      {isShowingAll ||
        <Responsive media="tabletDown">
          <Section
            onClick={toggleContent(peopleLength, true)}
            className="more-testimonials"
          >
            <div className="content">
              <p>Ver mais depoimentos</p>
              <PlusButton
                number={peopleLength}
                isMobile
                onClick={toggleContent}
              />
            </div>
          </Section>
        </Responsive>}
    </>
  )
})
