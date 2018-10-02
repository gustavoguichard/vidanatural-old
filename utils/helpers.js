export const nl2Br = content =>
  content.replace(/(?:\r\n|\r|\n)/g, '<br />')
