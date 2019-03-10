import { memo } from 'react'
import flow from 'lodash/flow'
import pose, { PoseGroup } from 'react-pose'

import MenuList from 'components/menu/MenuList'
import Logo from 'components/Logo'
import ImageContainer from 'components/ImageContainer'
import PageBreadCrumb from 'components/menu/PageBreadCrumb'
import SocialMenu from 'components/menu/SocialMenu'
import Toggler from 'components/menu/Toggler'
import { useToggle, useHtmlClass, useMedia } from 'utils/hooks'

import 'styles/menu.scss'

const transition = { type: 'spring', stiffness: 70, damping: 30 }
const Left = pose.div({
  enter: { x: 0, opacity: 1, transition, delayChildren: 1200 },
  exit: { x: '-100%', opacity: 0, transition },
})
const Right = pose.div({
  enter: { x: 0, transition, staggerChildren: 50, delayChildren: 500 },
  exit: { x: '100%', transition },
})
const Center = pose.div({
  enter: { opacity: 1, transition, staggerChildren: 50, delayChildren: 500 },
  exit: { opacity: 0, transition },
})
const Appear = pose.div({
  enter: { opacity: 1, transition: { ease: 'easeOut', duration: 1000 } },
  exit: { opacity: 0 },
})

const Menu = () => {
  const [isOpen, toggler] = useToggle()
  const isDesktop = useMedia('desktop')
  const preventer = event => event && event.preventDefault()
  const toggleMenu = flow(
    preventer,
    toggler,
  )
  useHtmlClass('is-menu-open', isOpen)

  return (
    <>
      <SocialMenu />
      <Toggler isOpen={isOpen} onClick={toggleMenu} />
      <PoseGroup>
        {isOpen &&
          (isDesktop
            ? [
                <Right key="right" className="main-menu">
                  <MenuList onClick={toggleMenu} />
                </Right>,
                <Left key="left" className="main-menu-left">
                  <ImageContainer center key="left" src="/static/menu-bg.jpg">
                    <Appear key="content" css={{ alignSelf: 'center' }}>
                      <Logo clickable onClick={toggleMenu} />
                      <PageBreadCrumb title="menu" />
                    </Appear>
                  </ImageContainer>
                </Left>,
              ]
            : [
                <Center key="center" className="main-menu">
                  <MenuList onClick={toggleMenu} />
                </Center>,
              ])}
      </PoseGroup>
    </>
  )
}

export default memo(Menu)
