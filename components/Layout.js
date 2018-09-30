import Header from './Header'

const Layout = props => (
  <div className="app-wrapper">
    <Header />
    {props.children}
  </div>
)

export default Layout
