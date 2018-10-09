import Link from 'next/link'
import get from 'lodash/get'
import { scrollToId } from 'utils/helpers'

const MenuLink = ({ href, onClick, ...props }) => {
  const clickHandler = event => {
    const hash = get(event, 'target.hash', '#')
    const lastDigitHref = get(event, 'target.href', '').substr(-1)
    const isHash = hash.substring(0, 1) === '#' || lastDigitHref === '#'
    const id = hash.substring(1)
    onClick(isHash ? event : undefined)
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
      <MenuLink href="#" onClick={onClick}>
        Home
      </MenuLink>
      <MenuLink href="#sobre" onClick={onClick}>
        Sobre
      </MenuLink>
      <MenuLink href="#eu-uso" onClick={onClick}>
        Eu uso
      </MenuLink>
      <MenuLink href="#" onClick={onClick}>
        Produtos
      </MenuLink>
      <MenuLink href="#" onClick={onClick}>
        Conceito
      </MenuLink>
      <MenuLink href="#" onClick={onClick}>
        Onde encontrar
      </MenuLink>
      <MenuLink href="#" onClick={onClick}>
        Contato
      </MenuLink>
    </nav>
    <img src="/static/vine.png" alt="Ramo" width="70" />
  </div>
