import Link from 'next/link'
import { Button } from 'react-bulma-components'

const style = {
  box: {
    background: 'white',
    maxWidth: 390,
    padding: 40,
    boxShadow: '0 10px 60px 0 rgba(59, 59, 59, 0.14)',
    '*': {
      color: '#1a1a1a',
    },
  },
}

const Box = ({ to, title, children }) => (
  <div className="container content">
    <div css={style.box}>
      <h2>{title}</h2>
      <p>{children}</p>
      {to && (
        <Link href={to}>
          <Button rounded>Saiba +</Button>
        </Link>
      )}
    </div>
  </div>
)

export default Box
