import Link from 'next/link'
import { Button, Columns } from 'react-bulma-components'
import { FaPlus } from 'react-icons/fa'

import {
  appearOnHover,
  absoluteCover,
  bgCover,
  centralize,
  saturateOnHover,
} from 'utils/css'

const Product = ({ name, src }) => (
  <Columns.Column
    css={{
      ...bgCover(`/static/products/thumbs/${src}.jpg`),
      ...saturateOnHover('1s'),
      minHeight: 300,
      minWidth: 240,
      paddingTop: '25%',
      overflow: 'hidden',
    }}
  >
    <Link href={`/produto/${src}`}>
      <a
        href={`/produto/${src}`}
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
  </Columns.Column>
)

const MoreColumn = ({ href, children, title }) => (
  <Columns.Column
    css={{
      position: 'relative',
      minWidth: 240,
      minHeight: 200,
    }}
  >
    <Link href={href}>
      <a
        href={href}
        className="tile-content center"
        css={{ ...absoluteCover(), minHeight: '100px !important' }}
      >
        <p>{children}</p>
        <button title={title} className="plus-bt">
          <FaPlus />
        </button>
      </a>
    </Link>
  </Columns.Column>
)

export default () => (
  <Columns css={{ margin: '0 !important' }}>
    <Product name="Desodorante Rollon" src="rollon" />
    <Product name="Desodorante Pasta" src="desodorante-pasta" />
    <Product name="Óleo Hidratante" src="oleo-hidratante" />
    <MoreColumn href="/produtos" title="Mais produtos">
      Conheça nossos produtos
    </MoreColumn>
  </Columns>
)
