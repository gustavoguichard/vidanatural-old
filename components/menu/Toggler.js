import { memo } from 'react'
import classnames from 'classnames'

const Toggler = ({ isOpen, onClick }) => (
  <a
    href="#menu"
    title="Menu"
    onClick={onClick}
    className={classnames('menu-icon', { 'is-open': isOpen })}
  >
    <div className="menu-icon-dash outer" />
    {isOpen || <div className="menu-icon-dash" />}
    <div className="menu-icon-dash outer" />
  </a>
)

export default memo(Toggler)
