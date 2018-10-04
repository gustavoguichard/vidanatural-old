import { Component, Fragment } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { Transition, Spring } from 'react-spring'
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'

import { isTabletDown } from 'utils/responsive'
import ImageReplace from 'components/ImageReplace'
import 'styles/menu.scss'

class Menu extends Component {
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
      <Fragment>
        <aside className="social-icons">
          <a href="https://facebook.com/vidanatural.eco/" target="blank">
            <TiSocialFacebook size="1.8em" />
          </a>
          <a href="https://www.instagram.com/vidanatural.eco/" target="blank">
            <TiSocialInstagram size="1.8em" />
          </a>
        </aside>
        <a
          href="#menu"
          onClick={this.toggleMenu}
          className={classnames('menu-icon', { 'is-open': isOpen })}
        >
          <div className="menu-icon-dash outer" />
          {isOpen || <div className="menu-icon-dash" />}
          <div className="menu-icon-dash outer" />
        </a>
        <Transition
          from={this.transitionProps.from}
          enter={this.transitionProps.to}
          leave={this.transitionProps.from}
          config={{ tension: 15, velocity: 4, friction: 8 }}
          reverse={isOpen}
        >
          {isOpen &&
            (({ left, right, opacity }) =>
              <Fragment>
                <div
                  className="main-menu"
                  style={{ right, opacity: isTabletDown() ? opacity : 1 }}
                >
                  <ImageReplace src="slogan.png">
                    <h2>Eu uso</h2>
                    <h3>Cosmética Consciente</h3>
                  </ImageReplace>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </div>
                {!isTabletDown() &&
                  <div className="main-menu-left" style={{ left, opacity }}>
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                      delay={500}
                    >
                      {styles =>
                        <ImageReplace src="logo-white.png" style={styles}>
                          <h1>Vida Natural</h1>
                        </ImageReplace>}
                    </Spring>
                    <div className="page-breadcrumb">
                      <img src="/static/page-feather.png" alt="icone" />
                      <span>menu</span>
                    </div>
                  </div>}
              </Fragment>)}
        </Transition>
      </Fragment>
    )
  }
}

export default Menu
