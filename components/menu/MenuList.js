import Link from 'next/link'
import get from 'lodash/get'
import { scrollToId } from 'utils/helpers'

const MenuLink = ({ href, onClick, ...props }) => {
  const clickHandler = event => {
    event.preventDefault()
    const id = get(event, 'target.hash', '#').substring(1)
    onClick(event)
    scrollToId(id)
  }
  return (
    <Link href={href}>
      <a {...props} onClick={clickHandler} />
    </Link>
  )
}

export default props =>
  <div className="main-menu" {...props}>
    <nav className="menu-list-wrapper">
      <MenuLink href="#home" {...props}>
        Home
      </MenuLink>
      <MenuLink href="#sobre" {...props}>
        Sobre
      </MenuLink>
      <MenuLink href="#eu-uso" {...props}>
        Eu uso
      </MenuLink>
      <MenuLink href="/" {...props}>
        Produtos
      </MenuLink>
      <MenuLink href="/" {...props}>
        Conceito
      </MenuLink>
      <MenuLink href="/" {...props}>
        Onde encontrar
      </MenuLink>
      <MenuLink href="/" {...props}>
        Contato
      </MenuLink>
    </nav>
    <img src="/static/vine.png" alt="Ramo" width="70" />
  </div>
