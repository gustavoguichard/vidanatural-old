import get from 'lodash/get'

export const nl2Br = content =>
  content.replace(/(?:\r\n|\r|\n)/g, '<br />')

export const smoothScrolling = element => {
  const top = get(element, 'offsetTop', 0)
  window.scroll({ top, left: 0, behavior: 'smooth' })
}

export const scrollToId = id => {
  const element = document.getElementById(id)
  smoothScrolling(element)
}
