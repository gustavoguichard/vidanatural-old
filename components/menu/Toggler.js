import classnames from 'classnames'

export default ({ isOpen, onClick }) =>
  <a
    href="#menu"
    onClick={onClick}
    className={classnames('menu-icon', { 'is-open': isOpen })}
  >
    <div className="menu-icon-dash outer" />
    {isOpen || <div className="menu-icon-dash" />}
    <div className="menu-icon-dash outer" />
  </a>
