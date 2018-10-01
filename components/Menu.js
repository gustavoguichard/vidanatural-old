import { Component } from 'react'
import Link from 'next/link'
import ImageReplace from 'components/ImageReplace'
import 'styles/menu.scss'

class Menu extends Component {
  state = { isOpen: false }

  render() {
    return this.state.isOpen ? (
      <div className="main-menu">
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
    ) : null
  }
}

export default Menu
