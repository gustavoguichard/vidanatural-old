import { PureComponent } from 'react'
import classnames from 'classnames'
import Helmet from 'react-helmet'
import { Transition, Spring } from 'react-spring'

import { isDesktop } from 'utils/responsive'
import Logo from 'components/Logo'
import ImageContainer from 'components/ImageContainer'
import MenuList from 'components/menu/MenuList'
import PageBreadCrumb from 'components/menu/PageBreadCrumb'
import SocialMenu from 'components/menu/SocialMenu'
import Toggler from 'components/menu/Toggler'
import 'styles/menu.scss'

class Menu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  get transitionProps() {
    return process.browser && window.innerWidth < 800
      ? { from: { opacity: 0 }, to: { opacity: 1 } }
      : {
          from: { right: '-50%', left: '-50%', opacity: 0 },
          to: { right: '0%', left: '0%', opacity: 1 },
        }
  }

  toggleMenu(event) {
    event && event.preventDefault()
    const isOpen = !this.state.isOpen
    this.setState({ isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <>
        {isOpen &&
          <Helmet>
            <html class="is-menu-open" />
          </Helmet>}
        <SocialMenu />
        <Toggler isOpen={isOpen} onClick={this.toggleMenu} />
        <Transition
          from={this.transitionProps.from}
          enter={this.transitionProps.to}
          leave={this.transitionProps.from}
          config={{ tension: 15, velocity: 4, friction: 8 }}
          reverse={isOpen}
        >
          {isOpen &&
            (({ left, right, opacity }) =>
              <>
                <MenuList
                  style={{ right, opacity }}
                  onClick={this.toggleMenu}
                />
                {isDesktop() &&
                  <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{ friction: 50 }}
                    delay={650}
                  >
                    {styles =>
                      <ImageContainer src="/static/menu-bg.jpg" className="main-menu-left" style={{ left, opacity }}>
                        <Logo clickable onClick={this.toggleMenu} style={styles} />
                        <PageBreadCrumb title="menu" style={styles} />
                      </ImageContainer>}
                  </Spring>}
              </>)}
        </Transition>
      </>
    )
  }
}

export default Menu
