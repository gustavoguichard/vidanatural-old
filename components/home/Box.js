import Link from 'next/link'
import { Button } from 'react-bulma-components'

const style = {
  box: {
    background: 'white',
    maxWidth: 390,
    padding: '2.5rem',
    boxShadow: '0 10px 60px 0 rgba(59, 59, 59, 0.14)',
    '*': {
      color: '#1a1a1a',
    },
  },
  title: {
    color: '#111',
  },
}

const Box = ({ to, title, children }) => (
  <div
    className="container content"
    css={{ display: 'flex', alignItems: 'center' }}
  >
    <div css={style.box}>
      <h2 css={style.title}>{title}</h2>
      <p>{children}</p>
      {to && (
        <Link href={to}>
          <Button rounded css={{ margin: '1rem 0' }}>
            Saiba +
          </Button>
        </Link>
      )}
    </div>
  </div>
)

export default Box
