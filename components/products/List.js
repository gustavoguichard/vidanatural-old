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
  </Columns.Column>
)

export default () => (
  <Columns css={{ margin: '0 !important' }}>
    <Product name="Desodorante Rollon" src="rollon" />
    <Product name="Desodorante Pasta" src="desodorante_pasta" />
    <Product name="Óleo Hidratante" src="oleo_hidratante" />
    <Columns.Column
      css={{
        position: 'relative',
        minWidth: 240,
        minHeight: 200,
      }}
    >
      <a
        className="tile-content center"
        href="/produtos"
        css={{ ...absoluteCover(), minHeight: '100px !important' }}
      >
        <p>Conheça nossos produtos</p>
        <button title="Mais produtos" className="plus-bt">
          <FaPlus />
        </button>
      </a>
    </Columns.Column>
  </Columns>
)
