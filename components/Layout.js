import Menu from './Menu'
import 'styles/main.scss'

const Layout = props => (
  <div className="app-wrapper">
    <Menu />
    {props.children}
  </div>
)

export default Layout
