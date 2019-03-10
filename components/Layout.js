import { memo } from 'react'
import classnames from 'classnames'
import Menu from './Menu'
import Footer from './Footer'
import 'styles/main.scss'

const Layout = ({ children, light = false }) => {
  const classes = classnames('app-wrapper', { 'theme-light': light })
  return (
    <div className={classes}>
      <Menu />
      {children}
      <Footer />
    </div>
  )
}

export default memo(Layout)
