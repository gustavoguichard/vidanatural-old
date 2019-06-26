import { memo, useRef } from 'react'
import classnames from 'classnames'
import CustomerChat, { Context } from 'utils/CustomerChat'
import Menu from './Menu'
import Footer from './Footer'
import 'styles/main.scss'

const chat = new CustomerChat(process.env.FRESHCHAT_TOKEN)

const Layout = ({ children, light = false }) => {
  const classes = classnames('app-wrapper', { 'theme-light': light })
  return (
    <Context.Provider value={chat}>
      <div className={classes}>
        <Menu />
        {children}
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default memo(Layout)
