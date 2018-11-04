import { memo } from 'react'
import Menu from './Menu'
import Footer from './Footer'
import 'styles/main.scss'

const Layout = ({ children }) => (
  <div className="app-wrapper">
    <Menu />
    {children}
    <Footer />
  </div>
)

export default memo(Layout)
