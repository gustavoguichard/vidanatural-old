import Link from 'next/link'
import { Button } from 'react-bulma-components'
import take from 'lodash/take'
import { useColumns } from 'utils/hooks'

import Masonry from 'components/Masonry'

import products from 'content/products'

import {
  appearOnHover,
  absoluteCover,
  bgCover,
  centralize,
  saturateOnHover,
} from 'utils/css'

const Product = ({ name, path }) => (
  <div
    css={{
      ...bgCover(`/static/products/thumbs/${path}.jpg`),
      ...saturateOnHover('1s'),
      minHeight: 300,
      minWidth: 240,
      paddingTop: '25%',
      overflow: 'hidden',
    }}
  >
    <Link href={`/produto/${path}`}>
      <a
        href={`/produto/${path}`}
        css={{
          ...absoluteCover(),
          ...appearOnHover(),
          ...centralize(),
          backgroundColor: 'rgba(0,0,0,.6)',
        }}
      >
        <Button color="light" className="is-large" rounded outlined>
          {name}
        </Button>
      </a>
    </Link>
  </div>
)

const MoreColumn = ({ href, children }) => (
  <div css={{ position: 'relative', minWidth: 240 }}>
    <Link href={href}>
      <a
        href={href}
        className="tile-content center"
        css={{ ...absoluteCover(), padding: '15px 30px' }}
      >
        {children}
      </a>
    </Link>
  </div>
)

export default ({ short = false }) => {
  const columns = useColumns()
  return short ? (
    <Masonry columns={columns} adjust={2}>
      {take(products, 3).map((product, index) => (
        <Product key={`product-${index}`} {...product} />
      ))}
      <MoreColumn href="/produtos">
        <p>
          Substancias sintéticas são absorvidas pelo nosso organismo{' '}
          <strong>TODOS</strong> os dias.
          <br />
          <strong>Nós podemos fazer melhor que isso!</strong>
        </p>
        <Button
          color="light"
          rounded
          outlined
          css={{ marginTop: 20, alignSelf: 'flex-start' }}
          title="Mais produtos"
        >
          Quer ver?
        </Button>
      </MoreColumn>
    </Masonry>
  ) : (
    <Masonry columns={columns} adjust={0}>
      {products.map((product, index) => (
        <Product key={`product-${index}`} {...product} />
      ))}
    </Masonry>
  )
}
