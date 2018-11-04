import { memo } from 'react'
import Menu from './Menu'
import 'styles/main.scss'

const Layout = ({ children }) => (
  <div className="app-wrapper">
    <Menu />
    {children}
  </div>
)

export default memo(Layout)
