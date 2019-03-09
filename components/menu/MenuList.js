import { memo } from 'react'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import get from 'lodash/get'
import map from 'lodash/map'
import { scrollToId } from 'utils/helpers'
import pose, { PoseGroup } from 'react-pose'

const InnerLink = pose.span({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
})

const MenuLink = ({ href, onClick, children, ...props }) => {
  const clickHandler = event => {
    const href = get(event, 'currentTarget.href', '')
    const urlArray = href.split('#')
    const [, hash] = urlArray
    onClick(event)
    if (!hash && !href.includes('#')) {
      Router.push(href)
    }
    scrollToId(hash)
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

const links = {
  Home: '/',
  Sobre: '/sobre',
  'Eu uso': '/eu-uso',
  Produtos: '/produtos',
  // Conceito: '/conceito',
  // 'Onde encontrar': '/onde-encontrar',
  Contato: '#contato',
}

const MenuList = ({ onClick, router }) => {
  const showLinks =
    router.pathname === '/'
      ? {
          ...links,
          Home: '#',
          Sobre: '#sobre',
          'Eu uso': '#eu-uso',
        }
      : links
  return (
    <>
      <nav className="menu-list-wrapper">
        <PoseGroup>
          {map(showLinks, (path, key) => (
            <MenuLink key={key} href={path} onClick={onClick} children={key} />
          ))}
        </PoseGroup>
      </nav>
      <img src="/static/vine.png" alt="Ramo" width="70" />
    </>
  )
}

export default memo(withRouter(MenuList))
