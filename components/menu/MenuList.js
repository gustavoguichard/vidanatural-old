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
    const target = get(event, 'currentTarget.href', '')
    const urlArray = target.split('#')
    const [, hash] = urlArray
    onClick(event)
    if (!hash && !target.includes('#')) {
      Router.push(target)
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

const MenuList = ({ onClick, router }) => {
  const prefix = router.pathname === '/' ? '#' : '/'
  const links = {
    Home: `${prefix}`,
    Produtos: '/produtos',
    Sobre: `${prefix}sobre`,
    'Eu uso': `${prefix}eu-uso`,
    Contato: '#contato',
  }
  return (
    <>
      <nav className="menu-list-wrapper">
        <PoseGroup>
          {map(links, (path, key) => (
            <MenuLink key={key} href={path} onClick={onClick}>
              {key}
            </MenuLink>
          ))}
        </PoseGroup>
      </nav>
      <img src="/static/vine.png" alt="Ramo" width="70" />
    </>
  )
}

export default withRouter(MenuList)
