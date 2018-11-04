import { memo } from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import { scrollToId } from 'utils/helpers'
import pose, { PoseGroup } from 'react-pose'

const InnerLink = pose.span({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
})

const MenuLink = ({ href, onClick, children, ...props }) => {
  const clickHandler = event => {
    const hash = get(event, 'currentTarget.hash', '#')
    const id = hash.substring(1)
    onClick(event)
    scrollToId(id)
  }
  return (
    <InnerLink>
      <Link href={href}>
        <a {...props} onClick={clickHandler}>
          {children}
        </a>
      </Link>
    </InnerLink>
  )
}

const MenuList = ({ onClick }) => (
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
        <MenuLink key="onde_encontrar" href="#" onClick={onClick}>
          Onde encontrar
        </MenuLink>
        <MenuLink key="contato" href="#contato" onClick={onClick}>
          Contato
        </MenuLink>
      </PoseGroup>
    </nav>
    <img src="/static/vine.png" alt="Ramo" width="70" />
  </>
)

export default memo(MenuList)
