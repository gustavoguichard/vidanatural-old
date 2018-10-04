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

export default ({ onClick, ...props }) =>
  <div className="main-menu" {...props}>
    <nav className="menu-list-wrapper">
      <MenuLink href="#home" onClick={onClick}>
        Home
      </MenuLink>
      <MenuLink href="#sobre" onClick={onClick}>
        Sobre
      </MenuLink>
      <MenuLink href="#eu-uso" onClick={onClick}>
        Eu uso
      </MenuLink>
      <MenuLink href="/" onClick={onClick}>
        Produtos
      </MenuLink>
      <MenuLink href="/" onClick={onClick}>
        Conceito
      </MenuLink>
      <MenuLink href="/" onClick={onClick}>
        Onde encontrar
      </MenuLink>
      <MenuLink href="/" onClick={onClick}>
        Contato
      </MenuLink>
    </nav>
    <img src="/static/vine.png" alt="Ramo" width="70" />
  </div>
