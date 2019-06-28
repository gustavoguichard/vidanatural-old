import Link from 'next/link'
import { Button } from 'react-bulma-components'
import map from 'lodash/map'
import Img from 'components/Img'

const style = {
  box: {
    padding: '2.5rem',
    '*': {
      color: '#1a1a1a',
    },
  },
  title: {
    color: '#111 !important',
  },
  bt: {
    margin: '1rem 0',
    background: '#111',
    color: 'white',
    '&:hover': { color: 'white' },
  },
}

const Box = ({ product }) => (
  <div
    className="container content"
    css={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
  >
    <div css={style.box}>
      <h2 css={style.title}>
        * {product.name}
        <br />
        :) {product.slogan}
      </h2>
      <Link href={`/produto/${product.path}`}>
        <Button outlined rounded css={style.bt}>
          Saiba +
        </Button>
      </Link>
    </div>
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Img
        src={require(`../../static/products/transparent/${product.path}.png`)}
        low={require(`../../static/products/transparent/${product.path}.png?lqip`)}
        webp={require(`../../static/products/transparent/${product.path}.png?webp`)}
        css={{ maxWidth: 320, maxHeight: 480 }}
        alt={product.name}
      />
      {map(product.stamps, (value, key) => (
        <Img
          css={{ maxWidth: 80, alignSelf: 'flex-end', margin: 15 }}
          key={product.path + key}
          src={require(`../../static/${key}.png`)}
          low={require(`../../static/${key}.png?lqip`)}
          webp={require(`../../static/${key}.png?webp`)}
          alt={value}
        />
      ))}
    </div>
  </div>
)

export default Box
