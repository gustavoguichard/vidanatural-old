import { useState, useRef, memo, useEffect } from 'react'
import take from 'lodash/take'
import shuffle from 'lodash/shuffle'
import { Button } from 'react-bulma-components'
import { FaPlus } from 'react-icons/fa'

import Testimonial from 'components/testimonials/Testimonial'
import Slogan from 'components/Slogan'
import Masonry from 'components/Masonry'
import { useWindowDimensions, useProcessOnce, useMedia } from 'utils/hooks'

import testimonials from 'content/testimonials'
import 'styles/banner.scss'
import 'styles/people.scss'

const Intro = memo(({ isSidebar, children }) => (
  <div
    className={
      isSidebar ? 'tile is-vertical content-wrapper' : 'testimonial-item'
    }
    style={isSidebar ? { order: 2 } : {}}
  >
    <div
      className={isSidebar ? 'banner-content-wrapper' : 'tile-content'}
      style={isSidebar ? { justifyContent: 'center', maxHeight: '100vh' } : {}}
    >
      <div className={isSidebar ? 'banner-content' : 'inner-content'}>
        <Slogan responsive />
        <p style={{ margin: '2em 0' }}>
          Descubra o que motiva as pessoas a usarem os nossos cosméticos - Vida
          Natural
        </p>
      </div>
      {children}
    </div>
  </div>
))

const People = () => {
  const [faceCount, setFaceCount] = useState(6)
  const [isOpen, setIsOpen] = useState(false)
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const shuffledTestimonials = useProcessOnce(shuffle, testimonials)
  const testimonialsToShow = take(shuffledTestimonials, faceCount)

  const { width } = useWindowDimensions()
  const wrapper = useRef(null)
  useEffect(
    () => setWrapperWidth(wrapper.current.getBoundingClientRect().width),
    [width, isOpen],
  )
  const columns = wrapperWidth ? Math.round(wrapperWidth / 365) : 2
  const isDesktop = useMedia('desktop')

  const isShowingAll = faceCount >= testimonials.length
  const loadMoreFaces = () => setFaceCount(faceCount + 4)
  const openContent = () => {
    setIsOpen(true)
    loadMoreFaces()
  }

  const showSidebar = isDesktop && !isOpen
  const showMoreTile = !(showSidebar || isShowingAll)

  return (
    <div id="eu-uso">
      <div className="tile">
        {showSidebar && (
          <Intro isSidebar>
            <div className="banner-content">
              <Button
                color="light"
                className="is-large"
                rounded
                outlined
                onClick={openContent}
              >
                + Depoimentos
              </Button>
            </div>
          </Intro>
        )}
        <div className="tile" ref={wrapper}>
          <Masonry columns={columns}>
            {isDesktop || <Intro />}
            {testimonialsToShow.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
            {showMoreTile && (
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
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default memo(People)
