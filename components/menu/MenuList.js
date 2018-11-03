import { memo } from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import { scrollToId } from 'utils/helpers'
import pose, { PoseGroup } from 'react-pose'

const InnerLink = pose.a({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
})

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
      <InnerLink {...props} onClick={clickHandler} />
    </Link>
  )
}

const MenuList = ({ onClick }) =>
  <>
    <nav className="menu-list-wrapper">
      <PoseGroup>
        <MenuLink key="home" href="#" onClick={onClick}>
          Home
        </MenuLink>
        <MenuLink key="sobre" href="#sobre" onClick={onClick}>
          Sobre
        </MenuLink>
        <MenuLink key="eu_uso" href="#eu-uso" onClick={onClick}>
          Eu uso
        </MenuLink>
        <MenuLink key="produtos" href="#" onClick={onClick}>
          Produtos
        </MenuLink>
        <MenuLink key="conceito" href="#" onClick={onClick}>
          Conceito
        </MenuLink>
        <MenuLink key="onde)encontrar" href="#" onClick={onClick}>
          Onde encontrar
        </MenuLink>
        <MenuLink key="contato" href="#" onClick={onClick}>
          Contato
        </MenuLink>
      </PoseGroup>
    </nav>
    <img src="/static/vine.png" alt="Ramo" width="70" />
  </>

export default memo(MenuList)
